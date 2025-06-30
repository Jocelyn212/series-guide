import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

async function checkAnalysis() {
    try {
        console.log('Conectando a MongoDB...');
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        console.log('Conectado exitosamente.');

        const db = client.db('seriesAnalysisDB');
        const analysisCollection = db.collection('analysis');

        console.log('Obteniendo análisis...');
        const analysis = await analysisCollection.find({}).toArray();
        console.log(`Encontrados ${analysis.length} análisis`);

        if (analysis.length > 0) {
            console.log('=== PRIMEROS 3 ANÁLISIS ===');
            analysis.slice(0, 3).forEach((item, index) => {
                console.log(`${index + 1}. ${item.title}`);
                console.log(`   Slug: ${item.slug}`);
                console.log(`   Status: ${item.status}`);
                console.log(`   Likes: ${item.likes}`);
                console.log(`   Views: ${item.views}`);
                console.log('');
            });
        }

        await client.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

checkAnalysis();
