import React, {useState} from 'react';
import Header from './Header';

function App() {
  let [counter,setCounter] = useState(0);
  // retorna dois array 
  // Array [valor, funçãodeAtualização] 

    function increment(){
        setCounter(counter+1);
    }

    return (
        <div>
        <Header>Counter: {counter}</Header>
        <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
