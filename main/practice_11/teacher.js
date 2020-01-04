import Person from "../practice_8/person";

export default class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    if (this.klasses) {
      let klassNumbers = this.klasses.reduce((acc, cur) => {
        // cur.registerAssignLeaderListener(this);
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

  logAssignLeaderMessage(newLeader) {
    console.log(`I am ${this.name}. I know ${newLeader.name} become Leader of ${newLeader.klass.getDisplayName()}.`)
  };

  logJoinMessage(newMember) {
    console.log(`I am ${this.name}. I know ${newMember.name} has joined ${newMember.klass.getDisplayName()}.`)

  }
}
