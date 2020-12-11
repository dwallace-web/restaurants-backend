require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./db');

database.sync();
app.use(Express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Is this thing working?'
    });
});

database.authenticate()
.then(() => console.log('CONFIRMATION - DATABASE CONNECTED'))
.then(() => app.listen(process.env.PORT, () => console.log(`App on PORT: ${process.env.PORT}`))
)
.catch(err => console.log(err));

// app.use(Express.static(__dirname + '/public'));
// const user = require('./controllers/userController');
// app.use('/user', user)
