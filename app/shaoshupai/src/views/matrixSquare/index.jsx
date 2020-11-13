import React from "react";
import "./matrixSquare.scss";
import { CrownFilled, AudioOutlined, RightOutlined } from "@ant-design/icons";
import MatrixShow from "../../components/matrixShow/index";
import tellimg from "../../assets/yipaicontent.png"
function MatrixSquare() {
    return (
        <div className="SquareBox">
            <div className="title">
                <div className="title_left">
                    <CrownFilled style={{ color: "rgb(248, 108, 52)", fontSize: 22 }} />
                    <span>精选</span>
                </div>
            </div>
            <ul className="showBox">
                <MatrixShow />
                <MatrixShow />
                <MatrixShow />
                <MatrixShow />
                <MatrixShow />
                <MatrixShow />
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
                            <img src="https://cdn.sspai.com/article/7fc80cdf-0f1e-f5eb-c7c1-1707615e9c83.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!536x340r/gravity/Center/crop/536x340/interlace/1" alt="" />
                            <p>双十一你买了什么好东西？</p>
                        </div>
                        <div className="speak-btn">
                            <AudioOutlined style={{ color: "rgb(70, 241, 107)", fontSize: 22, marginRight: 5 }} />
                            我来说一说
                        </div>
                        <p className="more">更多一派讨论<RightOutlined style={{ color: "#655E5E", fontSize: 12 }} /></p>
                    </div>
                </div>
                {/* 值得关注 */}
                <div className="yipai_focus">
                    <h2>值得关注</h2>
                    <ul className="yipai_focus_cbox">
                        <li className="yipai_focus_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_focus_c_right">
                                <span>少数派编辑部</span>
                                <span>少数派编辑部官方账号。</span>
                            </div>
                        </li>
                        <li className="yipai_focus_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_focus_c_right">
                                <span>少数派编辑部</span>
                                <span>少数派编辑部官方账号。</span>
                            </div>
                        </li>
                        <li className="yipai_focus_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_focus_c_right">
                                <span>少数派编辑部</span>
                                <span>少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。少数派编辑部官方账号。</span>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* 专栏推荐 */}
                <div className="yipai_column">
                    <h2>专栏推荐</h2>
                    <ul className="yipai_column_cbox">
                        <li className="yipai_column_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_column_c_right">
                                <span>游戏人生</span>
                                <span>337 人关注</span>
                            </div>
                        </li>
                        <li className="yipai_column_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_column_c_right">
                                <span>游戏人生</span>
                                <span>337 人关注</span>
                            </div>
                        </li>
                        <li className="yipai_column_c">
                            <img src="https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!96x96r/gravity/Center/crop/96x96/interlace/1" alt="" />
                            <div className="yipai_column_c_right">
                                <span>游戏人生</span>
                                <span>337 人关注</span>
                            </div>
                        </li>
                    </ul>
                    <p className="more">查看全部<RightOutlined style={{ color: "#655E5E", fontSize: 12 }} /></p>
                </div>
            </div>
        </div>
    )
}

export default MatrixSquare;