import React from "react"
import { ExportOutlined } from "@ant-design/icons"

import "./YpDetail.scss"

import speak from "@/assets/ypDetailspeak.png"


function YpDetail(props) {

    return (
        <div className="ypDetail">
            <div className="ypDetailHead">
                <div className="detailTitle">
                    <div className="identifier">VOL.017</div>
                    <h2>双十一你买了什么好东西?</h2>
                    <div className="share">
                        <ExportOutlined />
                        <div>分享</div>
                        <div>86 位少数派已参与</div>
                        <div className="avatarLsits">
                            <div className="avatarLsit">
                                <img src="https://cdn.sspai.com/2020/05/10/avatar/385b222277875a57e8f34fdb67258fa5.jpg" alt="" />
                            </div>
                            <div className="avatarLsit">
                                <img src="https://cdn.sspai.com/2020/08/14/4ed7ad1f6dd43329995c795d6b03cd72.jpg" alt="" />
                            </div>
                            <div className="avatarLsit">
                                <img src="https://cdn.sspai.com/attachment/origin/2017/02/08/366980.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="detailEdit">本期坐班编辑</div>
                    <div className="leader">
                        <img src="https://cdn.sspai.com/2019/11/14/5e970b7834fd522df7520bb00ea9a362.gif?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt="" />
                        <span>路中南</span>
                    </div>
                    <div className="btn_img">
                        <img src={speak} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YpDetail