import { transient } from "aurelia-framework";

@transient()
export class Counter {
  constructor(public count: number = 0) {

  }

  setCount(value: number) {
    this.count = value;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
