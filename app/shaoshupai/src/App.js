import React from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';

import Apphead from './views/Apphead';
import Appbody from './views/Appbody';
import Matrix from './views/matrix';
import Yipai from './views/yipai';
import ProjectSelection from './views/projectSelection';

import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';

function App(props) {
  return (
    <div className="App">

      {/* {
        props.location.pathname === '/login' || props.location.pathname === '/projectselection' ? null : <Apphead />
      } */}
      <Apphead />

      <div style={{ paddingBottom: '516px' }}>
        <Switch>
          <Route path='/home' component={Appbody} />
          <Route path='/matrix' component={Matrix} />
          <Route path='/yipai' component={Yipai} />
          <Route path='/projectselection' component={ProjectSelection} />
          <Route path='/notfound' component={() => <div>404</div>} />
          <Redirect from='/' to='/home' exact />
          <Redirect to='/notfound' />
        </Switch>
      </div>
    </div>
  );
}

App = withRouter(App);
export default App;
