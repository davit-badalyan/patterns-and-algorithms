import { BaseComponent } from "../classes/base-component";

export class FirstComponent extends BaseComponent {
  doA() {
    console.log("FirstComponent does A.");
    this._mediator.notify(this, "A");
  }

  doB() {
    console.log("FirstComponent does B");
    this._mediator.notify(this, "B");
  }
}
