import {action, observable} from "mobx";
import {Counter} from "./counter";

export class CounterList {
  @observable
  counters: Counter[] = [];

  @action
  addCounter() {
    this.counters.push(new Counter());
  }
}
