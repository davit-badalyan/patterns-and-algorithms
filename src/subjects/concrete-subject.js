import { Subject } from "../interfaces/subject";

export class ConcreteSubject extends Subject {
  constructor() {
    super();

    this._state;
    this._observers = [];
  }

  get state() {
    return this._state;
  }

  attach(observer) {
    const isExist = this._observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been already attached.");
    }

    console.log("Subject: Attached an observer.");
    this._observers.push(observer);
  }

  detach(observer) {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    console.log("Subject: Detached an observer.");
    this._observers.slice(observerIndex, 1);
  }

  notify() {
    console.log("Subject: Notifying observers...");
    this._observers.forEach((observer) => {
      observer.update(this);
    });
  }

  doSomeLogic() {
    console.log("\nSubject: I'm doing something important.");
    this._state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}
