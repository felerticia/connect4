import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import DropZone from './components/DropZone';

function App() {

  const [turn,setTurn] = useState(2)
  const [dropped,setDropped] = useState([
    {x:6, y:0, player:1},
    {x:6, y:1, player:2},
    {x:6, y:4, player:1},
    {x:5, y:4, player:1},
    {x:4, y:4, player:1},
  ])

  return (
    <div className="App">
      <DropZone dropped={dropped} turn={turn}/>
      <Board/>
    </div>
  );
}

export default App;
