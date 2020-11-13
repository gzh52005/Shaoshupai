import React,{useEffect,useRef,useCallback} from "react";
import {Logo,PhoneNumber,ForgetPassword,Button,PassWord} from "../form";

import "./reg.scss";

function Reg(props){
    useEffect(()=>{
        
    })

    // 记住密码
    let active = true;
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

    return (<div id="reg">
        <div id="main">
            <Logo />
            <div className="form-reg">
                <PhoneNumber />
                <PassWord props={props} placeholder={"昵称（2-15个字符，中英文，数字下划线）"}/>
                <PassWord props={props} placeholder={"密码（不少于6位）"}/>
                <PassWord props={props} placeholder={"再次输入密码"}/>
                <PassWord props={props} placeholder={"输入验证码"}/>
            </div>
            <div className="checkbox">
                <div className="remember" onClick={rememberPassword}>
                    <svg aria-hidden="true" className="remember-icon">
                        <use className="transit-icon" ref={remIcon} xlinkHref="#icon-yuan1"></use>
                    </svg>
                    <span ref={remPsw}>我已阅读并同意《<a style={{color: "#fd281a"}}>少数派用户协议</a>》</span>
                </div>
            </div>
            <div className="btn-area">
                <ForgetPassword>返回登录</ForgetPassword>
                <article>
                    <Button style={{color:"#fd281a"}}>注册</Button>
                </article>
            </div>
            <div className="message">
                注意：同一个手机号一小时内只能获取 5 条验证码，如果连续尝试数次都收不到验证码，请联系 feedback@sspai.com 处理
            </div>
        </div>
    </div>)
}

export default Reg;