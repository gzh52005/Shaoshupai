import React from 'react';

import Contentmain from "../Contentmain";
import DateNewspaper from "../Datenewspaper";

function Recommend(){
    let datalist = {};
    let itemlist = {name:'test数据'}
    return(
        <React.Fragment>
            <Contentmain datalist={datalist} />
            <DateNewspaper itemlist={itemlist} />
        </React.Fragment>
    )
}

export default Recommend;