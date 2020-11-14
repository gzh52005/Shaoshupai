import React, { useState, useEffect } from "react";
import "./matrixSquare.scss";
import { CrownFilled, AudioOutlined, RightOutlined } from "@ant-design/icons";
import request from "../../utils/request";
import MatrixShow from "../../components/matrixShow/index";
import tellimg from "../../assets/yipaicontent.png"
import AppFoot from "../../components/AppFoot/index";
function MatrixSquare(props) {
    let [state, setDate] = useState([])
    let [otherdata, setOtherDate] = useState(null)
    useEffect(() => {
        request("/community/paging", { page: 1, pagesize: 5 }).then(res => {
            // console.log(res.data)
            setDate(state = res.data);
            // console.log(state,123456)
        })
    }, [])
    useEffect(() => {
        request("/other/list", { page: 1, pagesize: 1 }).then(res => {
            // console.log(res.data[0],5555)
            setOtherDate(otherdata = res.data[0])
            // console.log(otherdata,1111);
        })
    }, [])
    console.log(otherdata, 123123)

    return otherdata ? (
        <div className="SquareBox">
            <div className="title">
                <div className="title_left">
                    <CrownFilled style={{ color: "rgb(248, 108, 52)", fontSize: 22 }} />
                    <span>精选</span>
                </div>
            </div>
            <ul className="showBox">
                {
                    state.map(item => <MatrixShow state={item} key={item._id} />)
                }
            </ul>
            <div className="loading_btn">加载更多</div>
            <div className="yipai_content">
                {/* 一派 我来说一说 */}
                <div className="yipai_tell">
                    <div className="yipai_tell_header">
                        <img src={tellimg} alt="" />
                    </div>
                    <div className="yipai_tell_footer">
                        <div className="imgbox">
                            <img src={otherdata.tlyipai[0].banner} alt="" />
                            <p>{otherdata.tlyipai[0].title}</p>
                        </div>
                        <div className="speak-btn">
                            <AudioOutlined style={{ color: "rgb(70, 241, 107)", fontSize: 22, marginRight: 5 }} />
                            我来说一说
                        </div>
                        <p className="more" onClick={() => {
                            props.history.push("/yipai")
                        }}>更多一派讨论<RightOutlined style={{ color: "#655E5E", fontSize: 12 }} /></p>
                    </div>
                </div>
                {/* 值得关注 */}
                <div className="yipai_focus">
                    <h2>值得关注</h2>
                    <ul className="yipai_focus_cbox">
                        {/* <li className="yipai_focus_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_focus_c_right">
                                <span>少数派编辑部</span>
                                <span>少数派编辑部官方账号。</span>
                            </div>
                        </li> */}
                        {
                            otherdata.worth.map((item, index) =>
                                <li key={index + 1} className="yipai_focus_c">
                                    <img src={item.avatar} alt="" />
                                    <div className="yipai_focus_c_right">
                                        <span>{item.nickname}</span>
                                        <span>{item.bio}</span>
                                    </div>
                                </li>)
                        }
                    </ul>
                </div>
                {/* 专栏推荐 */}
                <div className="yipai_column">
                    <h2>专栏推荐</h2>
                    <ul className="yipai_column_cbox">
                        {/* <li className="yipai_column_c">
                            <img src={} alt="" />
                            <div className="yipai_column_c_right">
                                <span>游戏人生</span>
                                <span>337 人关注</span>
                            </div>
                        </li> */}
                        {
                            otherdata.zlrecommend.map((item, index) =>
                                <li key={index+1} className="yipai_column_c">
                                    <img src={`https://cdn.sspai.com/${item.banner}`} alt="" />
                                    <div className="yipai_column_c_right">
                                        <span>{item.title}</span>
                                        <span>{item.follow_count} 人关注</span>
                                    </div>
                                </li>)
                        }
                    </ul>
                    <p className="more">查看全部<RightOutlined style={{ color: "#655E5E", fontSize: 12 }} /></p>
                </div>
                {/* 底部 少数派 */}
                <AppFoot />
            </div>
        </div>
    ) : null;
}

export default MatrixSquare;