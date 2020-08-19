import React from 'react';
import './App.css';
import TimelimeLabel from './components/timeline'
import DrawerForm from './components/drawer';




function App() {
  return (
    <div className="App">
      <DrawerForm />
      <TimelimeLabel />
    </div>
  );
}

export default App;
