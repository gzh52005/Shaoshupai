// 引入模块
import React, { useState,useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Button } from 'antd-mobile';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { CodeSandboxOutlined } from '@ant-design/icons';
// 引入静态资源
import "./apphead.scss";
import imgLogo from "../../assets/shaoshupai.png";
import yipaiLogo from "../../assets/yipaicontent.png";
// 引入组件
import SearchBox from '../../components/Apphead-searchBox';
import Navtion from '../../components/Apphead-Navtion';

function Apphead(props) {
    const [nav, navChange] = useState(false);
    const [find, findChange] = useState(false);
    
    console.log("Apphead=",props);

    const appheader = props.location.pathname === '/yipai' || props.location.pathname === '/matrix' ? "appheader_white" : "appheader";
    console.log(appheader);

    return (
        <header className={appheader}>
            <div className="appheader-box">
                <NavBar
                    style={{background:"transparent"}}
                    leftContent={
                        <React.Fragment>
                            <img src={imgLogo}
                            alt="" style={{ height: 24, }} onClick={() => { props.history.push('/home') }} />
                            {
                                props.location.pathname === '/yipai'? <img src={yipaiLogo} style={{height:26,left:50}} /> : null
                            }
                            {
                                props.location.pathname === '/matrix'?<CodeSandboxOutlined style={{color:"#000",fontSize: 24,marginLeft: 36}} /> : null
                            }
                            
                        </React.Fragment>
                    }
                    rightContent={
                        <div className="appheader-userbox">
                            <SearchOutlined onClick={() => { findChange(!find && !nav) }} style={props.location.pathname === '/yipai' || props.location.pathname === '/matrix'?{ marginRight: '20px', color:"#333"}:{ marginRight: '20px', color:"#fff"}} />
                            <MenuOutlined onClick={() => { navChange(!find && !nav) }} style={props.location.pathname === '/yipai' || props.location.pathname === '/matrix'?{ marginRight: '20px', color:"#333"}:{ marginRight: '20px', color:"#fff"}} />
                            <Button
                                size="small"
                                style={{ float: 'right', borderRadius: "24px", padding: '5px 12px', background: '#f5f5f5', color: '#655e5e', fontSize: '14px', lineHeight: '20px' }}
                            >
                                登录
                        </Button>
                        </div>}
                    className="appheader-nav"
                >
                </NavBar>
                {/* 搜索栏 */}
                {find ? <SearchBox /> : null}
                {/* 导航栏 */}
                {nav ? <Navtion navState={{nav,navChange}} /> : null}

            </div>
        </header >
    )
}

Apphead = withRouter(Apphead);

export default Apphead