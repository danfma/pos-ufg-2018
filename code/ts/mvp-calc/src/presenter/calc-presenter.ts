import { Calc, Operator } from "model";
import { CalcView } from "./calc-view";

export class CalcPresenter {

  constructor(
    private readonly _calc: Calc,
    private readonly _view: CalcView) {

  }

  initialize() {
    this._view.initialize({
      initialInput1: 0,
      initialInput2: 0,
      initialResult: 0
    });
  }

  onInput1Changed(value: number) {
    this._calc.x = value;
  }

  onInput2Changed(value: number) {
    this._calc.y = value;
  }

  onViewClickOnMultiply() {
    this._calc.operator = Operator.Multiply;
  }

  onViewClickOnDivide() {
    this._calc.operator = Operator.Divide;
  }

  onViewClickOnSub() {
    this._calc.operator = Operator.Subtract;
  }

  onViewClickOnAdd() {
    this._calc.operator = Operator.Add;
  }

  onViewClickOnEquals() {
    try {
      const result = this._calc.calculate();
      this._view.displayResult(result);

    } catch (e) {
      this._view.showError(e.message);
    }
  }
}
