require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./db');
database.sync();
app.use(Express.json());
