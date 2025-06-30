import { MongoClient, ObjectId } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";
let mongoClient = null;
async function getMongoClient() {
  if (mongoClient) {
    return mongoClient;
  }
  try {
    mongoClient = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5e3,
      socketTimeoutMS: 45e3
    });
    await mongoClient.connect();
    console.log("Connected to MongoDB");
    return mongoClient;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
async function connectMongoDB() {
  const client = await getMongoClient();
  const db = client.db("seriesAnalysisDB");
  return {
    client,
    db,
    seriesCollection: db.collection("series"),
    analysisCollection: db.collection("analysis"),
    episodeCollection: db.collection("episodes"),
    platformCollection: db.collection("platforms")
  };
}
async function getSeries() {
  try {
    const { seriesCollection } = await connectMongoDB();
    return await seriesCollection.find().sort({ startYear: -1 }).toArray();
  } catch (error) {
    console.error("Error fetching series:", error);
    return [];
  }
}
async function getSerieBySlug(slug) {
  try {
    const { seriesCollection } = await connectMongoDB();
    return await seriesCollection.findOne({ slug });
  } catch (error) {
    console.error("Error fetching serie by slug:", error);
    return null;
  }
}
async function getAnalisisBySerie(serieSlug) {
  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection.find({
      status: "published",
      $or: [{ "serie.slug": serieSlug }, { tags: serieSlug }]
    }).sort({ publishedAt: -1 }).toArray();
  } catch (error) {
    console.error("Error fetching analysis by serie:", error);
    return [];
  }
}
async function getAnalisis() {
  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection.find({ status: "published" }).sort({ publishedAt: -1 }).toArray();
  } catch (error) {
    console.error("Error fetching analysis:", error);
    return [];
  }
}
async function insertAnalisis(analisis) {
  try {
    const { analysisCollection } = await connectMongoDB();
    const result = await analysisCollection.insertOne(analisis);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error inserting analysis:", error);
    throw error;
  }
}
async function insertSerie(serie) {
  try {
    const { seriesCollection } = await connectMongoDB();
    const result = await seriesCollection.insertOne(serie);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error inserting serie:", error);
    throw error;
  }
}
async function updateSerie(id, serie) {
  try {
    const { seriesCollection } = await connectMongoDB();
    const result = await seriesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...serie, updatedAt: /* @__PURE__ */ new Date() } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating serie:", error);
    throw error;
  }
}
async function deleteSerie(id) {
  try {
    const { seriesCollection } = await connectMongoDB();
    const result = await seriesCollection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting serie:", error);
    throw error;
  }
}
async function updateAnalisis(id, analisis) {
  try {
    const { analysisCollection } = await connectMongoDB();
    const result = await analysisCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...analisis, updatedAt: /* @__PURE__ */ new Date() } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating analysis:", error);
    throw error;
  }
}
async function deleteAnalisis(id) {
  try {
    const { analysisCollection } = await connectMongoDB();
    const result = await analysisCollection.deleteOne({
      _id: new ObjectId(id)
    });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting analysis:", error);
    throw error;
  }
}
async function getUsersCollection() {
  const client = await getMongoClient();
  const db = client.db("seriesAnalysisDB");
  return db.collection("users");
}
async function getUserByCredentials(identifier) {
  try {
    const usersCollection = await getUsersCollection();
    return await usersCollection.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
async function updateLastLogin(userId) {
  try {
    const usersCollection = await getUsersCollection();
    const result = await usersCollection.updateOne(
      { _id: userId },
      {
        $set: {
          lastLogin: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating last login:", error);
    return false;
  }
}

export { getAnalisis as a, getUserByCredentials as b, connectMongoDB as c, deleteAnalisis as d, updateLastLogin as e, insertSerie as f, getSeries as g, updateSerie as h, insertAnalisis as i, deleteSerie as j, getSerieBySlug as k, getAnalisisBySerie as l, updateAnalisis as u };
