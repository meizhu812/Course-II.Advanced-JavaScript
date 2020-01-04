export default class Class {
  constructor(number) {
    this.number = number;
    this.assignLeaderListeners = [];
    this.joinListeners = [];
  }

  getDisplayName() {
    return `Class ${this.number}`
  }

  assignLeader(newLeader) {
    if (newLeader.klass.number === this.number) {
      this.leader = newLeader;
      this.notifyAssignLeaderListeners(newLeader);
    } else {
      console.log("It is not one of us.")
    }
  }

  registerAssignLeaderListener(listener) {
    this.assignLeaderListeners.push(listener);
  }

  registerJoinListener(listener) {
    this.joinListeners.push(listener);
  }

  notifyAssignLeaderListeners(newLeader) {
    for (let listener of this.assignLeaderListeners) {
      listener.logAssignLeaderMessage(newLeader);
    }
  }

  notifyJoinListeners(newMember) {
    for (let listener of this.joinListeners) {
      listener.logJoinMessage(newMember);
    }
  }

  appendMember(newMember) {
    newMember.klass = this;
    this.notifyJoinListeners(newMember);
  }

  isIn(student) {
    return student.klass === this;
  }
}
