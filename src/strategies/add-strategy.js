import { Strategy } from "../interfaces/strategy";

export class AddStrategy extends Strategy {
  constructor() {
    super();
  }

  doAlgorithm(a, b) {
    return a + b;
  }
}
