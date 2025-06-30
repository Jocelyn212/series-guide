import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

const client = new MongoClient(MONGODB_URI);

async function updateSeriesImages() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB Atlas");

        const db = client.db("seriesAnalysisDB");

        // Actualizar las URLs de imágenes con URLs que funcionen
        const imageUpdates = [
            {
                slug: "severance",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BYzJkZWVlOWItYzBiMS00N2IzLWJhMjEtODE3ZTY1MWJlNzI3XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://www.apple.com/tv-pr/shows-and-films/s/severance/images/show-home-graphic-header/Apple_TV_Severance_Show_Home_Graphic_Header_16_9.jpg.og.jpg"
            },
            {
                slug: "house-of-the-dragon",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://cdn.hbomax.com/image/upload/v1649868400/max-website/shows/house-of-the-dragon/01-overview-key-art-mobile.jpg"
            },
            {
                slug: "the-boys",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c4c2d16b9c0e8a60bb23b3b3db3abb6eaa5e0c8b6f9b7db9f4b9a6b0c4d0c3c.jpg"
            },
            {
                slug: "fringe",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU4MzA4NTEwNV5BMl5BanBnXkFtZTcwODQ0NjcyNA@@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1457027724342-EL3LZJNJ1ZZFKAJ8FUO8/fringe-backdrop.jpg"
            },
            {
                slug: "game-of-thrones",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.wallpapersden.com/image/download/game-of-thrones-season-8_a2poZWeUmZqaraWkpJRmbmdlrWWtZWU.jpg"
            },
            {
                slug: "stranger-things",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1657027724342-EL3LZJNJ1ZZFKAJ8FUO8/stranger-things-backdrop.jpg"
            },
            {
                slug: "the-walking-dead",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BZmFlMTA0MmUtNWVmOC00ZmE1LWFmMDYtZTJhYjJhNGVjYTU5XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.wallpapersden.com/image/download/the-walking-dead-season-11_bGZkaG2UmZqaraWkpJRnZWllrWdma2U.jpg"
            },
            {
                slug: "wednesday",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://occ-0-7204-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABd3IBDpNjTojM8D0gOIYVeLYjWgUU5_R-DINOFuYOOl0_8X_Y9sptdOw2VGUB6J7nR7_VpHNsaOz1OONGBjhTnUcMw.jpg"
            },
            {
                slug: "la-casa-de-papel",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtYzc3Zi00NWY4LWJkMGEtNGQ1NTc4YjIwODc2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://occ-0-7204-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaEYuIYxByYVeH4H_S3vGXiA9KgdnQKBz-C5P4x-a8EhSDcJZvR8VNqQnOcTN_QdPpQlCzE-tYU0qTcY4qJw3mOA-g.jpg"
            },
            {
                slug: "the-last-of-us",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.wallpapersden.com/image/download/the-last-of-us-2023_bWlqa26UmZqaraWkpJRnZWllrWdma2U.jpg"
            },
            {
                slug: "the-white-lotus",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BZjVjNzI3YjYtYzUyYy00ZmVmLWEyNjctOTMwMzJhM2FmODUyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://cdn.hbomax.com/image/upload/v1633467156/max-website/shows/the-white-lotus/The-White-Lotus-S2-KA-16x9.jpg"
            },
            {
                slug: "the-mandalorian",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU1YS00NGI3LWJjYjAtMWNlMTczNGNhZTA0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C1E17A9B2983364E8E54C7D7B19B5D5FB14E9F66ADF73DFCB5C4A52/scale?width=1200&aspectRatio=1.78&format=jpeg"
            },
            {
                slug: "yellowjackets",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BN2I2MDUyYjMtMjllNy00OGI3LWFhZmYtNmVjNzc0N2E3MDI4XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.us.en:5e5c3e8e-1f4a-11ec-8cc3-0eeac7b3b1be?width=1920&height=1080"
            },
            {
                slug: "andor",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BMzU0OTM1NzQtOTUyYy00ZjNkLWJjNWItMGI5NTFjNzUzMGQxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B9A2EB9A0B7E5F6E9B0C9C8B7A6A5A4A3A2A1A0A/scale?width=1200&aspectRatio=1.78&format=jpeg"
            },
            {
                slug: "the-bear",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BNzY3NjgxOTAtNzVhZS00YjJlLTkzZGQtMWFjOWZkM2Y5OWQwXkEyXkFqcGdeQXVyNjI4MDI5ODQ@._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.fxnetworks.com/image.php?file=/fxnetworks/images/shows/the-bear/the-bear-key-art-logo.jpg&width=1200"
            },
            {
                slug: "shogun",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BN2ZlNWJkY2ItOWY5YS00MzM1LWJjMjktMzY0NjU2OWFkYWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images.fxnetworks.com/image.php?file=/fxnetworks/images/shows/shogun/shogun-key-art.jpg&width=1200"
            },
            {
                slug: "reacher",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BM2UxMGI4N2UtZjE1My00YzM1LWEzNjgtOTZhOTczNWVkZDU2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
                backdropUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/reacher-show-hero-mobile-16x9.jpg"
            }
        ];

        console.log("🖼️  Actualizando URLs de imágenes...");

        for (const update of imageUpdates) {
            const result = await db.collection("series").updateOne(
                { slug: update.slug },
                {
                    $set: {
                        posterUrl: update.posterUrl,
                        backdropUrl: update.backdropUrl,
                        updatedAt: new Date()
                    }
                }
            );

            if (result.modifiedCount > 0) {
                console.log(`   ✅ Imágenes actualizadas: ${update.slug}`);
            } else {
                console.log(`   ⚠️  Serie no encontrada: ${update.slug}`);
            }
        }

        console.log("\n🎉 ¡URLs de imágenes actualizadas!");

    } catch (error) {
        console.error("❌ Error actualizando imágenes:", error);
    } finally {
        await client.close();
        console.log("🔌 Conexión cerrada");
    }
}

// Ejecutar el script
updateSeriesImages();
