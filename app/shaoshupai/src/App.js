import React from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';

// 组件添加区
import Apphead from './views/Apphead/index.jsx';
import Appbody from './views/Appbody/index.jsx';
import Matrix from './views/matrix/index.jsx';
import Yipai from './views/yipai/index.jsx';
import ProjectSelection from './views/projectSelection/index.jsx';
import Login from './views/login/';
import Reg from './views/reg/';
import ForgetPhone from "./views/forgetPsw/forgetPhone.js";
import ForgerEmail from "./views/forgetPsw/forgetEmail.js"

// 添加样式
import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';

function App(props) {
  return (
    <div className="App">

      {
        props.location.pathname === '/login' || props.location.pathname === '/reg' || props.location.pathname === '/forget/phone' || props.location.pathname === '/forget/email' ? null : <Apphead />
      }

      <div>
          <Switch>
            <Route path='/home' component={Appbody} />
            <Route path='/matrix' component={Matrix} />
            <Route path='/yipai' component={Yipai} />
            <Route path='/projectselection' component={ProjectSelection} />
            <Route path='/login' component={Login}/>
            <Route path='/reg' component={Reg}/>
            <Route path='/forget/phone' component={ForgetPhone}/>
            <Route path='/forget/email' component={ForgerEmail}/>
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
