// -- Strategy -- //
// import { Context } from "./classes/context";
// import { AddStrategy } from "./strategies/add-strategy";
// import { MultiplyStrategy } from "./strategies/multiply-strategy";
// import { SubtractStrategy } from "./strategies/subtract-strategy";

// const a = 10;
// const b = 20;
// console.log("Parameters are " + a + " & " + b);

// const context = new Context(new AddStrategy());
// console.log("Strategy set to Add");
// context.doSomeLogic(a, b);

// context.strategy = new MultiplyStrategy();
// console.log("Strategy set to Multiply");
// context.doSomeLogic(a, b);

// context.strategy = new SubtractStrategy();
// console.log("Strategy set to Subtract");
// context.doSomeLogic(a, b);

// -- Observer -- //
// import { FirstObserver } from "./observers/first-observer";
// import { SecondObserver } from "./observers/second-observer";
// import { ConcreteSubject } from "./subjects/concrete-subject";

// const subject = new ConcreteSubject();

// const firstObserver = new FirstObserver();
// subject.attach(firstObserver);

// const secondObserver = new SecondObserver();
// subject.attach(secondObserver);

// subject.doSomeLogic();
// subject.doSomeLogic();

// subject.detach(secondObserver);
// subject.doSomeLogic();

// -- Singleton -- //
import { singleton } from "./singletons/singleton";

const instance = singleton;
instance.doSomeLogic();
