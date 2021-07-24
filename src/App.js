import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import SingleBook from './pages/SingleBook';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/book/:id" component={SingleBook} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>  
    </Router>
  );
}

export default App;