const config = require('./config.json');
const cors = require('cors')
const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = 4000;
const app = express();
const client = new MongoClient(config.MongoURI);
const db = await client.connect();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};
app.get('/getquotes', async (req, res) => {
    try {
        quotedata = await db.db("SyedBot").collection("quotes").find().sort({time: -1}).toArray();
        res.json(quotedata)
    } catch (e) {
        db.close()
        db = await client.connect();
        // make this better
        console.error(e);
    }
})

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
})