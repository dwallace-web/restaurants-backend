require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./db');
database.sync();
app.use(Express.json());


app.listen(process.env.PORT, () => console.log(`App on PORT: ${process.env.PORT}`));
app.use(Express.static(__dirname + '/public'));

app.get('/', (request, response) => response.render('index'));


const user = require('./controllers/userController');
// app.use('/user', user)