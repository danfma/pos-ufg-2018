import {action, observable} from "mobx";

export class Counter {
  @observable
  count = 0;

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }
}
