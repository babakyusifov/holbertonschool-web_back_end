// Classroom class
// Mənbə: https://stackoverflow.com/questions/4484424/underscore-prefix-for-property-and-method-names-in-javascript

export default class ClassRoom {
  constructor(maxStudentsSize = 0) {
    // _maxStudentsSize adlandırılması onun private və ya daxili istifadə üçün olduğunu göstərir (konvensiya olaraq)
    this._maxStudentsSize = maxStudentsSize;
  }
}
