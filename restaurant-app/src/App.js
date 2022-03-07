import React from 'react';
import {Main, MenuItems} from './screens'
import {NavBar, CategoryBar} from './components'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// const { testConnection} = require('./models');

// testConnection();


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='content'>
          <Routes>
            <Route path='/' element = {<Main/>} />
    
            <Route path='/menu/:id' element = {<><CategoryBar/> <MenuItems/></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
