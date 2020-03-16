import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Items from './components/Items';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About}/>
          <Route path="/news" exact component = {News}/>
          <Route path="/news/:id" component = {Items} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
