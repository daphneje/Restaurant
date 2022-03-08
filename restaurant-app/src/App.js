import React from 'react';
import {Main, MenuItems,SubMenuItem} from './screens'
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
    
            <Route path='/menu/:category' element = {<><CategoryBar/> <MenuItems/><SubMenuItem/></>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
