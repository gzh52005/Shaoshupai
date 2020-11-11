import React from "react";
import { withRouter } from 'react-router-dom';
import { Flex } from 'antd-mobile';
import { CodeSandboxOutlined, ProjectOutlined } from '@ant-design/icons';

import "./navtion.scss";

function Navtion(props) {
    let { nav, navChange } = props.navState;
    const YiPai = ({ className = 'navItem', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps}>
            <div className="yipai-navItem-content"></div>
            <p className="navItem-text">一派</p>
        </div>
    );

    const ProjectSelection = ({ className = 'navItem', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps}>
            <div className="projectSelection-navItem-content">
                <ProjectOutlined style={{ fontSize: 35 }} />
            </div>
            <p className="navItem-text">专题精选</p>
        </div>
    );

    const Matrix = ({ className = 'navItem', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps}>
            <div className="matrix-navItem-content">
                <CodeSandboxOutlined style={{ fontSize: 35 }} />
            </div>
            <p className="navItem-text">Matrix 社区</p>
        </div>
    );

    return (
        <div className="apphead-navtion" style={{ padding: '15px 0', textAlign: 'center' }}>
            <div className="flex-container" onClick={() => { navChange(nav = false) }}>
                <Flex>
                    <Flex.Item onClick={() => { props.history.push('/matrix') }}><Matrix /></Flex.Item>
                    <Flex.Item onClick={() => { props.history.push('/yipai') }}><YiPai /></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item onClick={() => { props.history.push('/projectselection') }}><ProjectSelection /></Flex.Item>
                    <Flex.Item></Flex.Item>
                </Flex>
            </div>
        </div>
    )
}

Navtion = withRouter(Navtion);

export default Navtion