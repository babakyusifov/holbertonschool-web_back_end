const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents('database.csv');
    res.status(200).send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT);
module.exports = app;

