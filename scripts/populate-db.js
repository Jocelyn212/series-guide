import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

const client = new MongoClient(MONGODB_URI);

async function populateDatabase() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB Atlas");

        const db = client.db("seriesAnalysisDB");

        // 1. Insertar Serie (Fringe)
        console.log("📺 Insertando serie Fringe...");
        const seriesResult = await db.collection("series").insertOne({
            title: "Fringe",
            slug: "fringe",
            description: "Una serie de ciencia ficción que sigue a un equipo especial del FBI llamado División Fringe, que investiga eventos paranormales y fenómenos científicos inexplicables.",
            genre: ["Sci-Fi", "Mystery", "Drama", "Thriller"],
            network: "FOX",
            startYear: 2008,
            endYear: 2013,
            totalSeasons: 5,
            totalEpisodes: 100,
            status: "ended",
            imdbId: "tt1119644",
            tmdbId: 1705,
            posterUrl: "https://image.tmdb.org/t/p/w500/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg",
            backdropUrl: "https://image.tmdb.org/t/p/original/fringe-backdrop.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        });

        const seriesId = seriesResult.insertedId;
        console.log(`✅ Serie insertada con ID: ${seriesId}`);

        // 2. Insertar algunos episodios clave
        console.log("🎬 Insertando episodios...");
        const episodes = [
            {
                seriesId: seriesId,
                title: "Pilot",
                slug: "pilot",
                season: 1,
                episode: 1,
                airDate: new Date("2008-09-09"),
                description: "Olivia Dunham investiga una serie de fenómenos inexplicables tras un incidente en un avión.",
                imdbRating: 8.2,
                duration: 81,
                stillUrl: "https://image.tmdb.org/t/p/w500/fringe-1x01.jpg",
                createdAt: new Date()
            },
            {
                seriesId: seriesId,
                title: "The Arrival",
                slug: "the-arrival",
                season: 1,
                episode: 4,
                airDate: new Date("2008-09-30"),
                description: "Los Observadores hacen su primera aparición significativa cuando un objeto misterioso aparece en una zona de construcción.",
                imdbRating: 8.5,
                duration: 43,
                stillUrl: "https://image.tmdb.org/t/p/w500/fringe-1x04.jpg",
                createdAt: new Date()
            },
            {
                seriesId: seriesId,
                title: "A New Day in the Old Town",
                slug: "a-new-day-in-the-old-town",
                season: 2,
                episode: 1,
                airDate: new Date("2009-09-17"),
                description: "Olivia se recupera de los eventos del final de la temporada anterior mientras el equipo investiga cambiaformas.",
                imdbRating: 8.8,
                duration: 43,
                stillUrl: "https://image.tmdb.org/t/p/w500/fringe-2x01.jpg",
                createdAt: new Date()
            }
        ];

        const episodesResult = await db.collection("episodes").insertMany(episodes);
        console.log(`✅ ${episodesResult.insertedCount} episodios insertados`);

        // 3. Insertar análisis iniciales
        console.log("📝 Insertando análisis...");
        const analysis = [
            {
                seriesId: seriesId,
                episodeId: episodesResult.insertedIds[0], // Pilot
                title: "El Patrón y la Primera División",
                slug: "el-patron-primera-division",
                content: "En este episodio piloto, observamos cómo Walter Bishop introduce el concepto del Patrón, una serie de eventos aparentemente no relacionados que sugieren una conspiración más grande. La División Fringe se establece como una unidad especial del FBI para investigar estos fenómenos. \n\nLa relación entre Peter y Walter Bishop se establece desde el principio como compleja y cargada de secretos. Walter, un científico brillante pero mentalmente inestable, demuestra conocimientos extraordinarios sobre ciencia fringe que van más allá de lo convencional.\n\nEl episodio también introduce la idea de que existe algo más grande en juego, con pistas sutiles sobre experimentos gubernamentales y la presencia de fuerzas que operan en las sombras.",
                excerpt: "Análisis del concepto del Patrón y establecimiento de Fringe Division",
                universe: "blue",
                tags: ["patron", "walter-bishop", "division-fringe", "pilot", "establecimiento"],
                author: {
                    name: "Analista de Series",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                },
                status: "published",
                readTime: 8,
                views: 1234,
                likes: 45,
                seo: {
                    metaTitle: "Análisis Fringe 1x01: El Patrón y la Primera División",
                    metaDescription: "Análisis detallado del episodio piloto de Fringe y la introducción del concepto del Patrón",
                    keywords: ["fringe", "analisis", "pilot", "walter bishop", "patron"]
                },
                createdAt: new Date("2024-01-01"),
                updatedAt: new Date("2024-01-01"),
                publishedAt: new Date("2024-01-01")
            },
            {
                seriesId: seriesId,
                episodeId: episodesResult.insertedIds[1], // The Arrival
                title: "Los Observadores: Primera Aparición Significativa",
                slug: "observadores-primera-aparicion",
                content: "Este episodio marca la primera aparición verdaderamente significativa de los Observadores en la serie. Estos seres calvos y sin emociones aparecen observando eventos específicos, sugiriendo que están monitoreando algo importante en nuestra realidad.\n\nLa presencia del Observador en la zona de construcción no es casualidad. Su comportamiento meticuloso y su aparente conocimiento previo de los eventos sugieren que estos seres operan fuera de nuestro entendimiento normal del tiempo y el espacio.\n\nEl objeto misterioso que aparece en el episodio parece estar conectado con tecnología avanzada, posiblemente de origen no terrestre. La forma en que el Observador interactúa con este objeto sugiere una comprensión profunda de su propósito y funcionamiento.",
                excerpt: "Análisis de la introducción significativa de los Observadores",
                universe: "blue",
                tags: ["observadores", "misterio", "vigilancia", "tiempo", "tecnologia-avanzada"],
                author: {
                    name: "Analista de Series",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                },
                status: "published",
                readTime: 7,
                views: 987,
                likes: 32,
                seo: {
                    metaTitle: "Análisis Fringe 1x04: Los Observadores - Primera Aparición",
                    metaDescription: "Análisis detallado de la primera aparición significativa de los Observadores en Fringe",
                    keywords: ["fringe", "observadores", "analisis", "misterio", "arrival"]
                },
                createdAt: new Date("2024-01-02"),
                updatedAt: new Date("2024-01-02"),
                publishedAt: new Date("2024-01-02")
            },
            {
                seriesId: seriesId,
                episodeId: episodesResult.insertedIds[2], // A New Day in the Old Town
                title: "Universos Paralelos: La Introducción de Fauxlivia",
                slug: "universos-paralelos-fauxlivia",
                content: "Este episodio marca un punto crucial en la mitología de Fringe al introducir oficialmente el concepto de universos paralelos. La Olivia del universo alternativo, conocida como 'Fauxlivia' por los fans, representa una versión diferente pero familiar de nuestro personaje principal.\n\nLas diferencias sutiles pero significativas entre las dos Olivias - el cabello rojo de Fauxlivia, su personalidad más agresiva, y su enfoque diferente para resolver problemas - establecen el tema central de la serie: cómo pequeños cambios pueden llevar a realidades completamente diferentes.\n\nEl episodio también sugiere que el conflicto entre universos no es accidental, sino el resultado de acciones tomadas en el pasado. La guerra entre mundos que se avecina tiene sus raíces en decisiones y experimentos realizados décadas antes.",
                excerpt: "Exploración del concepto de universos paralelos y la introducción de Fauxlivia",
                universe: "red",
                tags: ["universos-paralelos", "olivia", "fauxlivia", "guerra-entre-mundos", "identidad"],
                author: {
                    name: "Analista de Series",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                },
                status: "published",
                readTime: 9,
                views: 1456,
                likes: 67,
                seo: {
                    metaTitle: "Análisis Fringe 2x01: Universos Paralelos y Fauxlivia",
                    metaDescription: "Análisis del concepto de universos paralelos y la introducción de la Olivia alternativa",
                    keywords: ["fringe", "universos paralelos", "fauxlivia", "olivia", "analisis"]
                },
                createdAt: new Date("2024-01-03"),
                updatedAt: new Date("2024-01-03"),
                publishedAt: new Date("2024-01-03")
            }
        ];

        const analysisResult = await db.collection("analysis").insertMany(analysis);
        console.log(`✅ ${analysisResult.insertedCount} análisis insertados`);

        // 4. Insertar algunos usuarios de ejemplo
        console.log("👥 Insertando usuarios...");
        const users = [
            {
                email: "admin@fringeguide.com",
                username: "admin",
                displayName: "Administrador",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                bio: "Creador y administrador de Fringe Guide",
                favoriteGenres: ["Sci-Fi", "Mystery", "Thriller"],
                watchlist: [seriesId],
                subscription: {
                    type: "pro",
                    startDate: new Date(),
                    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 año
                },
                preferences: {
                    notifications: true,
                    newsletter: true,
                    spoilerWarnings: false
                },
                createdAt: new Date(),
                lastLoginAt: new Date()
            }
        ];

        const usersResult = await db.collection("users").insertMany(users);
        console.log(`✅ ${usersResult.insertedCount} usuarios insertados`);

        // 5. Crear índices para optimizar consultas
        console.log("🔍 Creando índices...");

        // Índices para series
        await db.collection("series").createIndex({ slug: 1 }, { unique: true });
        await db.collection("series").createIndex({ status: 1 });

        // Índices para episodios
        await db.collection("episodes").createIndex({ seriesId: 1, season: 1, episode: 1 });
        await db.collection("episodes").createIndex({ slug: 1 }, { unique: true });

        // Índices para análisis
        await db.collection("analysis").createIndex({ slug: 1 }, { unique: true });
        await db.collection("analysis").createIndex({ status: 1 });
        await db.collection("analysis").createIndex({ seriesId: 1 });
        await db.collection("analysis").createIndex({ publishedAt: -1 });
        await db.collection("analysis").createIndex({ tags: 1 });

        // Índices para usuarios
        await db.collection("users").createIndex({ email: 1 }, { unique: true });
        await db.collection("users").createIndex({ username: 1 }, { unique: true });

        console.log("✅ Índices creados");

        console.log("\n🎉 ¡Base de datos poblada exitosamente!");
        console.log("📊 Resumen:");
        console.log(`   - 1 serie insertada`);
        console.log(`   - ${episodesResult.insertedCount} episodios insertados`);
        console.log(`   - ${analysisResult.insertedCount} análisis insertados`);
        console.log(`   - ${usersResult.insertedCount} usuarios insertados`);
        console.log(`   - Índices optimizados creados`);

    } catch (error) {
        console.error("❌ Error poblando la base de datos:", error);
    } finally {
        await client.close();
        console.log("🔌 Conexión cerrada");
    }
}

// Ejecutar el script
populateDatabase();
