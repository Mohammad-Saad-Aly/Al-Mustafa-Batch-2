import './App.css';
import First from './Components/first';
import { createContext } from 'react';
import { useState } from 'react';
import Fourth from './Components/fourth';


export const NameContext = createContext()


function App() {
  let [name,setName] = useState('Hamza')
  return (
    <div className="App">
      <NameContext.Provider value={name}>
        <Fourth/>
      </NameContext.Provider>
    </div>
  );
}

export default App;
