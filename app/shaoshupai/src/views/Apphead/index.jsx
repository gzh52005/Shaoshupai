// 引入模块
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Button } from 'antd-mobile';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
// 引入静态资源
import "./apphead.scss";
import imgLogo from "../../assets/shaoshupai.png";
// 引入组件
import SearchBox from '../../components/Apphead-searchBox/index.jsx';
import Navtion from '../../components/Apphead-Navtion/index.jsx';

function Apphead(props) {
    const [nav, navChange] = useState(false);
    const [find, findChange] = useState(false);

    return (
        <header className="appheader">
            <div className="appheader-box">
                <NavBar
                    leftContent={<img src={imgLogo}
                        alt="" style={{ height: 24, }} onClick={() => { props.history.push('/home') }} />}
                    rightContent={
                        <div className="appheader-userbox">
                            <SearchOutlined onClick={() => { findChange(!find && !nav) }} style={{ marginRight: '20px' }} />
                            <MenuOutlined onClick={() => { navChange(!find && !nav) }} style={{ marginRight: '20px' }} />
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