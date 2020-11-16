import React,{ useState,useEffect,useRef } from 'react';
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

import request from "@/utils/request"


function Yipai(){

    let [btn1,changeBtn1] = useState(true)
    let [btn2,changeBtn2] = useState(false)
    let [yipaiData,changeData] = useState([])
    let [page,changeSize] = useState(1)
    let [scroll,changeScroll] = useState(0)

    const YpGetData =async ()=> {
        if(yipaiData.length<17){
            let res = await request.get("/yipai/paging",{
                page,
                pagesize:5
            });
            changeData(yipaiData.concat(res.data));
            window.scrollTo({top:scroll});
        }else{
            changeSize(page=4);
        }
    }
    
    useEffect(()=>{ 
        YpGetData()
    },[page])

    return yipaiData[0]?(
        <div className="yipai">
            <div className="ypHead">
                <div className="square">
                    <img src={yipaiLogo} alt=""/>
                    <span>话题广场</span>
                </div>
                <div className="ypNav">
                    <YpButton className="btn" onClick={()=>{
                        changeBtn1(btn1=true);changeBtn2(btn2=false)
                    }} style={btn1?{background:"#292525",color:"#fff",marginRight: 20}:{marginRight: 20}}><NumberOutlined style={btn1?{marginRight: 4,color:"#23b0ff"}:{marginRight: 4}} />全部</YpButton>
                    <YpButton className="btn" onClick={()=>{
                        changeBtn1(btn1=false);changeBtn2(btn2=true)
                    }} style={btn2?{background:"#292525",color:"#fff"}:null}><FontSizeOutlined style={btn2?{marginRight: 4,color:"#06e602"}:{marginRight: 4}} />讨论</YpButton>
                </div>
            </div>
            <div className="yqMain">
                {
                    btn1?<YpconductMain conduct={yipaiData[0]} />:null
                }
                <YpperiodMain periodData={btn1?yipaiData.slice(1):yipaiData}  btn2={btn2} />
                <div className="loading" >
                    <YpButton className="btn_big" style={{ background: "#fff" }} onClick={()=>{
                        changeSize(page+1);
                        changeScroll(scroll=parseInt(window.scrollY))
                    }} disabled={yipaiData.length==17?true:false}>{yipaiData.length==17?"没有更多了":"加载更多"}</YpButton>
                </div>
            </div>
            <div className="ypFoot">
                <AppFoot />
            </div>
        </div>
    )
    :
    null
}

export default Yipai