import React, { useState } from 'react';
import List from './components/List';
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
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
      name: 'Bernard',
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-boy-names-edmond-1564113059.jpg?crop=1.00xw:0.752xh;0,0.0145xh&resize=980:*',
      age: 36,
      note: 'N/A'
    }
  ])
  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
