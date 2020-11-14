import React from "react";
import "./matrixColumn.scss";
import { RightOutlined } from "@ant-design/icons";
import AppFoot from "../../components/AppFoot/index";
function MatrixColumn() {
    return (
        <div>
            <ul className="columnBox">
                <li className="columnCase">
                    <div className="columnCase_img"></div>
                    <div className="columnCase_text">
                        <i>开发者说</i>
                        <i>337人关注</i>
                    </div>
                    <RightOutlined />
                </li>
                <li className="columnCase">
                    <div className="columnCase_img"></div>
                    <div className="columnCase_text">
                        <i>开发者说</i>
                        <i>337人关注</i>
                    </div>
                    <RightOutlined />
                </li>
                <li className="columnCase">
                    <div className="columnCase_img"></div>
                    <div className="columnCase_text">
                        <i>开发者说</i>
                        <i>337人关注</i>
                    </div>
                    <RightOutlined />
                </li>
                <li className="columnCase">
                    <div className="columnCase_img"></div>
                    <div className="columnCase_text">
                        <i>开发者说</i>
                        <i>337人关注</i>
                    </div>
                    <RightOutlined />
                </li>
                <li className="columnCase">
                    <div className="columnCase_img"></div>
                    <div className="columnCase_text">
                        <i>开发者说</i>
                        <i>337人关注</i>
                    </div>
                    <RightOutlined />
                </li>
            </ul>
            <div className="more">加载更多</div>
            <AppFoot/>
        </div>
    )
}

export default MatrixColumn;