import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Index, Books, Electronics } from './pages';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/" exact component={Index} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
      </div>
    );
  }
}

export default App;