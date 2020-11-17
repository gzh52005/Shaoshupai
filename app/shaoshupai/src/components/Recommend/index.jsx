import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';

import Contentmain from "../Contentmain";
import DateNewspaper from "../Datenewspaper";

import request from "../../utils/request";

function Recommend(props) {
    let [dataList, changeDataList] = useState(0);
    let [itemList, changeitemList] = useState(0);
    let [dataList2, changeDataList2] = useState(0);

    useEffect(() => {
        request('/home/paging?page=1&pagesize=1').then(res => {
            changeDataList(dataList = res.data[0].recommend[0]);
            changeitemList(itemList = res.data[0].recommend[1]);
            changeDataList2(dataList2 = res.data[0].recommend[2]);
        });
    }, []);
    return (
        <React.Fragment>
            {
                dataList ?
                    dataList.map((item, index) => { return <Contentmain key={index + 1} dataList={item} /> })
                    :
                    (Toast.loading('Loading...', 1, () => {
                        console.log('Load complete !!!');
                    }))
            }
            {
                itemList ?
                    <DateNewspaper itemList={itemList} />
                    :
                    (Toast.loading('Loading...', 1, () => {
                        console.log('Load complete !!!');
                    }))
            }
            {
                dataList2 ?
                    dataList2.map((item, index) => { return <Contentmain key={index + 1} dataList={item} props={props}/> })
                    :
                    (Toast.loading('Loading...', 1, () => {
                        console.log('Load complete !!!');
                    }))
            }

        </React.Fragment>
    )
}


// Recommend = withRouter(Recommend);
export default Recommend;