import React, {useState} from 'react';
import {Button, ButtonGroup, Card, Header, Icon, Segment} from "semantic-ui-react";
import "./assets/styles/app.scss";

interface CounterProps {
  count?: number;
}

function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.count || 0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

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

function App() {
  const [counters, setCounters] = useState([] as number[]);

  const addCounter = () => setCounters([...counters, 0]);

  return (
    <Segment basic padded container>
      <Button primary onClick={addCounter}>Add counter</Button>

      {counters.map(count => (
        <Counter count={count}/>
      ))}
    </Segment>
  );
}

export default App;
