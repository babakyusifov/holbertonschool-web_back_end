const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift(); // başlığı at

      const students = {};
      let total = 0;

      for (const line of lines) {
        if (line.trim() === '') continue;
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (field) {
          if (!students[field]) students[field] = [];
          students[field].push(firstname);
          total += 1;
        }
      }

      let output = `Number of students: ${total}\n`;
      console.log(`Number of students: ${total}`);

      for (const [field, list] of Object.entries(students)) {
        const line = `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        console.log(line);
        output += `${line}\n`;
      }

      resolve(output.trim()); // string-i qaytar
    });
  });
}

module.exports = countStudents;
