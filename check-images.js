import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

async function checkImages() {
    try {
        console.log('Conectando a MongoDB...');
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        console.log('Conectado exitosamente.');

        const db = client.db('seriesAnalysisDB');
        const seriesCollection = db.collection('series');

        console.log('Obteniendo series...');
        const severance = await seriesCollection.findOne({ title: "Severance" });

        console.log('=== SEVERANCE ===');
        if (severance) {
            console.log(`Title: ${severance.title}`);
            console.log(`PosterUrl: ${severance.posterUrl}`);
            console.log('URL completa:', severance.posterUrl);
        } else {
            console.log('Severance no encontrada');
        }

        await client.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

checkImages();
