import { Calc } from "./model";
import { CalcPresenter } from "./presenter";
import { CalcViewImpl, ConsoleCalcViewImpl } from "./view";

const model = new Calc();
// const view = new CalcView();
const view = new ConsoleCalcViewImpl();
const presenter = new CalcPresenter(model, view);

view.presenter = presenter;
presenter.initialize();

// view.simulateSetInput1(20);
// view.simulateSetInput2(40);
// view.simulateClickOnAdd();
// view.simulateClickOnEquals();
