/* global process, require */

const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get(`/app/*`, (req, res) => {
  return res.render(`./demo`);
});

// Host Static files from `./tmp`
app.use('/demo', express.static('.tmp/'));

app.listen(8080, () => {
  console.log('Host > listen: listening on port: 8080.');
});
