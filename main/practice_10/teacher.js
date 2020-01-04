import Person from "../practice_8/person";

export default class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    if (this.klasses) {
      let klassNumbers = this.klasses.reduce((acc, cur) => {
        acc.push(cur.number);
        return acc;
      }, []);
      return super.introduce() + ` I am a Teacher. I teach Class ${klassNumbers.join(", ")}.`;
    }
    return super.introduce() + ` I am a Teacher. I teach No Class.`;
  }

  isTeaching(student) {
    for (let klass of this.klasses) {
      if (klass.isIn(student)) {
        return true;
      }
    }
    return false;
  }
}
