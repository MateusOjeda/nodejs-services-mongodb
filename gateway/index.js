const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy')

const app = express();

app.use(cors());
app.use(express.json());    

app.use('/customer', proxy('http://localhost:8001'));
app.use('/', proxy('http://localhost:8002')); // products
app.use('/shopping', proxy('http://localhost:8003'));

app.listen(8000,  () => {
    console.log('Gateway is listening port 8000');
});