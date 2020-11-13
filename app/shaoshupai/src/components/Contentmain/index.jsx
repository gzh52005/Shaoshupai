import React from 'react';

import "./contentmain.scss";

function Contentmain(props) {
    return (
        <div className="content-main-box">
            <div className="content-main-text">
                <div className="content-main-imgBox">
                    <a style={{ display: "inline-block", width: '100%' }}>
                        <div className="card_img"></div>
                    </a>
                </div>
                <div className="content-main-title">
                    <a style={{ display: "inline-block", width: '100%' }}>
                        <div className="content-main-title-type">
                            <span>与次世代的第一次亲密接触——PlayStation 5 抢先上手体验</span>
                        </div>
                    </a>
                </div>
                <div className="content-main-author">
                    <div>
                        <a style={{ display: "inline-block", width: '100%' }}><img className="author-head" src="https://cdn.sspai.com/2020/05/10/avatar/26b466501e2c4937ef923668470b234f.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt="" /></a>
                    </div>
                    <div className="content-main-name">
                        <span>Linmi</span>
                    </div>
                </div>
            </div>
            {/* _______________________________________________________分割线 */}
        </div>
    )
}

export default Contentmain;