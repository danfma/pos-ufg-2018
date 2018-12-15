import React, { useState, useReducer } from 'react';
import { Button, ButtonGroup, Card, Header, Icon, Segment } from "semantic-ui-react";
import "./assets/styles/app.scss";


export const enum CountersAction {
  AddCounter,
}

function countersReducer(counters: number[], action: CountersAction): number[] {
  switch (action) {
    case CountersAction.AddCounter:
      return [...counters, 0];

    default:
      return counters;
  }
}

function App() {
  const [counters, dispatch] = useReducer(countersReducer, [] as number[]);

  const addCounter = () => dispatch(CountersAction.AddCounter);

  return (
    <Segment basic padded container>
      <Button primary onClick={addCounter}>Add counter</Button>

      {counters.map(count => (
        <Counter count={count} />
      ))}
    </Segment>
  );
}

export default App;
