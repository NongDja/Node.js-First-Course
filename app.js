const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {

    res.send('Hello IamDew Kub!');

})

app.listen(port, () => {
    debug(`Example app listening at http://localhost:${port}`);
})