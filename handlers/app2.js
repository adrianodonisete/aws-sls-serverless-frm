const express = require('express');
const cors = require('cors');
const sls = require('serverless-http');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/prod", (req, res) => {
    const product = [1,2,3,4];
    res.json(product);
});

// app.listen(3001, () => {
//     console.log('running...');
// });

module.exports.server = sls(app);