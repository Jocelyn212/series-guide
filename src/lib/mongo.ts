import { MongoClient, ObjectId } from "mongodb";

// Obtener la URI de MongoDB desde las variables de entorno
const MONGODB_URI = import.meta.env.MONGODB_URI;

// Crear una instancia única del cliente con configuraciones optimizadas
let client: MongoClient | null = null;
let isConnecting = false;

// Función para obtener el cliente de MongoDB
async function getMongoClient(): Promise<MongoClient> {
  if (!MONGODB_URI) {
    throw new Error("MongoDB URI not configured");
  }

  if (client && client.topology && !client.topology.isDestroyed()) {
    return client;
  }

  if (isConnecting) {
    // Si ya se está conectando, esperar un poco y verificar de nuevo
    await new Promise((resolve) => setTimeout(resolve, 100));
    return getMongoClient();
  }

  try {
    isConnecting = true;
    client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    await client.connect();
    console.log("Connected to MongoDB");
    isConnecting = false;
    return client;
  } catch (error) {
    isConnecting = false;
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Función para conectar a MongoDB de forma segura
export async function connectMongoDB() {
  const mongoClient = await getMongoClient();
  const db = mongoClient.db("seriesAnalysisDB");

  return {
    client: mongoClient,
    db,
    seriesCollection: db.collection<Serie>("series"),
    analysisCollection: db.collection<Analisis>("analysis"),
    episodeCollection: db.collection<Episode>("episodes"),
    platformCollection: db.collection<Platform>("platforms"),
  };
}

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
  seriesId?: ObjectId;
  episodeId?: ObjectId;
  title: string;
  slug?: string;
  content: string;
  excerpt?: string;
  universe?: "blue" | "red"; // específico para Fringe
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

// Datos de prueba más realistas
const SAMPLE_DATA: Analisis[] = [
  {
    title: "El Patrón y la Primera División",
    slug: "el-patron-primera-division",
    content:
      "En este episodio piloto, observamos cómo Walter Bishop introduce el concepto del Patrón, una serie de eventos aparentemente no relacionados que sugieren una conspiración más grande. La División Fringe se establece como una unidad especial del FBI para investigar estos fenómenos.",
    excerpt:
      "Análisis del concepto del Patrón y establecimiento de Fringe Division",
    universe: "blue",
    tags: ["observadores", "walter-bishop", "patron"],
    author: {
      name: "Analista de Series",
      avatar: "https://via.placeholder.com/40",
    },
    status: "published",
    readTime: 5,
    views: 1234,
    likes: 45,
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    publishedAt: new Date("2023-01-01"),
  },
  {
    title: "Los Observadores: Primera Aparición",
    slug: "observadores-primera-aparicion",
    content:
      "Los misteriosos Observadores hacen su primera aparición significativa. Estos seres calvos y sin emociones parecen estar monitoreando eventos específicos. Su presencia sugiere que están observando algo importante en nuestra realidad.",
    excerpt: "Análisis de la introducción de los Observadores en la serie",
    universe: "blue",
    tags: ["observadores", "misterio", "vigilancia"],
    author: {
      name: "Analista de Series",
      avatar: "https://via.placeholder.com/40",
    },
    status: "published",
    readTime: 7,
    views: 987,
    likes: 32,
    createdAt: new Date("2023-01-02"),
    updatedAt: new Date("2023-01-02"),
    publishedAt: new Date("2023-01-02"),
  },
  {
    title: "Olivia en el Universo Alternativo",
    slug: "olivia-universo-alternativo",
    content:
      "Descubrimos que existe un universo paralelo donde las cosas son similares pero diferentes. La Olivia del universo alternativo (Fauxlivia) tiene cabello rojo y una personalidad más agresiva. Este episodio establece la premisa de los universos paralelos.",
    excerpt: "Exploración del concepto de universos paralelos y Fauxlivia",
    universe: "red",
    tags: ["universos-paralelos", "olivia", "fauxlivia"],
    author: {
      name: "Analista de Series",
      avatar: "https://via.placeholder.com/40",
    },
    status: "published",
    readTime: 6,
    views: 1456,
    likes: 67,
    createdAt: new Date("2023-01-03"),
    updatedAt: new Date("2023-01-03"),
    publishedAt: new Date("2023-01-03"),
  },
];

// Conexión a MongoDB
const uri = MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Función para conectar a MongoDB de forma segura
async function connectMongoDB() {
  if (!MONGODB_URI) {
    throw new Error("MongoDB URI not configured");
  }

  try {
    await client.connect();

    const db = client.db("seriesAnalysisDB");
    return {
      client,
      db,
      seriesCollection: db.collection<Serie>("series"),
      analysisCollection: db.collection<Analisis>("analysis"),
      episodeCollection: db.collection<Episode>("episodes"),
      platformCollection: db.collection<Platform>("platforms"),
    };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Exportar la función de conexión para uso en scripts
export { connectMongoDB };

export async function insertAnalisis(analisis: Omit<Analisis, "_id">) {
  // Si no hay conexión a Atlas, simular inserción
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return "sample-id";
  }

  try {
    await client.connect();
    const db = client.db("seriesAnalysisDB");
    const result = await db.collection("analysis").insertOne({
      ...analisis,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0,
      likes: 0,
    });
    return result.insertedId;
  } finally {
    await client.close();
  }
}

export async function getAnalisis(): Promise<Analisis[]> {
  // Si no hay conexión a Atlas, devolver datos de prueba
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return SAMPLE_DATA;
  }

  try {
    await client.connect();
    const db = client.db("seriesAnalysisDB");
    return await db
      .collection<Analisis>("analysis")
      .find({ status: "published" })
      .sort({ publishedAt: -1 })
      .toArray();
  } catch (error) {
    console.error(
      "Error connecting to MongoDB Atlas, using sample data:",
      error
    );
    return SAMPLE_DATA;
  } finally {
    await client.close();
  }
}

// Función para obtener análisis por slug (para URLs amigables)
export async function getAnalisisBySlug(
  slug: string
): Promise<Analisis | null> {
  if (!MONGODB_URI) {
    return SAMPLE_DATA.find((a) => a.slug === slug) || null;
  }

  try {
    await client.connect();
    const db = client.db("seriesAnalysisDB");
    return await db
      .collection<Analisis>("analysis")
      .findOne({ slug, status: "published" });
  } catch (error) {
    console.error("Error fetching analysis by slug:", error);
    return null;
  } finally {
    await client.close();
  }
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
  } finally {
    try {
      await client.close();
    } catch (e) {
      // Ignorar errores de cierre
    }
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
  } finally {
    try {
      await client.close();
    } catch (e) {
      // Ignorar errores de cierre
    }
  }
}

// Función para obtener todas las plataformas
export async function getPlatforms(): Promise<Platform[]> {
  if (!MONGODB_URI) {
    console.warn("Using sample data - MongoDB Atlas not configured");
    return [];
  }

  try {
    await client.connect();
    const db = client.db("seriesAnalysisDB");
    return await db
      .collection<Platform>("platforms")
      .find()
      .sort({ name: 1 })
      .toArray();
  } catch (error) {
    console.error("Error fetching platforms:", error);
    return [];
  } finally {
    await client.close();
  }
}

// Función para obtener análisis por serie
export async function getAnalisisBySerie(
  serieSlug: string
): Promise<Analisis[]> {
  if (!MONGODB_URI) {
    return SAMPLE_DATA.filter((a) => a.tags?.includes(serieSlug));
  }

  try {
    await client.connect();
    const db = client.db("seriesAnalysisDB");

    // Primero obtener la serie
    const serie = await db.collection("series").findOne({ slug: serieSlug });
    if (!serie) return [];

    // Luego obtener los análisis de esa serie
    return await db
      .collection<Analisis>("analysis")
      .find({
        seriesId: serie._id,
        status: "published",
      })
      .sort({ publishedAt: -1 })
      .toArray();
  } catch (error) {
    console.error("Error fetching analysis by serie:", error);
    return [];
  } finally {
    await client.close();
  }
}
