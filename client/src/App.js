import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from"./pages/SearchBooks";
import Jumbotron from './components/Jumbotron ';
import './App.css';


function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Jumbotron />
    <Switch>
      <Route exact path="/" component={SearchBooks}/>
      <Route exact path="/saved" component={SaveBooks}/>
      <Route exact path="/saved/:id" component={SaveBooks}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
