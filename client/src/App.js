import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Create from './components/pessoa/Create';

const App = () => {
return (
  <Provider store={store}>
    <Router>
    <Fragment>
      <Route exact path='/' component={Create} />
    </Fragment>
  </Router>
  </Provider>

);
};

export default App;