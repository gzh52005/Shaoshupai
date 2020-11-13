import React from "react"
import {withRouter} from "react-router-dom"

import { NumberOutlined, FontSizeOutlined } from "@ant-design/icons"

import YpButton from "../YpButton/index.jsx"

import "./YpperiodMain.scss"

function YpperiodMain(props) {
    const {btn2} = props
    return (
        <div className="periodMain">
            <div className="period">
                {
                    btn2?
                    <React.Fragment>
                        <FontSizeOutlined className="ti" style={{background: "#292525",color:"#58bc58"}} />
                        <span>往期讨论</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <NumberOutlined className="ti" style={{
                        background: "linear-gradient(180deg,#23b0ff,#23e5ff)"}} />
                        <span>往期话题</span>
                    </React.Fragment>
                }
            </div>
            <ul>
                <li className="lists">
                    <div className="lists_img" onClick={()=>{props.history.replace("/ypdetail")}}>
                        <div className="lists_imgsrc">
                            <img src="https://cdn.sspai.com/article/f978f413-2ec3-2785-b86f-6cd14be20ab9.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!640x440r/gravity/Center/crop/640x440/interlace/1" alt=""/>
                        </div>
                        <div className="lists_imgsrc_title">
                            <YpButton className="btn_small"><FontSizeOutlined style={{ marginRight: 6, color: "#58bc58" }} />讨论</YpButton>
                            <div className="lists_order">
                                <p>VOL.O17</p>
                                <h2>双十一你买了什么好东西？</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lists_avatar">
                        <div className="lists_avatar_img">
                            <div className="avatar">
                                <img src="https://cdn.sspai.com/2020/05/10/avatar/385b222277875a57e8f34fdb67258fa5.jpg" alt="" />
                            </div>
                            <div className="avatar">
                                <img src="https://cdn.sspai.com/2020/08/14/4ed7ad1f6dd43329995c795d6b03cd72.jpg" alt="" />
                            </div>
                            <div className="avatar">
                                <img src="https://cdn.sspai.com/attachment/origin/2017/02/08/366980.jpg" alt="" />
                            </div>
                            <span>86 位少数派已参与</span>
                        </div>
                    </div>
                </li>
                <li className="lists">
                    <div className="lists_img">
                        <div className="lists_imgsrc">
                            <img src="https://cdn.sspai.com/article/f978f413-2ec3-2785-b86f-6cd14be20ab9.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!640x440r/gravity/Center/crop/640x440/interlace/1" alt=""/>
                        </div>
                        <div className="lists_imgsrc_title">
                            <YpButton className="btn_small"><FontSizeOutlined style={{ marginRight: 6, color: "#58bc58" }} />讨论</YpButton>
                            <div className="lists_order">
                                <p>VOL.O17</p>
                                <h2>双十一你买了什么好东西？</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lists_avatar">
                        <div className="lists_avatar_img">
                            <div className="avatar">
                                <img src="https://cdn.sspai.com/2020/05/10/avatar/385b222277875a57e8f34fdb67258fa5.jpg" alt="" />
                            </div>
                            <div className="avatar">
                                <img src="https://cdn.sspai.com/2020/08/14/4ed7ad1f6dd43329995c795d6b03cd72.jpg" alt="" />
                            </div>
                            <div className="avatar">
                                <img src="https://cdn.sspai.com/attachment/origin/2017/02/08/366980.jpg" alt="" />
                            </div>
                            <span>86 位少数派已参与</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="loading">
                <YpButton className="btn_big" style={{ background: "#fff" }}>加载更多</YpButton>
            </div>
        </div>
    )
}

YpperiodMain=withRouter(YpperiodMain)

export default YpperiodMain