import React from 'react';
import {NumberOutlined,FontSizeOutlined,PlayCircleOutlined} from "@ant-design/icons"

// 引入图片
import yipaiLogo from "../../assets/yipaicontent.png";

// 引入样式
import "./yipai.scss"


function Yipai(){

    return(
        <div>
            <div className="ypHead">
                <div className="square">
                    <img src={yipaiLogo} alt=""/>
                    <span>话题广场</span>
                </div>
                <div className="ypNav">
                    <button className="btnActive"><NumberOutlined style={{marginRight: 6,color: "#23b0ff"}} />全部</button>
                    <button><FontSizeOutlined style={{marginRight: 6}} />讨论</button>
                </div>
            </div>
            <div className="yqMain">
                <div className="conductMain">
                    <div className="conduct">
                        <PlayCircleOutlined className="see" />
                        <span>正在进行</span>
                    </div>
                    <div className="conduct_content">
                        <div className="conduct_img">
                            <button><FontSizeOutlined style={{marginRight: 6}} />讨论</button>
                            <p>VOL.O17</p>
                            <h2>双十一你买了什么好东西？</h2>
                        </div>
                    </div>
                </div>
                <div className="periodMain">
                    <div className="period">
                        <NumberOutlined className="ti" />
                        <span>往期话题</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yipai