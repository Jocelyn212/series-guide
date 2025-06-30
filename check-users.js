import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

async function checkUsers() {
    const client = new MongoClient(MONGODB_URI);
    try {
        await client.connect();
        const db = client.db('seriesAnalysisDB');
        const users = await db.collection('users').find({}).toArray();
        console.log('Usuarios encontrados:', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

checkUsers();
