import React, { useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';

import Contentmain from "../Contentmain";

import request from "../../utils/request";

function Hot() {
    let [dataList, changeDataList] = useState(0);

    useEffect(() => {
        request('/home/paging?page=1&pagesize=1').then(res => {
            changeDataList(dataList = res.data[0].hot);
        });
    }, []);

    return (
        <React.Fragment>
            {
                dataList ?
            dataList.map((item,index) => { return <Contentmain key={index+1} dataList={item}/>})
                    :
                    (Toast.loading('Loading...', 1, () => {
                        console.log('Load complete !!!');
                    }))
            }
        </React.Fragment>
    )
}

export default Hot