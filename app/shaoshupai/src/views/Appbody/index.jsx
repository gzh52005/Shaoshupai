import React from "react";

import Slideshow from "../../components/Slideshow";
import Displaywindow from "../../components/Displaywindow";
import Appcontent from "../../components/Appcontent";
import Appfoot from "../../components/AppFoot";

import "./appbody.scss";
import "../../assets/base.css";

function Appbody() {

    return (
            <div className="appbody">
                <Slideshow />
                <Displaywindow />
                <Appcontent />
                <Appfoot />
            </div>
    )
}

export default Appbody