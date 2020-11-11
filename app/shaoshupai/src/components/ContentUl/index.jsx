import React from "react";

import "./contentui.scss";

function Contentul() {
    return (
        <div className="content-box">
            <ul className="content-ul">
                <li className="content-item-active">
                    <a href="javascript:;">
                        推荐
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        最热
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        应用推荐
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        生活方式
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        效率技巧
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contentul