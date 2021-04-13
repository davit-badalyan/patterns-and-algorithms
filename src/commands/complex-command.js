import { Command } from "../interfaces/command";

export class ComplexCommand extends Command {
  constructor(receiver, a, b) {
    super();

    this._receiver = receiver;
    this._a = a;
    this._b = b;
  }

  execute() {
    console.log("Complex Command:");
    this._receiver.doSomething(this._a);
    this._receiver.doSomethingElse(this._b);
  }
}
