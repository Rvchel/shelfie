const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config()
const app = express();

app.use(express.json());

app.get("/api/inventory")

massive(process.env.CONNECTION_STRING)

const SERVER_PORT = 5353;
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));
