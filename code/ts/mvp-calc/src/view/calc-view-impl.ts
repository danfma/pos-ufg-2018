import { CalcView, CalcPresenter, CalcViewInit } from "../presenter";

export class CalcViewImpl implements CalcView {
  presenter: CalcPresenter | undefined;

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

    if (this.presenter) {
      this.presenter.onInput1Changed(value);
    }
  }

  simulateSetInput2(value: number) {
    console.info(`User entered on input2: ${value}`);

    if (this.presenter) {
      this.presenter.onInput2Changed(value);
    }
  }

  simulateClickOnAdd() {
    console.info(`User clicked on add`);

    if (this.presenter) {
      this.presenter.onViewClickOnAdd();
    }
  }

  simulateClickOnSub() {
    console.info(`User clicked on sub`);

    if (this.presenter) {
      this.presenter.onViewClickOnSub();
    }
  }

  simulateClickOnDivide() {
    console.info(`User clicked on divide`);

    if (this.presenter) {
      this.presenter.onViewClickOnDivide();
    }
  }

  simulateClickOnMultiply() {
    console.info(`User clicked on multiply`);

    if (this.presenter) {
      this.presenter.onViewClickOnMultiply();
    }
  }

  simulateClickOnEquals() {
    console.info(`User clicked on equals`);

    if (this.presenter) {
      this.presenter.onViewClickOnEquals();
    }
  }
}
