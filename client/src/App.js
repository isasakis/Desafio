import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Pessoas from './components/pessoa/Index';


const App = () => {
return (
  <Provider store={store}>
    <Router>
    <Fragment>
      <Route exact path='/' component={Pessoas} />
    </Fragment>
  </Router>
  </Provider>

);
};

export default App;