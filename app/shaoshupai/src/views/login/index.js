import React,{useCallback,useRef,useEffect,useState} from "react";
import {PhoneNumber,Logo,ForgetPassword,Button,PassWord} from "../form";

import "./login.scss";

function Login(props){
    // 滑块
    let dim = useRef(null);
    const move = useCallback(function(node, obj, callback, speed){
        clearInterval(node.timer);
        let middle = null;
        node.timer = setInterval(() => {
            let end = true;

            for (let attr in obj) {
                let target = parseInt(obj[attr]);
                if (attr == "opacity") {
                    middle = getComputedStyle(node).opacity * 100;
                } else {
                    middle = parseInt(getComputedStyle(node)[attr]);
                }               
                let speed = 5;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (attr === "opacity") {
                    middle += speed;
                    node.style[attr] = middle / 100;
                    node.style.filter = `alpha(${attr}=${middle})`;
                } else {
                    node.style[attr] = middle + speed + "px";
                }

                if (middle != target) {
                    end = false;
                }
            }

            if (end) {
                clearInterval(node.timer);

                if (callback) {
                    callback.call(node);
                }
            }
        }, speed)
    })
    useEffect(()=>{
        let timer = setInterval(()=>{
            dim.current.style.display = "block";
            move(dim.current,{left:260},function(){
                dim.current.style.left = 70*1 + "px";
                dim.current.style.display = "none";
            },20)
        },3500)

        return ()=>{
            // useEffect return回来的函数等效于销毁阶段的生命周期函数。
            clearInterval(timer);
        }
    })

    // 向右拖拽
    let verify = useRef(null);
    let dragRight = useRef(null);
    let dragRightBox = useRef(null);
    let right = useRef(null);
    let gou = useRef(null);
    let offsetX,offsetL;
    // let flag = true;
    const dragDown = useCallback(function(event){
        let e = event || window.event;
        let targetTouches = e.targetTouches[0];
        offsetX = targetTouches.clientX - e.target.offsetLeft;
    })
    const dragMove = useCallback(function(event){
        let e = event || window.event;
        let targetTouches = e.targetTouches[0];
        offsetL = targetTouches.clientX - offsetX;
        if(offsetL < 0){
            offsetL = 0;
        }
        if(offsetL >= (document.documentElement.clientWidth - e.target.offsetWidth - 40)){
            offsetL = (document.documentElement.clientWidth - e.target.offsetWidth - 40);
        }
        dragRight.current.style.left = offsetL + "px";
        dragRightBox.current.style.width = offsetL + "px";
    })
    const dragUp = useCallback(function(){
        if(offsetL >= (verify.current.clientWidth - dragRight.current.clientWidth)){
            dragRight.current.style.left = (document.documentElement.clientWidth - dragRight.current.offsetWidth - 40);
            dragRightBox.current.style.width = (document.documentElement.clientWidth - dragRightBox.current.offsetWidth - 40);
            dragRightBox.current.innerHTML = "验证通过";
            dragRightBox.current.style.zIndex = 25;
            dragRightBox.current.style.backgroundColor = "#F5F5F5";
            dragRight.current.style.backgroundColor = "#e5e5e5";
            right.current.style.display = "none";
            gou.current.style.display = "block";
        }else {
            dragRight.current.style.left = 0;
            dragRightBox.current.style.width = 0;
        }
    })

    return (<div id="login">
        <Logo props={props}/>
        <article className="form-box">
            <PhoneNumber />
            <PassWord props={props} placeholder={"密码"}/>
            <div className="verify" ref={verify}>
                <div className="text-box">
                    <div style={{width:180,height:22}}>
                        <span style={{left: 84,top: 22}}>请按住滑块，拖动至最右</span>
                        <span className="iconfont icon-shouzhixuanzhong right-icon" style={{right: 68,top: 18}}></span>
                        <i ref={dim}></i>
                    </div>
                </div>
                <div className="drag-shade" >
                    <div ref={dragRightBox} className="pass-box">
                    </div>
                    <div className="drag-right" ref={dragRight} onTouchStart={dragDown} onTouchEnd={dragUp} onTouchMove={dragMove}>
                        <span ref={right} className="iconfont icon-right" style={{color:"white"}}></span>
                        <span ref={gou} className="iconfont icon-dagou1" style={{color:"#76C61D",display:"none"}}></span>
                    </div>
                </div>
            </div>
        </article>
        <article className="forget">
            <ForgetPassword style={{marginLeft: 10}}>忘记密码？</ForgetPassword>
            <div className="regLogin">
                <Button>注册</Button>
                <Button style={{marginLeft:10}} className={"active"}>登录</Button>
            </div>
        </article>
        <article className="line"></article>
        <article className="login-mode">
            <p>其他登录方式</p>
            <div>
                <a>
                    <svg className="icon login-icon" aria-hidden="true">
                        <use xlinkHref="#icon-youxiang"></use>
                    </svg>
                    </a>
                <a>
                    <svg className="icon login-icon" aria-hidden="true">
                        <use xlinkHref="#icon-weixin"></use>
                    </svg>
                </a>
                <a>
                    <svg className="icon login-icon" aria-hidden="true">
                        <use xlinkHref="#icon-weibo"></use>
                    </svg>
                </a>
            </div>
        </article>
    </div>)
}

export default Login;