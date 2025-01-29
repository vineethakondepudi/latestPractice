const express = require('express');
const app = express();
const db = require('./db');
const router = require('./controller/empController');
require('express-async-errors')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use('/api/emp',router)
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong!')
})

db.query('SELECT 1')
.then(() => 
    {
        console.log('Database connected'),
             app.listen(4040,
    () => console.log("Server started at 4040"))
    }
)
.catch(err => console.log('Database failed /n', err));



