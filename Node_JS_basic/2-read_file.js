const fs = require('fs');

function countStudents(path) {
  try {
    // Faylı oxu
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Header-i çıxarırıq (firstName, lastName, age, field)
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((line) => {
      const parts = line.split(',');
      const firstname = parts[0];
      const field = parts[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const [field, list] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
