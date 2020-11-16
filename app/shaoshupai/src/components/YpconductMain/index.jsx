import React from "react"
import {withRouter} from "react-router-dom"

import {PlayCircleOutlined,FontSizeOutlined,RightOutlined} from "@ant-design/icons"

import YpButton from "../YpButton/index.jsx"

import "./YpconductMain.scss"

function YpconductMain(props){
    const {conduct} = props
    return (
         <div className="conductMain">
            <div className="conduct">
                <PlayCircleOutlined className="see" />
                <span>正在进行</span>
            </div>
            <div className="conduct_content"  onClick={()=>{props.history.push("/ypdetail")}}>
                <div className="conduct_img">
                    <div className="conduct_imgsrc">
                        <img src={conduct.banner} alt=""/>
                    </div>
                    <div className="conduct_imgsrc_title">
                        <YpButton className="btn_small"><FontSizeOutlined style={{marginRight: 6,color:"#58bc58"}} />讨论</YpButton>
                        <div className="order">
                            <p>VOL.{conduct.vol}</p>
                            <h2>{conduct.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="conduct_title" style={{background:"#fff"}}>
                    <div className="title" dangerouslySetInnerHTML={{ __html:conduct.body}}>
                    </div>
                    <div className="avatar_img">
                        {
                            conduct.participation_users.map(item=>{
                                if(item.avatar){
                                    return <div className="avatar" key={item.nickname}>
                                    <img src={item.avatar} alt=""/>
                                </div>
                                }else{
                                    return null
                                }
                            })
                        }
                        <span>{conduct?conduct.participations_count:null} 位少数派已参与</span>
                    </div>
                    <YpButton className="btn_big">现在参与<RightOutlined style={{fontSize:14,marginLeft:8}} /></YpButton>
                </div>
            </div>
        </div>
    )
}

YpconductMain=withRouter(YpconductMain)

export default YpconductMain