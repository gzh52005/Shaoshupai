import React,{ useState } from 'react';
import {NumberOutlined,FontSizeOutlined} from "@ant-design/icons"

// 引入图片
import yipaiLogo from "../../assets/yipaicontent.png";

// 引入样式
import "./yipai.scss"

// 引入组件
import YpconductMain from "@/components/YpconductMain/index.jsx"
import YpButton from "@/components/YpButton/index.jsx"
import AppFoot from "@/components/AppFoot/index.jsx"
import YpperiodMain from "@/components/YpperiodMain/index.jsx"


function Yipai(props){

    let [btn1,changeBtn1] = useState(true)
    let [btn2,changeBtn2] = useState(false)

    return( 
        <div className="yipai">
            <div className="ypHead">
                <div className="square">
                    <img src={yipaiLogo} alt=""/>
                    <span>话题广场</span>
                </div>
                <div className="ypNav">
                    <YpButton className="btn" onClick={()=>{
                        changeBtn1(btn1=true);changeBtn2(btn2=false)
                    }} style={btn1?{background:"#292525",color:"#fff"}:null}><NumberOutlined style={btn1?{marginRight: 4,color:"#23b0ff"}:{marginRight: 4}} />全部</YpButton>
                    <YpButton className="btn" onClick={()=>{
                        changeBtn1(btn1=false);changeBtn2(btn2=true)
                    }} style={btn2?{background:"#292525",color:"#fff"}:null}><FontSizeOutlined style={btn2?{marginRight: 4,color:"#06e602"}:{marginRight: 4}} />讨论</YpButton>
                </div>
            </div>
            <div className="yqMain">
                {
                    btn1?<YpconductMain props={props} />:null
                }
                <YpperiodMain btn2={btn2} />
            </div>
            <div className="ypFoot">
                <AppFoot />
            </div>
        </div>
    )
}

export default Yipai