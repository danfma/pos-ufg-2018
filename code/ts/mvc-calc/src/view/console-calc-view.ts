import { Operator } from "../model";
import { CalcView, CalcViewInit } from "./calc-view";
import readline from "readline";

export class ConsoleCalcView extends CalcView {
  initialize(data: CalcViewInit) {
    super.initialize(data);
    this.watchConsole();
  }

  private watchConsole() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "calc > "
    });

    const operatorHandlers = {
      [Operator.None]: undefined,
      [Operator.Add]: () => this.simulateClickOnAdd(),
      [Operator.Subtract]: () => this.simulateClickOnSub(),
      [Operator.Multiply]: () => this.simulateClickOnMultiply(),
      [Operator.Divide]: () => this.simulateClickOnDivide(),
    };

    rl.prompt();

    rl
      .on("line", line => {
        // TODO Should break this apart
        if (line.match(/^x=/)) {
          const value = Number(line.substr(2).trim());
          this.simulateSetInput1(value);

        } else if (line.match(/^y=/)) {
          const value = Number(line.substr(2).trim());
          this.simulateSetInput2(value);

        } else if (line.match(/^op=/)) {
          const operator = line.substr(3).trim() as Operator;
          const operatorHandler = operatorHandlers[operator];

          if (operatorHandler) {
            operatorHandler();
          } else {
            this.showError("Unknown operator");
          }

        } else if (line === "eq") {
          this.simulateClickOnEquals();

        } else {
          console.log("Unknown command... Please use one of the following commands:");
          console.log("x=NUMBER     # For defining the input1");
          console.log("y=NUMBER     # For defining the input2");
          console.log("op=+|-|/|*   # For defining the input1");
          console.log("eq           # For printing the result");
        }

        rl.prompt();
      })
      .on("close", () => {
        process.exit();
      });
  }
}
