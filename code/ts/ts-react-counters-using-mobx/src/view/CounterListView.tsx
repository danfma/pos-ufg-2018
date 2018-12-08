import React from "react";
import {observer} from "mobx-react-lite";
import {Button, Segment} from "semantic-ui-react";
import {CounterList} from "../viewmodel";
import CounterView from "./CounterView";

export interface CounterListViewProps {
  counters: CounterList;
}

export default observer(
  function CounterListView(props: CounterListViewProps) {
    const counters = props.counters;
    const addCounter = () => counters.addCounter();

    return (
      <Segment basic padded container>
        <Button primary onClick={addCounter}>Add counter</Button>

        {counters.counters.map(counter => (
          <CounterView counter={counter}/>
        ))}
      </Segment>
    );
  }
)
