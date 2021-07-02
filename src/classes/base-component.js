export class BaseComponent {
  constructor(mediator = null) {
    this._mediator = mediator;
  }

  setMediator(mediator) {
    this._mediator = mediator;
  }
}
