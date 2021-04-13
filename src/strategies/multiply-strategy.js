import { Strategy } from "../interfaces/strategy";

export class MultiplyStrategy extends Strategy {
  constructor() {
    super();
  }

  doAlgorithm(a, b) {
    return a * b;
  }
}
