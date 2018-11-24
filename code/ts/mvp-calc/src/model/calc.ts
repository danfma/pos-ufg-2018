import { Operator } from "./operator";

export class Calc {
  x = 0;
  y = 0;
  operator = Operator.None;

  calculate() {
    const { x, y, operator } = this;

    switch (operator) {
      case Operator.Add:
        return Calc.add(x, y);

      case Operator.Subtract:
        return Calc.sub(x, y);

      case Operator.Multiply:
        return Calc.multiply(x, y);

      case Operator.Divide:
        return Calc.divide(x, y);

      default:
        throw new Error("Please, choose an operator");
    }
  }

  static add(x: number, y: number) {
    return x + y;
  }

  static sub(x: number, y: number) {
    return x - y;
  }

  static multiply(x: number, y: number) {
    return x * y;
  }

  static divide(x: number, y: number) {
    return x / y;
  }
}
