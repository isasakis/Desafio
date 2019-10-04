import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Index from './components/pessoa/Index';
import AlertSnackbar from './components/layout/SnackBar';
import Grid from '@material-ui/core/Grid';
import Create from './components/pessoa/Create';
import Edit from './components/pessoa/Edit';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
          <Index />
          <Grid item xs={12}>
          <Route exact path='/create' component={Create} />
          <Route exact path='/edit/:id' component={Edit} />
          </Grid>
          </Grid>
          <AlertSnackbar />
        </Fragment>
      </Router>
    </Provider>

  );
};

export default App;