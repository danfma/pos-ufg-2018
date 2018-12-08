import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, ButtonGroup, Card, Header, Icon} from "semantic-ui-react";
import {Counter} from "../viewmodel";

export interface CounterViewProps {
  counter: Counter;
}

export default observer(
  function CounterView(props: CounterViewProps) {
    const counter = props.counter;

    const increment = () => counter.increment();
    const decrement = () => counter.decrement();

    return (
      <Card>
        <Card.Content textAlign="center">
          <Header textAlign="center">
            {counter.count}
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
)
