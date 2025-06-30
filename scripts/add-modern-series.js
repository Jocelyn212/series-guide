import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

const client = new MongoClient(MONGODB_URI);

async function addModernSeries() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB Atlas");

        const db = client.db("seriesAnalysisDB");

        // Agregar las nuevas series modernas
        console.log("🎬 Insertando series modernas...");
        const modernSeries = [
            {
                title: "House of the Dragon",
                slug: "house-of-the-dragon",
                description: "Precuela de Game of Thrones que narra la guerra civil Targaryen conocida como la Danza de los Dragones, 200 años antes de los eventos de la serie original.",
                genre: ["Fantasy", "Drama", "Action", "Adventure"],
                network: "HBO",
                startYear: 2022,
                endYear: null,
                totalSeasons: 2,
                totalEpisodes: 18,
                status: "ongoing",
                imdbId: "tt11198330",
                imdbRating: 8.4,
                posterUrl: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/hotd-backdrop.jpg",
                platforms: [
                    { name: "HBO Max", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Boys",
                slug: "the-boys",
                description: "Una serie que subvierte el género de superhéroes mostrando un mundo donde los 'supers' son corruptos y peligrosos, y un grupo de vigilantes lucha contra ellos.",
                genre: ["Action", "Comedy", "Crime", "Sci-Fi"],
                network: "Amazon Prime Video",
                startYear: 2019,
                endYear: null,
                totalSeasons: 4,
                totalEpisodes: 32,
                status: "ongoing",
                imdbId: "tt1190634",
                imdbRating: 8.7,
                posterUrl: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/boys-backdrop.jpg",
                platforms: [
                    { name: "Amazon Prime Video", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The White Lotus",
                slug: "the-white-lotus",
                description: "Una serie antológica de drama satírico que sigue a huéspedes y empleados de un resort exclusivo durante una semana, explorando temas de clase social y privilegio.",
                genre: ["Comedy", "Drama", "Mystery", "Thriller"],
                network: "HBO",
                startYear: 2021,
                endYear: null,
                totalSeasons: 2,
                totalEpisodes: 13,
                status: "ongoing",
                imdbId: "tt13406094",
                imdbRating: 7.9,
                posterUrl: "https://image.tmdb.org/t/p/w500/gH5i3JbnLsyTvcImlofNvXtH3i5.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/wl-backdrop.jpg",
                platforms: [
                    { name: "HBO Max", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Mandalorian",
                slug: "the-mandalorian",
                description: "Ambientada en el universo de Star Wars, sigue las aventuras de Din Djarin, un cazarrecompensas mandaloriano, y su encuentro con Grogu (Baby Yoda).",
                genre: ["Action", "Adventure", "Sci-Fi", "Western"],
                network: "Disney+",
                startYear: 2019,
                endYear: null,
                totalSeasons: 3,
                totalEpisodes: 24,
                status: "ongoing",
                imdbId: "tt8111088",
                imdbRating: 8.7,
                posterUrl: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/mando-backdrop.jpg",
                platforms: [
                    { name: "Disney+", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Yellowjackets",
                slug: "yellowjackets",
                description: "Thriller psicológico que alterna entre 1996 y 2021, siguiendo a un equipo de fútbol femenino de secundaria que sobrevive a un accidente aéreo en el desierto.",
                genre: ["Drama", "Horror", "Mystery", "Thriller"],
                network: "Showtime",
                startYear: 2021,
                endYear: null,
                totalSeasons: 2,
                totalEpisodes: 19,
                status: "ongoing",
                imdbId: "tt11041332",
                imdbRating: 7.9,
                posterUrl: "https://image.tmdb.org/t/p/w500/o4Ql4Z8QHvUKmFz9Y3YP4SzYGKf.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/yj-backdrop.jpg",
                platforms: [
                    { name: "Amazon Prime Video", available: true, isPremium: false },
                    { name: "Netflix", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Andor",
                slug: "andor",
                description: "Precuela de Rogue One que explora los años formativos de la Rebelión y la historia de Cassian Andor, mostrando cómo personas ordinarias se convierten en héroes.",
                genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
                network: "Disney+",
                startYear: 2022,
                endYear: null,
                totalSeasons: 1,
                totalEpisodes: 12,
                status: "ongoing",
                imdbId: "tt9253284",
                imdbRating: 8.4,
                posterUrl: "https://image.tmdb.org/t/p/w500/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/andor-backdrop.jpg",
                platforms: [
                    { name: "Disney+", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Severance",
                slug: "severance",
                description: "Thriller psicológico que sigue a empleados que se someten a un procedimiento para separar quirúrgicamente sus memorias laborales y personales.",
                genre: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
                network: "Apple TV+",
                startYear: 2022,
                endYear: null,
                totalSeasons: 1,
                totalEpisodes: 9,
                status: "ongoing",
                imdbId: "tt11280740",
                imdbRating: 8.7,
                posterUrl: "https://image.tmdb.org/t/p/w500/lFxOhYnA8JO8hVJBAgkCqj4fJG3.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/severance-backdrop.jpg",
                platforms: [
                    { name: "Apple TV+", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "The Bear",
                slug: "the-bear",
                description: "Dramedia que sigue a un chef galardonado que regresa a Chicago para dirigir el restaurante de su hermano fallecido, enfrentando el caos de una cocina disfuncional.",
                genre: ["Comedy", "Drama"],
                network: "FX",
                startYear: 2022,
                endYear: null,
                totalSeasons: 3,
                totalEpisodes: 28,
                status: "ongoing",
                imdbId: "tt14452776",
                imdbRating: 8.7,
                posterUrl: "https://image.tmdb.org/t/p/w500/zPyC3klJhAKlx3onqvTrgqnAUGh.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/bear-backdrop.jpg",
                platforms: [
                    { name: "Disney+", available: true, isPremium: true },
                    { name: "Amazon Prime Video", available: true, isPremium: false }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Shōgun",
                slug: "shogun",
                description: "Remake de la miniserie de 1980, ambientada en el Japón feudal del siglo XVII, siguiendo a un marinero inglés náufrago en medio de luchas políticas.",
                genre: ["Drama", "History", "War"],
                network: "FX",
                startYear: 2024,
                endYear: null,
                totalSeasons: 1,
                totalEpisodes: 10,
                status: "ongoing",
                imdbId: "tt2788316",
                imdbRating: 9.0,
                posterUrl: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/shogun-backdrop.jpg",
                platforms: [
                    { name: "Disney+", available: true, isPremium: true },
                    { name: "Amazon Prime Video", available: true, isPremium: false }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Reacher",
                slug: "reacher",
                description: "Basada en las novelas de Lee Child, sigue a Jack Reacher, un ex-policía militar que se convierte en detective investigando crímenes mientras viaja por Estados Unidos.",
                genre: ["Action", "Crime", "Drama", "Thriller"],
                network: "Amazon Prime Video",
                startYear: 2022,
                endYear: null,
                totalSeasons: 2,
                totalEpisodes: 16,
                status: "ongoing",
                imdbId: "tt9813792",
                imdbRating: 8.1,
                posterUrl: "https://image.tmdb.org/t/p/w500/4wjrNKc90KiuLr5xLAbKVlOEQF1.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/reacher-backdrop.jpg",
                platforms: [
                    { name: "Amazon Prime Video", available: true, isPremium: true }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        // Agregar las nuevas series modernas usando upsert
        console.log("🎬 Agregando/actualizando series modernas...");
        let insertedCount = 0;
        let updatedCount = 0;

        for (const serie of modernSeries) {
            const result = await db.collection("series").replaceOne(
                { slug: serie.slug }, // Buscar por slug
                serie, // Reemplazar con la nueva serie
                { upsert: true } // Crear si no existe
            );

            if (result.upsertedCount > 0) {
                insertedCount++;
                console.log(`   ✅ Serie insertada: ${serie.title}`);
            } else if (result.modifiedCount > 0) {
                updatedCount++;
                console.log(`   🔄 Serie actualizada: ${serie.title}`);
            } else {
                console.log(`   ℹ️  Serie sin cambios: ${serie.title}`);
            }
        }

        console.log(`\n✅ ${insertedCount} series nuevas insertadas`);
        console.log(`🔄 ${updatedCount} series actualizadas`);

        console.log("\n🎉 ¡SERIES MODERNAS PROCESADAS!");
        console.log("📊 Series disponibles:");
        modernSeries.forEach(serie => {
            console.log(`   🎬 ${serie.title} (${serie.network}) - ${serie.genre.join(', ')}`);
        });

    } catch (error) {
        console.error("❌ Error agregando series modernas:", error);
    } finally {
        await client.close();
        console.log("🔌 Conexión cerrada");
    }
}

// Ejecutar el script
addModernSeries();
