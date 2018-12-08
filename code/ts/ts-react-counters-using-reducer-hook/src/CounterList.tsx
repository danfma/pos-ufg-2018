import React, {useReducer} from "react";
import {Button, Segment} from "semantic-ui-react";
import Counter from "./Counter";

export enum ActionType {
  AddCounter = "ADD_COUNTER",
}

export interface AddCounterAction {
  type: ActionType.AddCounter;
}

export type Action = AddCounterAction;

export function reducer(counters: number[], action: Action) {
  switch (action.type) {
    case ActionType.AddCounter:
      return [...counters, 0];

    default:
      return counters;
  }
}

export default function CounterList() {
  const [counters, dispatch] = useReducer(reducer, [] as number[]);

  const addCounter = () => dispatch({type: ActionType.AddCounter});

  return (
    <Segment basic padded container>
      <Button primary onClick={addCounter}>Add counter</Button>

      {counters.map(count => (
        <Counter count={count}/>
      ))}
    </Segment>
  );
}
