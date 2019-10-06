import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Index from './components/pessoa/Index';
import Edit from './components/pessoa/Edit';
import AlertSnackbar from './components/layout/SnackBar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Index} />
          <Route exact path='/edit/:id' component={Edit} />
          <AlertSnackbar />
        </Fragment>
      </Router>
    </Provider>

  );
};

export default App;