import React, { useState, useEffect } from 'react';

import Contentmain from "../Contentmain";
import DateNewspaper from "../Datenewspaper";

import request from "../../utils/request";

function Recommend() {
    let [dataList, changeDataList] = useState([]);
    let [itemList, changeitemList] = useState([]);

    useEffect(() => {
        request.get('/home/paging?page=1&pagesize=1').then(res => {
            changeDataList(dataList = res.data[0].recommend[0]);
            changeitemList(itemList = res.data[0].recommend[1])
        });
    }, []);

    return (
        <React.Fragment>
            <Contentmain dataList={dataList} />
            <DateNewspaper itemList={itemList} />
        </React.Fragment>
    )
}

export default Recommend;