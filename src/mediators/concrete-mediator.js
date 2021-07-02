import { Mediator } from "../interfaces/mediator";

export class ConcreteMediator extends Mediator {
  constructor(firstComponent, secondComponent) {
    super();
    this._firstComponent = firstComponent;
    this._firstComponent.setMediator(this);

    this._secondComponent = secondComponent;
    this._secondComponent.setMediator(this);
  }

  notify(sender, event) {
    if (event === "A") {
      console.log("Mediator reacts on A and triggers following operations:");
      this._secondComponent.doC();
    }

    if (event === "D") {
      console.log("Mediator reacts on D and triggers following operations:");
      this._firstComponent.doB();
      this._secondComponent.doC();
    }
  }
}
