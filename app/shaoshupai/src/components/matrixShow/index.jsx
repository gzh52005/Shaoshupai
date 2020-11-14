import React from "react";
import "./matrixShow.scss";
import { ThunderboltOutlined,MessageOutlined } from "@ant-design/icons";

function MatrixShow (props){
    console.log(props,777);
    let {state} = props;
    
    return (
        <li className="bigbox">
            <div className="box">
                <div className="left">
                    <p className="left_title">
                    {state.title}
                    </p>
                    <div className="author">
                        <div className="author_top">
                            <div className="imgbox">
                                <img src={`https://cdn.sspai.com/${state.author.avatar}`} alt=""/>
                            </div>
                            <p className="author_name">{state.author.nickname}</p>
                        </div>
                        <div className="author_bottom">
                            <div className="author_bottom_item">
                                <ThunderboltOutlined/>
                                {state.like_count}
                            </div>
                            <div className="author_bottom_item">
                                <MessageOutlined/>
                                {state.comment_count}
                            </div>
                            <div className="author_bottom_item">1天前</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={`https://cdn.sspai.com/${state.banner}`} alt=""/>
                </div>
            </div>
        </li>
    )
}

export default MatrixShow;