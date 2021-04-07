import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Demo1 from './d1';
import Demo2 from './d2';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/demo1" component={Demo1} />
          <Route path="/demo2" component={Demo2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
