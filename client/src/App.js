import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Index from './components/pessoa/Index';
import Create from './components/pessoa/Create';
import Edit from './components/pessoa/Edit';
import AlertSnackbar from './components/layout/SnackBar';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <h1>Gerenciamento de pessoas</h1>
            </Grid>
            <Route exact path='/' component={Index} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/edit/:id' component={Edit} />
          </Grid>
          <AlertSnackbar />
        </Fragment>
      </Router>
    </Provider>

  );
};

export default App;