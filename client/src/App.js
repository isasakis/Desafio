import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Create from './components/pessoa/Create';

const App = () => {
return (
  <Router>
    <Fragment>
      <Route exact path='/' component={Create} />
    </Fragment>
  </Router>

);
};

export default App;