import { MongoClient, ObjectId } from "mongodb";

// Obtener la URI de MongoDB desde las variables de entorno
const MONGODB_URI = import.meta.env.MONGODB_URI;

// Interfaces para la base de datos
export interface Platform {
  _id?: ObjectId;
  name: string;
  slug: string;
  logo: string;
  website: string;
  color: string;
}

export interface Serie {
  _id?: ObjectId;
  title: string;
  slug: string;
  description: string;
  genre: string[];
  network: string;
  startYear: number;
  endYear?: number;
  totalSeasons: number;
  totalEpisodes: number;
  status: "ongoing" | "ended" | "cancelled";
  imdbId: string;
  imdbRating: number;
  posterUrl?: string;
  backdropUrl?: string;
  platforms: Array<{
    name: string;
    available: boolean;
    isPremium: boolean;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Episode {
  _id?: ObjectId;
  seriesId: ObjectId;
  title: string;
  season: number;
  episode: number;
  airDate: Date;
  description: string;
  createdAt: Date;
}

export interface Analisis {
  _id?: ObjectId;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  universe?: "blue" | "red";
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
  };
  status: "draft" | "published";
  readTime?: number;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

// Cliente MongoDB global
let mongoClient: MongoClient | null = null;

// Función para obtener el cliente de MongoDB
async function getMongoClient(): Promise<MongoClient> {
  if (!MONGODB_URI) {
    throw new Error("MongoDB URI not configured");
  }

  if (mongoClient) {
    return mongoClient;
  }

  try {
    mongoClient = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    await mongoClient.connect();
    console.log("Connected to MongoDB");
    return mongoClient;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Función para conectar a MongoDB de forma segura
export async function connectMongoDB() {
  const client = await getMongoClient();
  const db = client.db("seriesAnalysisDB");

  return {
    client,
    db,
    seriesCollection: db.collection<Serie>("series"),
    analysisCollection: db.collection<Analisis>("analysis"),
    episodeCollection: db.collection<Episode>("episodes"),
    platformCollection: db.collection<Platform>("platforms"),
  };
}

// Función para obtener todas las series
export async function getSeries(): Promise<Serie[]> {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return [];
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    return await seriesCollection.find().sort({ startYear: -1 }).toArray();
  } catch (error) {
    console.error("Error fetching series:", error);
    return [];
  }
}

// Función para obtener serie por slug
export async function getSerieBySlug(slug: string): Promise<Serie | null> {
  if (!MONGODB_URI) {
    return null;
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    return await seriesCollection.findOne({ slug });
  } catch (error) {
    console.error("Error fetching serie by slug:", error);
    return null;
  }
}

// Función para obtener análisis por serie
export async function getAnalisisBySerie(
  serieSlug: string
): Promise<Analisis[]> {
  if (!MONGODB_URI) {
    return [];
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection
      .find({
        status: "published",
        $or: [{ "serie.slug": serieSlug }, { tags: serieSlug }],
      })
      .sort({ publishedAt: -1 })
      .toArray();
  } catch (error) {
    console.error("Error fetching analysis by serie:", error);
    return [];
  }
}

// Función para obtener todos los análisis
export async function getAnalisis(): Promise<Analisis[]> {
  if (!MONGODB_URI) {
    return [];
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection
      .find({ status: "published" })
      .sort({ publishedAt: -1 })
      .toArray();
  } catch (error) {
    console.error("Error fetching analysis:", error);
    return [];
  }
}

// Función para obtener análisis por slug
export async function getAnalisisBySlug(
  slug: string
): Promise<Analisis | null> {
  if (!MONGODB_URI) {
    return null;
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection.findOne({ slug, status: "published" });
  } catch (error) {
    console.error("Error fetching analysis by slug:", error);
    return null;
  }
}

// Función para insertar análisis
export async function insertAnalisis(analisis: Omit<Analisis, "_id">) {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return "sample-id";
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    const result = await analysisCollection.insertOne(analisis);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error inserting analysis:", error);
    throw error;
  }
}
