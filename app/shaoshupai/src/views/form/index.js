import React,{useState,useRef,useCallback} from "react";
import "./from.scss";

// 聚焦高亮
const focusActive = (e)=>{
    e.target.parentNode.parentNode.classList.add("focus-active");
}
const blurActive = (e)=>{
    e.target.parentNode.parentNode.classList.remove("focus-active");
}


// 电话组件
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


export {PhoneNumber,Logo};