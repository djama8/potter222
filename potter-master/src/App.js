import { useEffect, useState } from 'react';
import './App.css';

import CardList from './components/cardList/cardList';
import Header from './components/header/header';

import hermiona from './assets/img/hermiona.svg';
import draco from './assets/img/draco.svg';
import harry from './assets/img/harry.jpg';
import axios from 'axios';

function App() {
  const[cards, setCards] = useState([

  ]);

  const [schools, setSchool] = useState([
    {name: 'Грифиндор'},
    {name: 'Когтевра'},
    {name: 'Пуфендуй'},
    {name: 'Слизерин'}
    

  ])

  useEffect(()=>{
    axios.get('http://localhost:3001/schools').then((schools)=>{
      setSchool(schools.data);
    })

    axios.get('http://localhost:3001/heroes').then((heroes)=>{
      setCards(heroes.data);
    })
  },[])


  return (
    <div className="App">
      <Header schools={schools}/>
      <hr></hr>
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
