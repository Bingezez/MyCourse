const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { mainRouter } = require('./api/api.router');
const { PORT, URI } = require('./configs/variables');

const app = express();

mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {console.log('Connected!')})
.catch((e) => {console.log(e)});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);

app.listen(PORT, () => {    
    console.log(`App listen http://localhost:${PORT} port.`);
});
