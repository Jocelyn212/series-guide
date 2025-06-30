import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

const client = new MongoClient(MONGODB_URI);

async function populateFullDatabase() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB Atlas");

        const db = client.db("seriesAnalysisDB");

        // Limpiar colecciones existentes
        console.log("🧹 Limpiando base de datos existente...");
        await db.collection("series").deleteMany({});
        await db.collection("episodes").deleteMany({});
        await db.collection("analysis").deleteMany({});
        await db.collection("platforms").deleteMany({});

        // 1. INSERTAR PLATAFORMAS DE STREAMING
        console.log("📺 Insertando plataformas de streaming...");
        const platforms = [
            {
                name: "Netflix",
                slug: "netflix",
                logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
                website: "https://www.netflix.com",
                color: "#E50914"
            },
            {
                name: "HBO Max",
                slug: "hbo-max",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
                website: "https://www.hbomax.com",
                color: "#8A2BE2"
            },
            {
                name: "Amazon Prime Video",
                slug: "amazon-prime",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
                website: "https://www.primevideo.com",
                color: "#00A8E1"
            },
            {
                name: "Disney+",
                slug: "disney-plus",
                logo: "https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67.png",
                website: "https://www.disneyplus.com",
                color: "#113CCF"
            },
            {
                name: "Apple TV+",
                slug: "apple-tv",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg",
                website: "https://tv.apple.com",
                color: "#000000"
            },
            {
                name: "FOX",
                slug: "fox",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fox_logo_2019.svg",
                website: "https://www.fox.com",
                color: "#FFD700"
            }
        ];

        const platformsResult = await db.collection("platforms").insertMany(platforms);
        console.log(`✅ ${platformsResult.insertedCount} plataformas insertadas`);

        // 2. INSERTAR SERIES PRINCIPALES
        console.log("🎬 Insertando series...");
        const series = [
            {
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
                imdbRating: 8.4,
                posterUrl: "https://image.tmdb.org/t/p/w500/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/fringe-backdrop.jpg",
                platforms: [
                    { name: "Amazon Prime Video", available: true, isPremium: false },
                    { name: "HBO Max", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Game of Thrones",
                slug: "game-of-thrones",
                description: "Una épica serie de fantasía medieval basada en las novelas de George R.R. Martin, que narra las luchas de poder entre familias nobles en los Siete Reinos de Westeros.",
                genre: ["Fantasy", "Drama", "Adventure", "Action"],
                network: "HBO",
                startYear: 2011,
                endYear: 2019,
                totalSeasons: 8,
                totalEpisodes: 73,
                status: "ended",
                imdbId: "tt0944947",
                imdbRating: 9.3,
                posterUrl: "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/got-backdrop.jpg",
                platforms: [
                    { name: "HBO Max", available: true, isPremium: true },
                    { name: "Amazon Prime Video", available: true, isPremium: false }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Stranger Things",
                slug: "stranger-things",
                description: "Un grupo de niños en el pueblo ficticio de Hawkins, Indiana, descubre fuerzas sobrenaturales y experimentos gubernamentales secretos en los años 80.",
                genre: ["Sci-Fi", "Horror", "Drama", "Thriller"],
                network: "Netflix",
                startYear: 2016,
                endYear: null,
                totalSeasons: 4,
                totalEpisodes: 42,
                status: "ongoing",
                imdbId: "tt4574334",
                imdbRating: 8.7,
                posterUrl: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/st-backdrop.jpg",
                platforms: [
                    { name: "Netflix", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Walking Dead",
                slug: "the-walking-dead",
                description: "Basada en el cómic homónimo, sigue a un grupo de supervivientes en un mundo post-apocalíptico dominado por zombis.",
                genre: ["Horror", "Drama", "Action", "Thriller"],
                network: "AMC",
                startYear: 2010,
                endYear: 2022,
                totalSeasons: 11,
                totalEpisodes: 177,
                status: "ended",
                imdbId: "tt1520211",
                imdbRating: 8.2,
                posterUrl: "https://image.tmdb.org/t/p/w500/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/twd-backdrop.jpg",
                platforms: [
                    { name: "Netflix", available: true, isPremium: true },
                    { name: "Amazon Prime Video", available: true, isPremium: false }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Wednesday",
                slug: "wednesday",
                description: "Sigue a Wednesday Addams como estudiante en la Academia Nevermore, donde intenta dominar su habilidad psíquica emergente, frustrar una monstruosa matanza que ha aterrorizado a la ciudad local, y resolver el misterio que involucró a sus padres hace 25 años.",
                genre: ["Comedy", "Horror", "Mystery", "Supernatural"],
                network: "Netflix",
                startYear: 2022,
                endYear: null,
                totalSeasons: 1,
                totalEpisodes: 8,
                status: "ongoing",
                imdbId: "tt13443470",
                imdbRating: 8.1,
                posterUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/wednesday-backdrop.jpg",
                platforms: [
                    { name: "Netflix", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "La Casa de Papel",
                slug: "la-casa-de-papel",
                description: "Un enigmático hombre conocido como 'El Profesor' planea el mayor atraco de la historia en la Fábrica Nacional de Moneda y Timbre de España.",
                genre: ["Crime", "Drama", "Thriller", "Action"],
                network: "Netflix",
                startYear: 2017,
                endYear: 2021,
                totalSeasons: 5,
                totalEpisodes: 41,
                status: "ended",
                imdbId: "tt6468322",
                imdbRating: 8.2,
                posterUrl: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/lcdp-backdrop.jpg",
                platforms: [
                    { name: "Netflix", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Last of Us",
                slug: "the-last-of-us",
                description: "Basada en el videojuego homónimo, sigue a Joel y Ellie 20 años después de que una infección fúngica transforme a los humanos en criaturas similares a zombies.",
                genre: ["Drama", "Horror", "Thriller", "Action"],
                network: "HBO",
                startYear: 2023,
                endYear: null,
                totalSeasons: 1,
                totalEpisodes: 9,
                status: "ongoing",
                imdbId: "tt3581920",
                imdbRating: 8.8,
                posterUrl: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/tlou-backdrop.jpg",
                platforms: [
                    { name: "HBO Max", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        const seriesResult = await db.collection("series").insertMany(series);
        console.log(`✅ ${seriesResult.insertedCount} series insertadas`);

        // 3. INSERTAR EPISODIOS CLAVE DE CADA SERIE
        console.log("🎭 Insertando episodios clave...");
        const episodes = [];
        const seriesIds = Object.values(seriesResult.insertedIds);

        // Episodios de Fringe
        episodes.push(
            {
                seriesId: seriesIds[0], // Fringe
                title: "Pilot",
                slug: "fringe-pilot",
                season: 1,
                episode: 1,
                airDate: new Date("2008-09-09"),
                description: "Olivia Dunham investiga una serie de fenómenos inexplicables tras un incidente en un avión.",
                duration: 81,
                createdAt: new Date()
            },
            {
                seriesId: seriesIds[0], // Fringe
                title: "The Arrival",
                slug: "fringe-the-arrival",
                season: 1,
                episode: 4,
                airDate: new Date("2008-09-30"),
                description: "Los Observadores hacen su primera aparición significativa.",
                duration: 43,
                createdAt: new Date()
            }
        );

        // Episodios de Game of Thrones
        episodes.push(
            {
                seriesId: seriesIds[1], // GoT
                title: "Winter Is Coming",
                slug: "got-winter-is-coming",
                season: 1,
                episode: 1,
                airDate: new Date("2011-04-17"),
                description: "Eddard Stark es convocado para servir como la Mano del Rey para el rey Robert Baratheon.",
                duration: 62,
                createdAt: new Date()
            },
            {
                seriesId: seriesIds[1], // GoT
                title: "The Red Wedding",
                slug: "got-red-wedding",
                season: 3,
                episode: 9,
                airDate: new Date("2013-06-02"),
                description: "Los Stark asisten a una boda que cambiará el destino de Westeros para siempre.",
                duration: 51,
                createdAt: new Date()
            }
        );

        // Episodios de Stranger Things
        episodes.push(
            {
                seriesId: seriesIds[2], // Stranger Things
                title: "Chapter One: The Vanishing of Will Byers",
                slug: "st-vanishing-will-byers",
                season: 1,
                episode: 1,
                airDate: new Date("2016-07-15"),
                description: "Will Byers desaparece misteriosamente después de una noche jugando D&D con sus amigos.",
                duration: 48,
                createdAt: new Date()
            }
        );

        const episodesResult = await db.collection("episodes").insertMany(episodes);
        console.log(`✅ ${episodesResult.insertedCount} episodios insertados`);

        // 4. INSERTAR ANÁLISIS EXPANDIDOS
        console.log("📝 Insertando análisis detallados...");
        const analysis = [
            // Análisis de Fringe
            {
                seriesId: seriesIds[0],
                episodeId: Object.values(episodesResult.insertedIds)[0], // Pilot
                title: "El Patrón y la División Fringe: Estableciendo un Universo Científico",
                slug: "patron-division-fringe-universo-cientifico",
                content: `En el episodio piloto de Fringe, J.J. Abrams nos presenta un concepto revolucionario que definirá toda la serie: El Patrón. Walter Bishop, interpretado magistralmente por John Noble, introduce esta idea de eventos aparentemente desconectados que forman parte de una conspiración más grande.

La División Fringe se establece como una unidad especial del FBI dedicada a investigar fenómenos paranormales, pero lo que realmente distingue a esta serie es su aproximación científica a lo sobrenatural. Cada evento del Patrón tiene una explicación basada en "ciencia fringe" - teorías científicas que existen en los márgenes de la comprensión convencional.

La relación entre Peter (Joshua Jackson) y Walter Bishop es fundamental desde el primer episodio. Walter, un científico brillante pero mentalmente inestable debido a experimentos en su propio cerebro, demuestra conocimientos extraordinarios que van más allá de lo convencional. Su conexión con Massive Dynamic y William Bell sugiere una historia más profunda que se desarrollará a lo largo de la serie.

Olivia Dunham (Anna Torv) emerge como nuestro punto de entrada a este mundo. Su determinación y gradual exposición a los fenómenos de Fringe la convierten en el corazón emocional de la serie. Su conexión con Cortexiphan, aunque aún no se revela completamente, ya se insinúa en este episodio piloto.`,
                excerpt: "Análisis del episodio piloto y el establecimiento del concepto del Patrón en el universo de Fringe",
                universe: "blue",
                tags: ["patron", "walter-bishop", "division-fringe", "pilot", "massive-dynamic", "cortexiphan"],
                author: {
                    name: "Dr. Sarah Chen",
                    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
                },
                status: "published",
                readTime: 12,
                views: 2847,
                likes: 127,
                createdAt: new Date("2024-01-15"),
                updatedAt: new Date("2024-01-15"),
                publishedAt: new Date("2024-01-15")
            },

            // Análisis de Game of Thrones
            {
                seriesId: seriesIds[1],
                episodeId: Object.values(episodesResult.insertedIds)[2], // Winter Is Coming
                title: "Winter Is Coming: El Arte de la Narrativa Política en Westeros",
                slug: "winter-is-coming-narrativa-politica-westeros",
                content: `"Winter Is Coming" no es solo el lema de la Casa Stark, es una declaración de intenciones que define toda la filosofía narrativa de Game of Thrones. Este episodio piloto establece magistralmente un mundo donde la política, el honor y la supervivencia chocan constantemente.

La genialidad de George R.R. Martin, adaptada brillantemente por David Benioff y D.B. Weiss, radica en presentar un mundo donde las decisiones tienen consecuencias reales y permanentes. Ned Stark, interpretado por Sean Bean, encarna el honor tradicional en un mundo que ya no lo valora.

El episodio establece múltiples líneas narrativas que convergerán a lo largo de la serie: la amenaza de los Otros más allá del Muro, las intrigas políticas en King's Landing, y el despertar de los dragones en Essos. Cada trama tiene su propio ritmo y tono, creando una sinfonía narrativa compleja.

La relación entre los Stark - especialmente la dinámica entre Ned y sus hijos - establece los valores familiares que serán constantemente desafiados. Jon Snow y su estatus de bastardo, Arya y su rechazo a los roles tradicionales de género, y Bran con su curiosidad que lo llevará a descubrimientos extraordinarios.`,
                excerpt: "Análisis del episodio piloto de Game of Thrones y el establecimiento del mundo político de Westeros",
                universe: "blue",
                tags: ["game-of-thrones", "ned-stark", "politica", "westeros", "pilot", "winter-is-coming"],
                author: {
                    name: "Prof. Marcus Blackwater",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                },
                status: "published",
                readTime: 15,
                views: 5432,
                likes: 298,
                createdAt: new Date("2024-01-20"),
                updatedAt: new Date("2024-01-20"),
                publishedAt: new Date("2024-01-20")
            },

            // Análisis de Stranger Things
            {
                seriesId: seriesIds[2],
                episodeId: Object.values(episodesResult.insertedIds)[4], // Vanishing of Will Byers
                title: "The Upside Down: Nostalgia y Horror en los 80",
                slug: "upside-down-nostalgia-horror-ochenta",
                content: `Stranger Things logra algo extraordinario en su episodio piloto: crear una experiencia nostálgica genuina sin caer en la mera imitación. Los hermanos Duffer construyen un mundo que se siente auténticamente de los 80, pero con una sensibilidad moderna en su narrativa y desarrollo de personajes.

La desaparición de Will Byers establece el misterio central, pero lo que realmente importa es cómo este evento afecta a cada personaje. Mike, Dustin y Lucas no son solo "los amigos nerds" - cada uno tiene una personalidad distinta y reacciones únicas ante la crisis.

Joyce Byers, interpretada brillantemente por Winona Ryder, podría haber sido fácilmente un estereotipo de "madre histérica", pero los guionistas la convierten en el corazón emocional de la serie. Su desesperación es palpable y real, y su insistencia en que Will está comunicándose a través de las luces establece la conexión sobrenatural de manera orgánica.

El Upside Down como concepto es genial porque funciona tanto como metáfora como realidad literal. Es un mundo que refleja el nuestro pero corrompido, una representación visual perfecta de cómo el trauma y el miedo pueden transformar nuestra percepción de la realidad.`,
                excerpt: "Análisis del episodio piloto de Stranger Things y la construcción del Upside Down como espacio narrativo",
                universe: "blue",
                tags: ["stranger-things", "upside-down", "nostalgia", "años-80", "will-byers", "joyce-byers"],
                author: {
                    name: "Dra. Elena Rodriguez",
                    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                },
                status: "published",
                readTime: 10,
                views: 3721,
                likes: 189,
                createdAt: new Date("2024-01-25"),
                updatedAt: new Date("2024-01-25"),
                publishedAt: new Date("2024-01-25")
            }
        ];

        const analysisResult = await db.collection("analysis").insertMany(analysis);
        console.log(`✅ ${analysisResult.insertedCount} análisis detallados insertados`);

        // 5. CREAR ÍNDICES OPTIMIZADOS
        console.log("🔍 Creando índices optimizados...");

        // Índices para series
        await db.collection("series").createIndex({ slug: 1 }, { unique: true });
        await db.collection("series").createIndex({ status: 1 });
        await db.collection("series").createIndex({ genre: 1 });
        await db.collection("series").createIndex({ network: 1 });
        await db.collection("series").createIndex({ startYear: -1 });

        // Índices para episodios
        await db.collection("episodes").createIndex({ seriesId: 1, season: 1, episode: 1 });
        await db.collection("episodes").createIndex({ slug: 1 }, { unique: true });
        await db.collection("episodes").createIndex({ airDate: -1 });

        // Índices para análisis
        await db.collection("analysis").createIndex({ slug: 1 }, { unique: true });
        await db.collection("analysis").createIndex({ status: 1 });
        await db.collection("analysis").createIndex({ seriesId: 1 });
        await db.collection("analysis").createIndex({ publishedAt: -1 });
        await db.collection("analysis").createIndex({ tags: 1 });
        await db.collection("analysis").createIndex({ "author.name": 1 });

        // Índices para plataformas
        await db.collection("platforms").createIndex({ slug: 1 }, { unique: true });

        console.log("✅ Todos los índices creados");

        console.log("\n🎉 ¡BASE DE DATOS COMPLETAMENTE POBLADA!");
        console.log("📊 RESUMEN FINAL:");
        console.log(`   🎬 ${seriesResult.insertedCount} series insertadas`);
        console.log(`   📺 ${platformsResult.insertedCount} plataformas de streaming`);
        console.log(`   🎭 ${episodesResult.insertedCount} episodios clave`);
        console.log(`   📝 ${analysisResult.insertedCount} análisis detallados`);
        console.log(`   🔍 Índices optimizados para búsquedas rápidas`);
        console.log(`   💡 Base de datos lista para escalar`);

    } catch (error) {
        console.error("❌ Error poblando la base de datos:", error);
    } finally {
        await client.close();
        console.log("🔌 Conexión cerrada");
    }
}

// Ejecutar el script
populateFullDatabase();
