import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://katakiyaharshl001:2cbHVxcHwahLLNDI@cluster0.fqocx8a.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB connection URI
const dbName = 'avsarevent'; // Update with your database name

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);

  cachedClient = client;

  return client;
}

export { connectToDatabase };
