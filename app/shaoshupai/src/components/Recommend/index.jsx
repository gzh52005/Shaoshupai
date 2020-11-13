import React,{useEffect} from 'react';

import Contentmain from "../Contentmain";
import DateNewspaper from "../Datenewspaper";

import request from "../../utils/request";

function Recommend(){
    let datalist = {};
    let itemlist = {name:'test数据'}

    useEffect(function(){
        request('/home/paging?page=1&pagesize=1').then(res => {
            console.log(res)
        })
    },[])


    return(
        <React.Fragment>
            <Contentmain datalist={datalist} />
            <DateNewspaper itemlist={itemlist} />
        </React.Fragment>
    )
}

export default Recommend;