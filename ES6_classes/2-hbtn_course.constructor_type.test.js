import HolbertonCourse from './2-hbtn_course.constructor_type';

test('HolbertonCourse checks constructor types', () => {
  expect(() => {
    new HolbertonCourse(10, 20, ['Lucie', 'Guillaume']);
  }).toThrow();

  expect(() => {
    new HolbertonCourse('PHP', '20', ['Lucie', 'Guillaume']);
  }).toThrow();
});

