const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);

app.listen(3000, () => {
  console.log('App starting on port 3000')
});
