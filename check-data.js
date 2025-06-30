import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

async function checkData() {
    const client = new MongoClient(MONGODB_URI);

    try {
        console.log('Conectando a MongoDB...');
        await client.connect();
        console.log('Conectado exitosamente.');

        const db = client.db('seriesAnalysisDB');
        const seriesCollection = db.collection('series');
        const analysisCollection = db.collection('analysis');

        console.log('\n=== VERIFICANDO SERIES ===');
        const totalSeries = await seriesCollection.countDocuments();
        console.log(`Total de series en DB: ${totalSeries}`);

        const series = await seriesCollection.find({}).toArray();
        console.log(`Series encontradas: ${series.length}`);
        console.log('\nLista de todas las series:');
        series.forEach((serie, index) => {
            console.log(`${index + 1}. ${serie.title} (${serie.slug})`);
            console.log(`   Poster: ${serie.posterUrl ? 'SÍ' : 'NO'}`);
            console.log(`   Rating: ${serie.imdbRating}, Año: ${serie.startYear}`);
        });

        console.log('\n=== VERIFICANDO ANÁLISIS ===');
        const totalAnalisis = await analysisCollection.countDocuments();
        console.log(`Total de análisis en DB: ${totalAnalisis}`);

        const analisis = await analysisCollection.find({}).toArray();
        console.log(`Análisis encontrados: ${analisis.length}`);
        console.log('\nLista de todos los análisis:');
        analisis.forEach((item, index) => {
            console.log(`${index + 1}. ${item.title}`);
            console.log(`   Estado: ${item.status}, Views: ${item.views}, Likes: ${item.likes}`);
        });

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
        process.exit(0);
    }
}

checkData();
