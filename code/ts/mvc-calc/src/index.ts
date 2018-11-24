import { Calc } from "./model";
import { CalcController } from "./controller";
import { CalcView, ConsoleCalcView } from "./view";

const model = new Calc();
// const view = new CalcView();
const view = new ConsoleCalcView();
const controller = new CalcController(model, view);

view.controller = controller;
controller.initialize();

// view.simulateSetInput1(20);
// view.simulateSetInput2(40);
// view.simulateClickOnAdd();
// view.simulateClickOnEquals();
