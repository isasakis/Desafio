import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Index from './components/pessoa/Index';
import AlertSnackbar from './components/layout/SnackBar';

const App = () => {
return (
  <Provider store={store}>
    <Router>
    <Fragment>
      <Route exact path='/' component={Index} />
      <AlertSnackbar />
    </Fragment>
  </Router>
  </Provider>

);
};

export default App;