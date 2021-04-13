import { Strategy } from "../interfaces/strategy";

export class SubtractStrategy extends Strategy {
  constructor() {
    super();
  }

  doAlgorithm(a, b) {
    return a - b;
  }
}
