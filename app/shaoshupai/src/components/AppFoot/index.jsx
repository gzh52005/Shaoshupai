import React from "react"

import {withRouter} from "react-router-dom"

// antdicon
import {WeiboOutlined,WechatOutlined,TwitterOutlined,WifiOutlined} from "@ant-design/icons"

// 样式
import "./AppFoot.scss"

// 静态资源
import AppLogo from "@/assets/AppLogo.png"
import AppLogo1 from "@/assets/shaoshupai.png"
import App from "../../App"

const footNav = [
    {id:1,title:"下载App"},
    {id:2,title:"联系我们"},
    {id:3,title:"商务合作"},
    {id:4,title:"成为作者"},
    {id:5,title:"关于我们"},
    {id:6,title:"用户协议"},
    {id:7,title:"常见问题"}
];

function AppFoot(props){
    
    // props = props.value;

    const bgcolor = props.location.pathname == "/yipai" || props.location.pathname == "/martrix" ? true : false

    return (
        <div className="AppFoot" style={bgcolor?{background:"#fff"}:{background:"#292525",color:'#fff'}}>
            <div className="AppContent">
                <div className="AppLogo">
                    <img src={bgcolor?AppLogo:AppLogo1} alt=""/>
                </div>
                <div className="AppIcon">
                    <WeiboOutlined />
                    <WechatOutlined />
                    <TwitterOutlined />
                    <WifiOutlined style={{transform:"rotateZ(45deg)",position:"relative",top:3}} />
                </div>
                <ul className="AppNav">
                    {
                        footNav.map(item=><li key={item.id} style={bgcolor?null:{color:'#fff'}}>{item.title}
                        </li>)
                    }
                </ul>
                <div className="footer-txt">
                    <p>© 2013-2020 少数派</p>
                    <p>粤ICP备09128966号-4 | CC BY-NC 4.0</p>
                </div>
            </div>
        </div>
    )
}

AppFoot = withRouter(AppFoot)

export default AppFoot