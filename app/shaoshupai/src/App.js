import React from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';

import Apphead from './views/Apphead/index.jsx';
import Appbody from './views/Appbody/index.jsx';
import Matrix from './views/matrix/index.jsx';
import Yipai from './views/yipai/index.jsx';
import ProjectSelection from './views/projectSelection/index.jsx';

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
        <div>
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
    </div>
  );
}

App = withRouter(App);
export default App;
