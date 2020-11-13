import React,{useEffect} from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';

// 组件添加区
import Apphead from './views/Apphead/index.jsx';
import Appbody from './views/Appbody/index.jsx';
import Matrix from './views/matrix/index.jsx';
import Yipai from './views/yipai/index.jsx';
import ProjectSelection from './views/projectSelection/index.jsx';
import Login from './views/login/';
import Reg from './views/reg/';

import YpDetail from './views/YpDetail'

import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';

function App(props) {

  useEffect(() => {
    if (document) {
      if (document.documentElement || document.body) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
      if (document.getElementsByClassName('App')[0]) {
        document.getElementsByClassName('App')[0].scrollTop = 0;
      }
    }
  }, [props.history.location.pathname]);

  return (
    <div className="App">

      {
        props.location.pathname === '/yipai' || props.location.pathname === '/projectselection' || props.location.pathname === '/login' || props.location.pathname === '/reg' ? null : <Apphead />
      }

          <Switch>
            <Route path='/home' component={Appbody} />
            <Route path='/matrix' component={Matrix} />
            <Route path='/yipai' component={Yipai} />
            <Route path='/ypdetail' component={YpDetail} />
            <Route path='/projectselection' component={ProjectSelection} />
            <Route path='/login' component={Login}/>
            <Route path='/reg' component={Reg}/>
            <Route path='/notfound' component={() => <div>404</div>} />
            <Redirect from='/' to='/home' exact />
            <Redirect to='/notfound' />
          </Switch>
    </div>
  );
}

App = withRouter(App);
export default App;
