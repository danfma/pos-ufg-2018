import { Calc } from "./model";
import { CalcController } from "./controller";
import { CalcView } from "./view";

const model = new Calc();
const view = new CalcView();
const controller = new CalcController(model, view);

view.controller = controller;
controller.initialize();

// view.simulateSetInput1(20);
// view.simulateSetInput2(40);
// view.simulateClickOnAdd();
// view.simulateClickOnEquals();
