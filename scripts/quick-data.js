import { MongoClient } from "mongodb";

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

const client = new MongoClient(MONGODB_URI);

async function addQuickData() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB Atlas");

        const db = client.db("seriesAnalysisDB");

        // Solo agregar 3 análisis básicos para probar rápido
        const quickAnalysis = [
            {
                title: "El Patrón y Walter Bishop",
                slug: "patron-walter-bishop",
                content: "Walter Bishop introduce el concepto del Patrón en el episodio piloto. Este concepto será fundamental para entender toda la mitología de Fringe.",
                excerpt: "Introducción al concepto del Patrón",
                universe: "blue",
                tags: ["patron", "walter-bishop"],
                status: "published",
                readTime: 5,
                views: 500,
                likes: 25,
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: new Date()
            },
            {
                title: "Los Observadores: Vigilantes del Tiempo",
                slug: "observadores-vigilantes",
                content: "Los Observadores son seres misteriosos que parecen monitorear eventos específicos a través del tiempo y el espacio.",
                excerpt: "Análisis de los misteriosos Observadores",
                universe: "blue",
                tags: ["observadores", "tiempo"],
                status: "published",
                readTime: 4,
                views: 750,
                likes: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: new Date()
            },
            {
                title: "Universos Paralelos: Dos Mundos",
                slug: "universos-paralelos",
                content: "Fringe explora la existencia de universos paralelos donde versiones alternativas de nosotros mismos viven vidas ligeramente diferentes.",
                excerpt: "Exploración del concepto de universos paralelos",
                universe: "red",
                tags: ["universos-paralelos", "mundos-alternativos"],
                status: "published",
                readTime: 6,
                views: 920,
                likes: 42,
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: new Date()
            }
        ];

        const result = await db.collection("analysis").insertMany(quickAnalysis);
        console.log(`✅ ${result.insertedCount} análisis básicos insertados para pruebas`);

    } catch (error) {
        console.error("❌ Error:", error);
    } finally {
        await client.close();
    }
}

addQuickData();
