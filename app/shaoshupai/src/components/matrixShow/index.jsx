import React from "react";
import "./matrixShow.scss";
import { ThunderboltOutlined,MessageOutlined } from "@ant-design/icons";

function MatrixShow (){
    return (
        <li className="bigbox">
            <div className="box">
                <div className="left">
                    <p className="left_title">
                    《边境》封测体验报告：新奇、拟真的太空题材 FPS
                    </p>
                    <div className="author">
                        <div className="author_top">
                            <div className="imgbox">
                                <img src="https://cdn.sspai.com/2020/10/12/ff226c5229223b9d7b3db24982defc44.png" alt=""/>
                            </div>
                            <p className="author_name">板斧</p>
                        </div>
                        <div className="author_bottom">
                            <div className="author_bottom_item">
                                <ThunderboltOutlined/>
                                123
                            </div>
                            <div className="author_bottom_item">
                                <MessageOutlined/>
                                12
                            </div>
                            <div className="author_bottom_item">1天前</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="https://cdn.sspai.com/2019/11/14/5e970b7834fd522df7520bb00ea9a362.gif?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt=""/>
                </div>
            </div>
        </li>
    )
}

export default MatrixShow;