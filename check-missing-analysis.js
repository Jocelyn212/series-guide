import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

async function checkMissingAnalysis() {
    try {
        console.log('🔍 Verificando qué series tienen análisis y cuáles faltan...\n');

        const client = new MongoClient(MONGODB_URI);
        await client.connect();

        const db = client.db('seriesAnalysisDB');
        const seriesCollection = db.collection('series');
        const analysisCollection = db.collection('analysis');

        // Obtener todas las series
        const allSeries = await seriesCollection.find({}).toArray();
        console.log(`📺 Total de series: ${allSeries.length}\n`);

        // Obtener todos los análisis
        const allAnalysis = await analysisCollection.find({}).toArray();
        console.log(`📖 Total de análisis: ${allAnalysis.length}\n`);

        // Crear un mapa de series con análisis
        const analysisMap = new Map();
        allAnalysis.forEach(analysis => {
            if (analysis.tags) {
                analysis.tags.forEach(tag => {
                    if (!analysisMap.has(tag)) {
                        analysisMap.set(tag, []);
                    }
                    analysisMap.get(tag).push(analysis.title);
                });
            }
        });

        console.log('=== ✅ SERIES CON ANÁLISIS ===');
        let seriesWithAnalysis = 0;

        allSeries.forEach((serie, index) => {
            if (analysisMap.has(serie.slug)) {
                console.log(`${index + 1}. ${serie.title} (${serie.slug})`);
                const analysisForSerie = analysisMap.get(serie.slug);
                analysisForSerie.forEach(analysisTitle => {
                    console.log(`   📖 ${analysisTitle}`);
                });
                console.log('');
                seriesWithAnalysis++;
            }
        });

        console.log('=== ❌ SERIES SIN ANÁLISIS ===');
        let seriesWithoutAnalysis = 0;

        allSeries.forEach((serie, index) => {
            if (!analysisMap.has(serie.slug)) {
                console.log(`${index + 1}. ${serie.title} (${serie.slug})`);
                console.log(`   Género: ${serie.genre.join(', ')}`);
                console.log(`   Rating: ${serie.imdbRating}/10`);
                console.log(`   Año: ${serie.startYear}`);
                console.log('');
                seriesWithoutAnalysis++;
            }
        });

        console.log('=== 📊 RESUMEN ===');
        console.log(`✅ Series con análisis: ${seriesWithAnalysis}`);
        console.log(`❌ Series sin análisis: ${seriesWithoutAnalysis}`);
        console.log(`📺 Total de series: ${allSeries.length}`);
        console.log(`📖 Total de análisis: ${allAnalysis.length}`);

        await client.close();
    } catch (error) {
        console.error('❌ Error:', error);
    }
}

checkMissingAnalysis();
