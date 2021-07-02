import { BaseComponent } from "../classes/base-component";

export class SecondComponent extends BaseComponent {
  doC() {
    console.log("SecondComponent does C.");
    this._mediator.notify(this, "C");
  }

  doD() {
    console.log("SecondComponent does D");
    this._mediator.notify(this, "D");
  }
}
