import { bindable, autoinject, computedFrom } from "aurelia-framework";
import { Counter as CounterModel } from "../../../model";

@autoinject
export class Counter {
  @bindable
  initialCount: number;

  constructor(
    private readonly _counter: CounterModel) {

  }

  @computedFrom("_counter.count")
  get count() {
    return this._counter.count;
  }

  increment() {
    this._counter.increment();
  }

  decrement() {
    this._counter.decrement();
  }

  protected initialCountChanged(value: string) {
    if (value) {
      this._counter.setCount(Number(value));
    }
  }
}
