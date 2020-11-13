import React, { useState } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import {RadarChartOutlined} from "@ant-design/icons";
import "./matrix.scss";
import MatriSquare from "../matrixSquare/index";
import MatrixColumn from "../matrixColumn/index";
import MatrixYipai from "../matrixYipai/index";
function Matrix(props) {
    console.log(props, 888)
    let [current, changenav] = useState(0);
    let navlist = [
        {
            id: 1,
            text: '社区广场',
            path: "/matrix/matrixSquare"
        },
        {
            id: 2,
            text: '专栏',
            path: "/matrix/matrixColumn"
        },
        {
            id: 3,
            text: '一派',
            path: "/matrix/matrixYipai"
        }
    ]

    // let [navlist,changenav] = useState(navlist)
    return (
        // <div>Matrix</div>
        <div className="matrixBox">
            {/* top */}
            <div className="matri_headerBox">
                <div className="top">
                    <p>Matrix 社区</p>
                    <div className="top_right">
                        <RadarChartOutlined/>
                        <span>成为作者</span>
                    </div>
                </div>
                <ul className="bottom">
                    {
                        navlist.map((item, index) => <li className={current == index ? "active" : ""} onClick={() => {
                            props.history.push(item.path)
                            changenav(current = index)
                        }} key={item.id}>{item.text}</li>)

                    }

                </ul>
            </div>
            {/* botto */}

            <Switch>
                <Route path='/matrix/matrixSquare' component={MatriSquare} />
                <Route path='/matrix/matrixColumn' component={MatrixColumn} />
                <Route path='/matrix/matrixYipai' component={MatrixYipai} />
                <Route path='/notfound' component={() => <div>404</div>} />
                <Redirect from='/matrix' to='/matrix/matrixSquare' exact />
                <Redirect to='/notfound' />
            </Switch>

        </div>

    )
}
Matrix = withRouter(Matrix);
export default Matrix