export class Invoker {
  constructor() {
    // Commands
    this._onStart;
    this._onFinish;
  }

  get onStart() {
    return this._onStart;
  }

  get onFinish() {
    return this._onFinish;
  }

  setOnStart(command) {
    this._onStart = command;
  }

  setOnFinish(command) {
    this._onFinish = command;
  }

  doSomethingImportant() {
    console.log("Invoker: ");

    if (this.isCommand(this._onStart)) {
      this._onStart.execute();
    }

    console.log("Invoker: doing something important");

    if (this.isCommand(this._onFinish)) {
      this._onFinish.execute();
    }
  }

  isCommand(object) {
    return object.execute !== undefined;
  }
}
