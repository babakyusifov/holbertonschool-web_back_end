const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const dbFile = process.argv[2]; // database.csv fayl adı

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(dbFile)
    .then((content) => {
      res.write(content);
      res.end();
    })
    .catch(() => {
      // Error baş verəndə də tələb olunan formatda göndər
      res.write('Cannot load the database');
      res.end();
    });
});

app.listen(1245);

module.exports = app;
