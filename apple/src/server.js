const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serving Static files
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

// Route for hello-world page:
app.get('/hello-world', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
})

// Route for apple page:
app.get('/apple', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/apple.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
})

app.listen(3000, function() {
    console.log('Application is running on http://localhost:3000');
})