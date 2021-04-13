class Singleton {
  constructor() {
    // this._instance;
  }

  // get instance() {
  //   if (!Singleton.instance) {
  //     Singleton.instance = new Singleton();
  //   }

  //   return Singleton.instance;
  // }

  doSomeLogic() {
    console.log("Singleton instance");
  }
}

export const singleton = new Singleton();
