import { Observer } from "../interfaces/observer";
import { ConcreteSubject } from "../subjects/concrete-subject";

export class SecondObserver extends Observer {
  constructor() {
    super();
  }

  update(subject) {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log("SecondObserver: Reacted to the event.");
    }
  }
}
