require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./db');

// database.sync();

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const cors = require('cors');
app.use(cors());

app.use(Express.json());

app.use('/user', controllers.User);
app.use('/restaurant', middlewares.ValidateSession, controllers.Restaurant);
app.use('/comment', middlewares.ValidateSession, controllers.Comment);

app.get('/', (req, res) => {
  res.json({
    message: 'Is this thing working?',
  });
});

database
  .authenticate()
  // .then(() => database.sync({force: true}))
  .then(() => database.sync())
  .then(() => console.log('CONFIRMATION - DATABASE CONNECTED'))
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`App on PORT: ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));

// app.use(Express.static(__dirname + '/public'));
// const user = require('./controllers/userController');
