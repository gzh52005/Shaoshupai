import React,{useEffect} from "react";
import {Logo,ForgetPassword,Button,PassWord} from "../form";

import "./forgetEmail.scss";

function ForgetEmail(props){
    useEffect(()=>{
        const htmlHeight = getComputedStyle(document.documentElement).height;
        const forgetEmail = document.querySelector("#forgetEmail");
        forgetEmail.style.height = htmlHeight;
    },[])


    return (
        <div id="forgetEmail">
            <div className="Email-box">
                <Logo />
                <article className="Email-form">
                    <PassWord props={props} placeholder={"输入绑定邮箱"}/>
                </article>
                <article className="find-psw">
                    <ForgetPassword>从手机找回密码</ForgetPassword>
                    <ForgetPassword style={{float:"right"}}>返回登录</ForgetPassword>
                </article>
                <article className="confirm-psw">
                    <Button>确认</Button>
                </article>
            </div>
        </div>
    )
}

export default ForgetEmail;