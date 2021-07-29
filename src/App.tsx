import React, { useState } from 'react';
import List from './components/List';
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Tyler',
      url: '',
      age: 36,
      note: 'N/A'
    }
  ])
  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
