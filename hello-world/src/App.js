import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Index, Books, Electronics } from './pages';
import { Navbar } from './components';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* Put Navbar Here */}
        <Navbar />

        {/* The corresponding component will show here if the current URL matches the path */}
        {/* <Route path="/" exact component={Index} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} /> */}

         {/* Refactor for using routes config */}
         {routes.map((route, i) => {
            const { path, exact, routes } = route;
            return (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={(routeProps) => (
                  <route.component routes={routes} {...routeProps} />
                )}
              />
            );
          })}
      </div>
    );
  }
}

export default App;