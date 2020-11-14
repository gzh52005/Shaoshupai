import React from 'react';
import moment from 'moment';

import "./datenewspaper.scss"

function DateNewspaper(props) {
    // console.log(props)
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

                        
                        {
                            props.itemList.morning_paper_title.map((item,index) => {
                                return (<div key={index + 1} className="pai-cotent-item">
                                            <div className="pai-cotent-item-num">
                                                0{index + 1}
                                            </div>
                                            <a>
                                                <div className="pai-cotent-item-text">
                                                    {item}
                                                </div>
                                            </a>
                                        </div>)
                            })
                        }
                        
                        {/* ------------------------------------------分割线------------------------------------------ */}
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