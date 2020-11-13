import React from "react";
import {Logo,PhoneNumber,PassWord,ForgetPassword,Button} from "../form";

import "./forgetPhone.scss";

function ForgetPhone(props){
    return (
        <div id="forgetPhone">
            <div className="forgetPhone-box">
                <Logo />
                <article className="forgetPhone-form">
                    <PhoneNumber />
                    <PassWord props={props} placeholder="输入验证码"/>
                    <PassWord props={props} placeholder="输入新密码"/>
                    <PassWord props={props} placeholder="再次输入新密码"/>
                </article>
                <article className="find-psw">
                    <ForgetPassword>从邮箱找回密码</ForgetPassword>
                    <ForgetPassword style={{float:"right"}}>返回登录</ForgetPassword>
                </article>
                <article className="confirm-psw">
                    <Button>确认</Button>
                </article>
            </div>
        </div>
    )
}

export default ForgetPhone;