import React, {useEffect, useState} from 'react';

import '../styles/App.css';
import List from './List';
import Form from './Form';

const HOME = 'Home';
const CITY = 'City';
const SPORT = 'Sport'; 
if (sessionStorage.getItem('screen') === null)
  sessionStorage.setItem('screen', HOME);

function App() {
  const [screen, setScreen] = useState(HOME); 

  useEffect(() => setScreen(sessionStorage.getItem('screen')), []);

  const choosePage = e => {
    sessionStorage.setItem('screen', e.target.value);
    setScreen(e.target.value); 
  }
  
  return ( 
    <div className="App">
      <button onClick={choosePage} value={HOME}>Home</button>
      <button onClick={choosePage} value={CITY}>Cities</button>
      <button onClick={choosePage} value={SPORT}>Sports</button>
      {console.log(screen)}
      {(screen===HOME) ? 
        <h1>Welcome to my wonderful app</h1> : 
        (screen===CITY) ? 
          <List /> :
        <Form />}
  </div>
  );
}


export default App;
