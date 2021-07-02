import { FirstSubsystem } from "../subsystems/first-subsystem";
import { SecondSubsystem } from "../subsystems/second-subsystem";

export class Facade {
  constructor(firstSubsystem = null, secondSubsystem = null) {
    this._firstSubsystem = firstSubsystem || new FirstSubsystem();
    this._secondSubsystem = secondSubsystem || new SecondSubsystem();
  }

  operation() {
    let result = "Facade initializes subsystems:\n";

    result += this._firstSubsystem.operationA();
    result += this._secondSubsystem.operationA();

    result += "Facade orders subsystems to perform the action:\n";

    result += this._firstSubsystem.operationB();
    result += this._secondSubsystem.operationC();

    return result;
  }
}
