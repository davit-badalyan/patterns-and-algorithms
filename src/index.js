import { Context } from "./classes/context";
import { Facade } from "./classes/facade";
import { FirstSubsystem } from "./classes/first-subsystem";
import { Invoker } from "./classes/invoker";
import { Receiver } from "./classes/receiver";
import { SecondSubsystem } from "./classes/second-subsystem";
import { ComplexCommand } from "./commands/complex-command";
import { SimpleCommand } from "./commands/simple-command";
import { FirstObserver } from "./observers/first-observer";
import { SecondObserver } from "./observers/second-observer";
import { singleton } from "./singletons/singleton";
import { AddStrategy } from "./strategies/add-strategy";
import { MultiplyStrategy } from "./strategies/multiply-strategy";
import { SubtractStrategy } from "./strategies/subtract-strategy";
import { ConcreteSubject } from "./subjects/concrete-subject";

const pattern = "facade";
switch (pattern) {
  case "command":
    doCommand();
    break;
  case "strategy":
    doStrategy();
    break;
  case "observer":
    doObserver();
    break;
  case "singleton":
    doSingleton();
    break;
  case "facade":
    doFacade();
    break;
  default:
    break;
}

function doCommand() {
  const invoker = new Invoker();
  const receiver = new Receiver();

  invoker.setOnStart(new SimpleCommand("Say Hi!"));
  invoker.setOnFinish(
    new ComplexCommand(receiver, "Send Email", "Save Report")
  );

  invoker.doSomethingImportant();
}

function doStrategy() {
  const a = 10;
  const b = 20;
  console.log("Parameters are " + a + " & " + b);

  const context = new Context(new AddStrategy());
  console.log("Strategy set to Add");
  context.doSomeLogic(a, b);

  context.strategy = new MultiplyStrategy();
  console.log("Strategy set to Multiply");
  context.doSomeLogic(a, b);

  context.strategy = new SubtractStrategy();
  console.log("Strategy set to Subtract");
  context.doSomeLogic(a, b);
}

function doObserver() {
  const subject = new ConcreteSubject();

  const firstObserver = new FirstObserver();
  subject.attach(firstObserver);

  const secondObserver = new SecondObserver();
  subject.attach(secondObserver);

  subject.doSomeLogic();
  subject.doSomeLogic();

  subject.detach(secondObserver);
  subject.doSomeLogic();
}

function doSingleton() {
  const instance = singleton;
  instance.doSomeLogic();
}

function doFacade() {
  const firstSubsystem = new FirstSubsystem();
  const secondSubsystem = new SecondSubsystem();
  const facade = new Facade(firstSubsystem, secondSubsystem);

  console.log(facade.operation());
}
