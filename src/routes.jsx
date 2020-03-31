import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HelloWord from '../src/components/helloWord';
import About from '../src/components/about';
import ErroView from '../src/components/erroView'
import LoginContext from '../src/containers/loginContext'

 class Routes extends React.Component {

  render() {
    return (
      <React.Fragment>
          <Switch>
              <Route exact path="/" component={HelloWord}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/logOut" component={LoginContext}/>
              <Route  component={ErroView} />
          </Switch>
      </React.Fragment>
    )
  }
 }
 export default Routes;

