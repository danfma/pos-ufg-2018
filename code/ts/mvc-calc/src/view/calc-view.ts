import { CalcController } from "../controller";

export interface CalcViewInit {
  initialInput1?: number;
  initialInput2?: number;
  initialResult?: number;
}

export class CalcView {
  controller: CalcController | undefined;

  initialize(data: CalcViewInit) {
    this.showInput1(data.initialInput1 || 0);
    this.showInput2(data.initialInput2 || 0);
    this.displayResult(data.initialResult || 0);
  }

  showInput1(value: number) {
    console.log(`Input1 = ${value}`);
  }

  showInput2(value: number) {
    console.log(`Input2 = ${value}`);
  }

  displayResult(value: number) {
    console.log(">>", value);
  }

  showError(message: string) {
    console.error(`Error: ${message}`);
  }

  simulateSetInput1(value: number) {
    console.info(`User entered on input1: ${value}`);

    if (this.controller) {
      this.controller.onInput1Changed(value);
    }
  }

  simulateSetInput2(value: number) {
    console.info(`User entered on input2: ${value}`);

    if (this.controller) {
      this.controller.onInput2Changed(value);
    }
  }

  simulateClickOnAdd() {
    console.info(`User clicked on add`);

    if (this.controller) {
      this.controller.onViewClickOnAdd();
    }
  }

  simulateClickOnSub() {
    console.info(`User clicked on sub`);

    if (this.controller) {
      this.controller.onViewClickOnSub();
    }
  }

  simulateClickOnDivide() {
    console.info(`User clicked on divide`);

    if (this.controller) {
      this.controller.onViewClickOnDivide();
    }
  }

  simulateClickOnMultiply() {
    console.info(`User clicked on multiply`);

    if (this.controller) {
      this.controller.onViewClickOnMultiply();
    }
  }

  simulateClickOnEquals() {
    console.info(`User clicked on equals`);

    if (this.controller) {
      this.controller.onViewClickOnEquals();
    }
  }
}
