/* import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/avsar';
const dbName = 'avsar';
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected && cachedClient.isConnected()) {
    return cachedClient;
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  cachedClient = client;
  return client;
}
export { connectToDatabase }; */