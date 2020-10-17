import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hej vandaag ben ik naar de {process.env.REACT_APP_INITIAL_TEXT} geweest.</p>
      </header>
    </div>
  );
}

export default App;
