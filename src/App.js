import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Router basename={ process.env.PUBLIC_URL }>
        <Provider store={ store }>
          <div>
            <h1>Hello, TrybeWallet!</h1>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/carteira" component={ Wallet } />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
