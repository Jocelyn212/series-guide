import { MongoClient, ObjectId } from "mongodb";

// Obtener la URI de MongoDB desde las variables de entorno
const MONGODB_URI = import.meta.env.MONGODB_URI as string;

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

export interface User {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string; // hashed password
  role: "admin" | "user";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
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

// Función para insertar serie
export async function insertSerie(serie: Omit<Serie, "_id">) {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return "sample-id";
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    const result = await seriesCollection.insertOne(serie);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error inserting serie:", error);
    throw error;
  }
}

// Función para actualizar serie
export async function updateSerie(id: string, serie: Partial<Serie>) {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return false;
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    const result = await seriesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...serie, updatedAt: new Date() } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating serie:", error);
    throw error;
  }
}

// Función para eliminar serie
export async function deleteSerie(id: string) {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return false;
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    const result = await seriesCollection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting serie:", error);
    throw error;
  }
}

// Función para actualizar análisis
export async function updateAnalisis(id: string, analisis: Partial<Analisis>) {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return false;
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    const result = await analysisCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...analisis, updatedAt: new Date() } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating analysis:", error);
    throw error;
  }
}

// Función para eliminar análisis
export async function deleteAnalisis(id: string) {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return false;
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    const result = await analysisCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting analysis:", error);
    throw error;
  }
}

// Función para obtener serie por ID
export async function getSerieById(id: string): Promise<Serie | null> {
  if (!MONGODB_URI) {
    return null;
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    return await seriesCollection.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Error fetching serie by ID:", error);
    return null;
  }
}

// Función para obtener análisis por ID
export async function getAnalisisById(id: string): Promise<Analisis | null> {
  if (!MONGODB_URI) {
    return null;
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Error fetching analysis by ID:", error);
    return null;
  }
}

// Función para buscar series
export async function searchSeries(query: string): Promise<Serie[]> {
  if (!MONGODB_URI) {
    return [];
  }

  try {
    const { seriesCollection } = await connectMongoDB();
    return await seriesCollection
      .find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
          { genre: { $regex: query, $options: "i" } },
          { network: { $regex: query, $options: "i" } },
        ],
      })
      .sort({ startYear: -1 })
      .toArray();
  } catch (error) {
    console.error("Error searching series:", error);
    return [];
  }
}

// Función para buscar análisis
export async function searchAnalisis(query: string): Promise<Analisis[]> {
  if (!MONGODB_URI) {
    return [];
  }

  try {
    const { analysisCollection } = await connectMongoDB();
    return await analysisCollection
      .find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { content: { $regex: query, $options: "i" } },
          { excerpt: { $regex: query, $options: "i" } },
          { tags: { $regex: query, $options: "i" } },
        ],
      })
      .sort({ createdAt: -1 })
      .toArray();
  } catch (error) {
    console.error("Error searching analysis:", error);
    return [];
  }
}

// Funciones para autenticación y gestión de usuarios

// Función para obtener colección de usuarios
async function getUsersCollection() {
  const client = await getMongoClient();
  const db = client.db("seriesAnalysisDB");
  return db.collection<User>("users");
}

// Función para crear un usuario
export async function createUser(
  userData: Omit<User, "_id" | "createdAt" | "updatedAt">
): Promise<User | null> {
  try {
    const usersCollection = await getUsersCollection();

    // Verificar si el usuario ya existe
    const existingUser = await usersCollection.findOne({
      $or: [{ username: userData.username }, { email: userData.email }],
    });

    if (existingUser) {
      throw new Error("Usuario ya existe");
    }

    const newUser: User = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);
    return { ...newUser, _id: result.insertedId };
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

// Función para obtener un usuario por email o username
export async function getUserByCredentials(
  identifier: string
): Promise<User | null> {
  try {
    const usersCollection = await getUsersCollection();
    return await usersCollection.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

// Función para actualizar último login
export async function updateLastLogin(userId: ObjectId): Promise<boolean> {
  try {
    const usersCollection = await getUsersCollection();
    const result = await usersCollection.updateOne(
      { _id: userId },
      {
        $set: {
          lastLogin: new Date(),
          updatedAt: new Date(),
        },
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating last login:", error);
    return false;
  }
}

// Función para verificar si un usuario es admin
export async function isUserAdmin(userId: ObjectId): Promise<boolean> {
  try {
    const usersCollection = await getUsersCollection();
    const user = await usersCollection.findOne({ _id: userId });
    return user?.role === "admin" && user?.isActive === true;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}

// Función para obtener todos los usuarios (solo para admin)
export async function getAllUsers(): Promise<User[]> {
  try {
    const usersCollection = await getUsersCollection();
    return await usersCollection.find({}).sort({ createdAt: -1 }).toArray();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
