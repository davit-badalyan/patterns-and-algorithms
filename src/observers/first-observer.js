import { Observer } from "../interfaces/observer";
import { ConcreteSubject } from "../subjects/concrete-subject";

export class FirstObserver extends Observer {
  constructor() {
    super();
  }

  update(subject) {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("FirstObserver: Reacted to the event.");
    }
  }
}
