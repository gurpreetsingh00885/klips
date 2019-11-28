import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Board from "./components/Board";
import Sender from "./components/Sender";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/sender" component={Sender} />
          <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
