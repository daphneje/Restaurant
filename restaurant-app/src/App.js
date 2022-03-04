import React from 'react';
import {Main} from './screens'
import {NavBar} from './components'
import {CategoryBar} from './components'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CategoryBar/>
      <Main/>
    
    </div>
  );
}

export default App;
