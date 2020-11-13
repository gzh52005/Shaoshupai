import React from "react"
import {withRouter} from "react-router-dom"

import {PlayCircleOutlined,FontSizeOutlined,RightOutlined} from "@ant-design/icons"

import YpButton from "../YpButton/index.jsx"

import "./YpconductMain.scss"

function YpconductMain(props){
    return (
         <div className="conductMain">
            <div className="conduct">
                <PlayCircleOutlined className="see" />
                <span>正在进行</span>
            </div>
            <div className="conduct_content"  onClick={()=>{props.history.push("/ypdetail")}}>
                <div className="conduct_img">
                    <div className="conduct_imgsrc">
                        <img src="https://cdn.sspai.com/article/7fc80cdf-0f1e-f5eb-c7c1-1707615e9c83.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!640x440r/gravity/Center/crop/640x440/interlace/1" alt=""/>
                    </div>
                    <div className="conduct_imgsrc_title">
                        <YpButton className="btn_small"><FontSizeOutlined style={{marginRight: 6,color:"#58bc58"}} />讨论</YpButton>
                        <div className="order">
                            <p>VOL.O17</p>
                            <h2>双十一你买了什么好东西？</h2>
                        </div>
                    </div>
                </div>
                <div className="conduct_title" style={{background:"#fff"}}>
                    <div className="title">
                        <p>被人为打造的大型购物节，在今年与直播购物相结合，为了吸人眼球似乎能够拿出比往年更让人心动的价格。如果碰到刚好想买/需要的物品，肯定会手指猛点下单</p>
                    </div>
                    <div className="avatar_img">
                        <div className="avatar">
                            <img src="https://cdn.sspai.com/2020/05/10/avatar/385b222277875a57e8f34fdb67258fa5.jpg" alt=""/>
                        </div>
                        <div className="avatar">
                            <img src="https://cdn.sspai.com/2020/08/14/4ed7ad1f6dd43329995c795d6b03cd72.jpg" alt=""/>
                        </div>
                        <div className="avatar">
                            <img src="https://cdn.sspai.com/attachment/origin/2017/02/08/366980.jpg" alt=""/>             
                        </div>
                        <span>86 位少数派已参与</span>
                    </div>
                    <YpButton className="btn_big">现在参与<RightOutlined style={{fontSize:14,marginLeft:8}} /></YpButton>
                </div>
            </div>
        </div>
    )
}

YpconductMain=withRouter(YpconductMain)

export default YpconductMain