import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Edit from './pages/Edit';

// import { Container } from './styles';

const src: React.FC = () => {
  return(
      <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/profile" component={Edit} />
      </Switch>
  );
}

export default src;