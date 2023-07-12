import { connectToDatabase } from '../db';

export default async function handler(req, res) {
    const client = await connectToDatabase();

    if (req.method === 'POST') {
        const { formData } = req.body;
        console.log(formData);
        // Perform any necessary data validation or transformation here

        const collection = client.db().collection('users');
        await collection.insertOne(formData);

        res.status(201).json({ message: 'Data inserted successfully.' });
    } else if (req.method === 'GET') {
        const collection = client.db().collection('users');
        const data = await collection.find().toArray();

        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}