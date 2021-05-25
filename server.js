const fs = require('fs');
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use('/', htmlRoutes);


// app.get('/notes', (req, res) => {
//     res.json
// })

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});