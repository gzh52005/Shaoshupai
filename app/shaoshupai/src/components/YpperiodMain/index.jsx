import React from "react"
import {withRouter} from "react-router-dom"

import { NumberOutlined, FontSizeOutlined } from "@ant-design/icons"

import YpButton from "../YpButton/index.jsx"

import "./YpperiodMain.scss"

function YpperiodMain(props) {
    const {btn2,periodData} = props
    // console.log(periodData);
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
                {
                    periodData.map(item=><li className="lists" key={item._id}>
                    <div className="lists_img" onClick={()=>{props.history.push("/ypdetail")}}>
                        <div className="lists_imgsrc">
                            <img src={item.banner} alt=""/>
                        </div>
                        <div className="lists_imgsrc_title">
                            <YpButton className="btn_small"><FontSizeOutlined style={{ marginRight: 6, color: "#58bc58" }} />讨论</YpButton>
                            <div className="lists_order">
                                <p>VOL.{item.vol}</p>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lists_avatar">
                        <div className="lists_avatar_img">
                            {
                                item.participation_users.map(itemUser=>{
                                    if(itemUser.avatar){
                                        return <div className="avatar" key={itemUser.nickname}>
                                        <img src={itemUser.avatar} alt="" />
                                    </div>
                                    }else{
                                        return null
                                    }
                                })
                            }
                            <span>{item.participations_count} 位少数派已参与</span>
                        </div>
                    </div>
                </li>)
                }
                
            </ul>
        </div>
    )
}

YpperiodMain=withRouter(YpperiodMain)

export default YpperiodMain