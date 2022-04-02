import './index.css'
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Splash from './components/Splash';

function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Splash/>
        </Route>
        <Route path='/main'>
          <Main/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
