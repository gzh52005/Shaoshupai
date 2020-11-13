import React from 'react';
import moment from 'moment';

import "./datenewspaper.scss"

function DateNewspaper() {
    // let 
    return (
        <div className="news-content-box">
            <div className="news-content-list">
                <div className="pai-title">
                    <a>
                        <div className="title">
                            派早报🎉
                        </div>
                    </a>
                    <div className="days">
                        <div className="now-time">{
                            moment(new Date()).format('L')
                        }</div>
                        <div>{
                            moment(new Date()).format('dddd')
                        }</div>
                    </div>
                </div>
                <div className="pai-cotent">
                    <div className="pai-cotent-item-box">
                        <div className="pai-cotent-item">
                            <div className="pai-cotent-item-num">
                                01
                                </div>
                            <a>
                                <div className="pai-cotent-item-text">
                                    徕卡推出 Q2 Monochrom 全画幅黑白相机
                                    </div>
                            </a>
                        </div>
                        {/* ------------------------------------------分割线------------------------------------------ */}
                        <div className="pai-cotent-item">
                            <div className="pai-cotent-item-num">
                                01
                                </div>
                            <a>
                                <div className="pai-cotent-item-text">
                                    徕卡推出 Q2 Monochrom 全画幅黑白相机
                                    </div>
                            </a>
                        </div>
                        <div className="pai-cotent-item">
                            <div className="pai-cotent-item-num">
                                01
                                </div>
                            <a>
                                <div className="pai-cotent-item-text">
                                    徕卡推出 Q2 Monochrom 全画幅黑白相机
                                </div>
                            </a>
                        </div>
                        <div className="pai-cotent-item">
                            <div className="pai-cotent-item-num">
                                01
                            </div>
                            <a>
                                <div className="pai-cotent-item-text">
                                    徕卡推出 Q2 Monochrom 全画幅黑白相机
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pai-link">
                    <a style={{color:'#d71a1b'}}>阅读全篇</a>
                </div>
            </div>
        </div>
    )
}

export default DateNewspaper;