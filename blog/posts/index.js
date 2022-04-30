const express = require('express');

const app = express();

app.get('/post', (req, res) => {

});

app.post('/posts', (req,res) => {

});

app.listen(4000, () => {
    console.log("Servidor ouvindo *---*");
})