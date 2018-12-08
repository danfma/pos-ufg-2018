import React from 'react';
import CounterListView from "./view/CounterListView";
import "./assets/styles/app.scss";
import {CounterList} from "./viewmodel";

const counters = new CounterList();

export default function App() {
  return (
    <CounterListView counters={counters}/>
  );
}
