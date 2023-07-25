import { NextResponse } from 'next/server';


const mongoose = require('mongoose');
let ParticipatesCollection;

try {
    mongoose.connect('mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/avsar',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
    ParticipatesCollection = mongoose.model('participates');
} catch {
    const participatesCollectionSchema = new mongoose.Schema({}, { strict: false });
    ParticipatesCollection = mongoose.model('participates', participatesCollectionSchema);
}

const getParticipates = async () => {
    const participates = await ParticipatesCollection.find({});
    return participates;
  };
  
  export async function POST(req, res) {
    getParticipates()
      .then((foundParticipates) => {
        res.json(foundParticipates);
      })
      .catch((err) => {
        console.error("Error fetching data from MongoDB:", err);
        return res.status(500).json({ error: "Error fetching data from MongoDB" });
      });
  };
