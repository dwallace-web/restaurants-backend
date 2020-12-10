require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./db');
database.sync();
app.use(Express.json());


app.listen(process.env.PORT, () => console.log(`App is listening on the Port number: ${process.env.PORT}`));