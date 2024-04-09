import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Cadastro from './cadastro/cadastro';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
}

export default App;
