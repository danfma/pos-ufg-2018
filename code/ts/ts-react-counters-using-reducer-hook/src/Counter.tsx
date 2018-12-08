import React, {useReducer} from 'react';
import {Button, ButtonGroup, Card, Header, Icon} from "semantic-ui-react";

export enum ActionType {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
}

export interface IncrementAction {
  type: ActionType.Increment;
}

export interface DecrementAction {
  type: ActionType.Decrement;
}

export type Action = IncrementAction | DecrementAction;

export function reducer(count: number, action: Action) {
  switch (action.type) {
    case ActionType.Increment:
      return count + 1;

    case ActionType.Decrement:
      return count - 1;

    default:
      return count;
  }
}

export interface CounterProps {
  count?: number;
}

export default function Counter(props: CounterProps) {
  const [count, dispatch] = useReducer(reducer, props.count || 0);

  const increment = () => dispatch({type: ActionType.Increment});
  const decrement = () => dispatch({type: ActionType.Decrement});

  return (
    <Card>
      <Card.Content textAlign="center">
        <Header textAlign="center">
          {count}
        </Header>
      </Card.Content>

      <ButtonGroup widths={2}>
        <Button icon onClick={decrement}>
          <Icon name="minus"/>
        </Button>

        <Button icon onClick={increment}>
          <Icon name="plus"/>
        </Button>
      </ButtonGroup>
    </Card>
  );
}
