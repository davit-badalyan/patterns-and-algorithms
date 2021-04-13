export class Context {
  constructor(strategy) {
    this._strategy = strategy;
  }

  get strategy() {
    return this._strategy;
  }

  set strategy(value) {
    this._strategy = value;
  }

  doSomeLogic(a, b) {
    const result = this._strategy.doAlgorithm(a, b);
    console.log(result);
  }
}
