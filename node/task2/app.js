const express = require('express');

const { mainRouter } = require('./api/api.router');
const { PORT } = require('./configs/variables');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);

app.listen(PORT, () => {
    console.log(`App listen http:\\localhost:${PORT} port.`);
});

// test git in vs code