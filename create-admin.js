import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

async function createAdminUser() {
    const client = new MongoClient(MONGODB_URI);

    try {
        await client.connect();
        const db = client.db('seriesAnalysisDB');
        const usersCollection = db.collection('users');

        // Verificar si ya existe un admin
        const existingAdmin = await usersCollection.findOne({ role: 'admin' });

        if (existingAdmin) {
            console.log('Ya existe un usuario administrador:', existingAdmin.username);
            return;
        }

        // Crear hash de la contraseña
        const password = 'admin123'; // Cambia esto por una contraseña segura
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario admin
        const adminUser = {
            username: 'admin',
            email: 'admin@seriesguide.com',
            password: hashedPassword,
            role: 'admin',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await usersCollection.insertOne(adminUser);
        console.log('Usuario administrador creado exitosamente:');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('ID:', result.insertedId);

    } catch (error) {
        console.error('Error creando usuario admin:', error);
    } finally {
        await client.close();
    }
}

createAdminUser();
