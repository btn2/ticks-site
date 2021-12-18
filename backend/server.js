const config = require('./config.json');
const cors = require('cors')
const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = 5000;
const app = express();
const client = new MongoClient(config.MongoURI);

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};
app.get('/getquotes', async (req, res) => {
    try {
        db = await client.connect();
        quotedata = await db.db("SyedBot").collection("quotes").find().toArray();
        res.json(quotedata)
    } catch (e) {
        console.error(e);
    } finally {
        db.close();
    }
})

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
})