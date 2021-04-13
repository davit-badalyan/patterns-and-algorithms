import { Command } from "../interfaces/command";

export class SimpleCommand extends Command {
  constructor(payload) {
    super();

    this._payload = payload;
  }

  execute() {
    console.log("Simple Command: " + this._payload);
  }
}
