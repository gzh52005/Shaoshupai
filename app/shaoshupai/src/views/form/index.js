import React,{useState,useRef,useCallback, useEffect} from "react";
import "./from.scss";


// 公共变量、函数
const focusActive = (e)=>{
    e.target.parentNode.parentNode.classList.add("focus-active");
}
const blurActive = (e)=>{
    e.target.parentNode.parentNode.classList.remove("focus-active");
}
let active = true;


// 手机号码
function PhoneNumber(){
    let [state,changeState] = useState(true);

    // 选择地区。
    const iconXia = useRef(null);
    const areaSelect = useRef(null);
    const selectArea = useCallback(()=>{
        if(state){
            iconXia.current.style.transform = "rotate(180deg)";
            areaSelect.current.style.display = "block"
            setTimeout(()=>{
                areaSelect.current.style.height = "278px";
            },0)
        }else {
            iconXia.current.style.transform = "rotate(0deg)";
            areaSelect.current.style.height = "0px";
            setTimeout(()=>{
                areaSelect.current.style.display = "none";
            },150)
        }
        changeState(state = !state);
    })

    return (<div className="phone">
        <div className="area-box" onClick={selectArea}>
            <input type="text" readOnly="readonly" placeholder="+ 86" />
            <span ref={iconXia} className="area-list-box">
                <svg className="area-list" aria-hidden="true">
                    <use xlinkHref="#icon-xia"></use>
                </svg>
            </span>
        </div>
        <div className="number-box">
            <input onFocus={focusActive} onBlur={blurActive} type="text" placeholder="手机号码"/>
        </div>
        <div ref={areaSelect} className="area-select">
            <div className="area-select-box">
                <ul>
                    <li>中国</li>
                    <li>美国</li>
                    <li>中国</li>
                    <li>美国</li>
                    <li>中国</li>
                    <li>美国</li>
                    <li>中国</li>
                    <li>美国</li>
                    <li>中国</li>
                    <li>美国</li>
                </ul>
            </div>
        </div>
    </div>)
}


// 密码类相关组件
function PassWord(props){
    console.log(props);

    // 判断是否显示记住密码按钮
    const pathname = props.props.location.pathname;
    let pathConfirm = pathname === "/login";

    // 记住密码
    let remIcon = useRef(null);
    let remPsw = useRef(null);
    const rememberPassword = useCallback(()=>{
        if(active){
            remIcon.current.setAttribute("xlink:href","#icon-dagou");
            remPsw.current.style.color = "#292525";
        }else {
            remIcon.current.setAttribute("xlink:href","#icon-yuan1");
            remPsw.current.style.color = "#8e8787";
        }
        active = !active;
    })

    return (
        <div className="password">
            <div className="psw-box" style={{width:pathConfirm?"65%":props.placeholder==="输入验证码"?"65%":"100%"}}>
                <input onFocus={focusActive} onBlur={blurActive} type="password" placeholder={props.placeholder} />
            </div>
            {
                pathConfirm?<div className="remember-box">
                <div className="remember" onClick={rememberPassword}>
                    <svg aria-hidden="true" className="remember-icon">
                        <use className="transit-icon" ref={remIcon} xlinkHref="#icon-yuan1"></use>
                    </svg>
                    <span ref={remPsw}>记住密码</span>
                </div>
            </div>:props.placeholder==="输入验证码"?<div className="send-verify"><Button>发送验证码</Button></div>:null
            }
        </div>
    )
}


// Logo组件
function Logo(props){
    const goHome = useCallback(()=>{
        props.props.history.push("/home");
    })

    return (<div>
        <article className="logo">
            <a onClick={goHome}><div></div></a>
        </article>
    </div>)
}


// 忘记密码
function ForgetPassword(props){
    return (<div className="forget-psw"><span style={props.style}>{props.children}</span></div>)
}


// 登录注册按钮    
function Button(props){
    return (<React.Fragment>
    <button className={`btn ${props.className}`} style={props.style}>{props.children}</button>
</React.Fragment>)
}


export {PhoneNumber,Logo,ForgetPassword,Button,PassWord};