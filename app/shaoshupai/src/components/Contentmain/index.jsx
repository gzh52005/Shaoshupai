import React from 'react';
import {withRouter} from "react-router-dom";

import "./contentmain.scss";

function Contentmain(props) {
    return (
        <div className="content-main-box">
            <div className="content-main-text">
                <div className="content-main-imgBox">
                    <a onClick={()=>{props.history.push('/appdetails')}} style={{ display: "inline-block", width: '100%' }}>
                        <div className="card_img" style={{ background: `linear-gradient(180deg,transparent,#000),url('${props.dataList.banner}')`, backgroundSize: '100%' }}></div>
                    </a>
                </div>
                <div className="content-main-title">
                    <a style={{ display: "inline-block", width: '100%' }}>
                        <div className="content-main-title-type">
                            <span>{props.dataList.title}</span>
                        </div>
                    </a>
                </div>
                <div className="content-main-author">
                    <div>
                        <a style={{ display: "inline-block", width: '100%' }}><img className="author-head" src={`${props.dataList.author.avatar}`} alt="" /></a>
                    </div>
                    <div className="content-main-name">
                        <span>{props.dataList.author.nickname}</span>
                    </div>
                </div>
            </div>
            {/* _______________________________________________________分割线 */}
        </div>
    )
}


Contentmain = withRouter(Contentmain)
export default Contentmain;