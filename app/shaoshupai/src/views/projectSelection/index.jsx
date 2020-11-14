import React, { useState, useEffect } from 'react';

import "./projectSelection.scss";

import Topicmain from "../../components/Topicmain";
import Appfoot from "../../components/AppFoot";

import request from "../../utils/request";

function ProjectSelection() {
    let navtion = [
        {
            id: 1,
            name: '全部',
            key: 'all'
        }, {
            id: 2,
            name: '硬件',
            key: 'hardware'
        }, {
            id: 3,
            name: '效率',
            key: 'efficiency'
        }, {
            id: 4,
            name: '游戏',
            key: 'game'
        },

    ]
    let [currentIndex, changeCurrentIndex] = useState(0);
    let [dataList, changDataList] = useState(0);
    let [renderList, changeRenderList] = useState(0);

    const switchItem = function (key, index) {
        changeCurrentIndex(currentIndex = index);
        changeRenderList(renderList = dataList[key]);
    }

    useEffect(() => {
        request.get('/select/list?page=1&pagesize=5').then(res => {
            changDataList(dataList = res.data[0]);
            changeRenderList(renderList = res.data[0].all);
            console.log(renderList)
        });
    }, []);

    // console.log(renderList);

    return renderList ? (
        <div className="projectselection-box">
            <div className="topics-header">全部专题</div>
            <div className="topics-content">
                <ul className="topics-navtion">
                    {
                        navtion.map((item, index) => {
                            return (
                                <li onClick={() => { switchItem(item.key, index) }} key={item.id} className={currentIndex === index ? 'topics-navtion-item current-topics-navtion-item' : 'topics-navtion-item'}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                {/* ---------------------- */}
                <div className="topics-content-main">
                    {
                        renderList.map(item => {
                            return (<Topicmain key={item.id} renderList={item} />)
                        })
                    }
                </div>
            </div>
            <Appfoot />
        </div>
    ) : null
}

export default ProjectSelection