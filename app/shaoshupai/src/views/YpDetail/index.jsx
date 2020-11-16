import React,{useState} from "react"
import { ExportOutlined,FireFilled,ClockCircleFilled,CommentOutlined,ThunderboltOutlined,RightOutlined } from "@ant-design/icons"

import "./YpDetail.scss"

import speak from "@/assets/ypDetailspeak.png"

import YpButton from "@/components/YpButton"
import AppFoot from "@/components/AppFoot"


function YpDetail(props) {

    let [hot,changeHot] = useState(true);
    let [newest,changeNewest] = useState(false);

    return (
        <div className="ypDetail" style={{ background: 'url("https://cdn.sspai.com/article/f978f413-2ec3-2785-b86f-6cd14be20ab9.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!750x516r/gravity/Center/crop/750x516/interlace/1") no-repeat', backgroundSize: '100%' }}>
            <div className="ypDetailHead">
                <div className="detailTitle">
                    <div className="identifier">VOL.017</div>
                    <h2>假期里你遇到的最糟心/满足的事？</h2>
                    <div className="share">
                        <div className="share_icon">
                            <ExportOutlined />
                            <span>分享</span>
                        </div>
                        <div className="share_num">38人参与</div>
                        <div className="avatarLsits">
                            <div className="avatarLsit">
                                <img src="https://cdn.sspai.com/2020/05/10/avatar/385b222277875a57e8f34fdb67258fa5.jpg" alt="" />
                            </div>
                            <div className="avatarLsit">
                                <img src="https://cdn.sspai.com/2020/08/14/4ed7ad1f6dd43329995c795d6b03cd72.jpg" alt="" />
                            </div>
                            <div className="avatarLsit">
                                <img src="https://cdn.sspai.com/attachment/origin/2017/02/08/366980.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="detailEdit">本期坐班编辑</div>
                    <div className="leader">
                        <img src="https://cdn.sspai.com/2019/11/14/5e970b7834fd522df7520bb00ea9a362.gif?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt="" />
                        <span>路中南</span>
                    </div>
                    <div className="btn_img">
                        <img src={speak} alt="" />
                    </div>
                </div>
                <div className="prologueMain">
                    <h2 className="prologue">
                        <span>开场白</span>
                        <span>📢</span>
                    </h2>
                    <div className="prologue_img">
                        <div className="prologue_img_avatar">
                            <img src="https://cdn.sspai.com/2019/11/14/5e970b7834fd522df7520bb00ea9a362.gif?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt=""/>
                        </div>
                        <div className="prologue_content">
                            <h3>
                                <span>路中南</span>
                                <img src="https://cdn.sspai.com/ui/badge/shaoshupaichengyuan.png" alt=""/>
                            </h3>
                            <div className="prologue_title">
                                <p>8 天的长假一闪而过。</p>
                                <p>在这长段时间里，我们通常会围绕一个主题展开好几天的活动，比如出门旅游、吃吃喝喝、宅家通关游戏、搬家……8 天的记忆在脑海里一闪而过，你想起了什么？</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ypspeak">
                <div className="ypspeak_img">
                    <img src="https://cdn.sspai.com/ui/avatar-placeholder.png" alt=""/>
                </div>
                <div className="ypspeak_title">我也来说一说：假期里你遇到的最糟心/满足的事？</div>
            </div>
            <div className="ypcomment">
                <div className="ypcomment_head">
                    <div className="ypcomment_head_left">
                        <div className="ypcomment_hot" onClick={()=>{
                            changeHot(hot=true);
                            changeNewest(newest=false);
                        }} style={hot?{color:"rgb(235, 137, 10)",fontWeight:700}:null} >
                            <FireFilled />
                            <span >最热</span>
                        </div>
                        <div className="ypcomment_newest" onClick={()=>{
                            changeHot(hot=false);
                            changeNewest(newest=true);
                        }} style={newest?{color:"rgb(12, 96, 221)",fontWeight:700}:null} >
                            <ClockCircleFilled />
                            <span>最新</span>
                        </div>
                    </div>
                    <div>20 条发言</div>
                </div>
                <ul className="ypcomment_main">
                    <li className="ypcomment_item">
                        <div className="ypcomment_item_avatar">
                            <img src="https://cdn.sspai.com/2019/11/14/5e970b7834fd522df7520bb00ea9a362.gif?imageMogr2/auto-orient/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt=""/>
                        </div>
                        <div className="ypcomment_item_title">
                            <h3>
                                <span>SamWanng</span>
                                <img src="https://cdn.sspai.com/ui/badge/shaoshupaichengyuan.png" alt=""/>
                            </h3>
                            <div className="ypcomment_item_content">
                                <p>之前合租，隔壁搬来一个既不讲公共卫生也无法沟通的邻居，忍了一段时间，合租管家也搞不定，就找了个整租，然后假期期间搬了家。</p>
                            </div>
                            <div className="ypcomment_item_img">
                                <img src="https://cdn.sspai.com/2020/10/09/54329e370d769a57da8011384935c224.JPG?imageMogr2/auto-orient/quality/95/thumbnail/!x180r/gravity/Center/crop/x180/interlace/1" alt=""/>
                            </div>
                            <div className="ypcomment_item_interact">
                                <YpButton className="btn" >
                                    <ThunderboltOutlined style={{marginRight:8}} />
                                    <span className="ypcomment_item_charge">充电</span>
                                    <span>4</span>
                                </YpButton>
                                <div className="ypcomment_item_comment">
                                    <CommentOutlined />
                                    <span className="ypcomment_item_comment_title">评论</span>
                                </div>
                                <div className="ypcomment_item_fencai">
                                    <div>
                                        <ExportOutlined />
                                        <span className="ypcomment_item_comment_title">分享</span>
                                    </div>
                                    <span className="ypcomment_item_cai">踩</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="ypcomment_foot">
                    <span className="ypcomment_foot">已加载全部讨论</span>
                </div>
            </div>
            <div className="ypBtnSpeak">
                <img src={speak} alt=""/>
            </div>
            <div className="ypDetail_recommend">
                <div className="ypDetail_recommend_top">
                    <h2>往期一派<RightOutlined className="arrowRight" />
                    </h2>
                    <div className="ypDetail_recommend_item">
                        <div className="ypDetail_recommend_item_title">
                            <p className="ypDetail_recommend_item_title_problem">Apple 秋季发布会第二弹，哪些新品打动你？</p>
                            <p className="ypDetail_recommend_item_title_num">VOL.016</p>
                        </div>
                        <div className="ypDetail_recommend_item_img">
                            <img src="https://cdn.sspai.com/article/f978f413-2ec3-2785-b86f-6cd14be20ab9.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!750x516r/gravity/Center/crop/750x516/interlace/1" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="ypDetail_recommend_bottom">
                    <h2>Matrix 精选<RightOutlined className="arrowRight" />
                    </h2>
                    <div className="ypDetail_recommend_bottom_item">
                        <div className="ypDetail_recommend_bottom_item_img">
                            <img src="https://cdn.sspai.com/2020/05/31/65cc0130969128e35b919621b28007fd.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64" alt=""/>
                        </div>
                        <div className="ypDetail_recommend_bottom_item_title">
                            <p className="ypDetail_recommend_bottom_item_title_name">极客Geeking</p>
                            <p className="ypDetail_recommend_bottom_item_title_con">拥抱新浪潮：协同办公工具的四个新范式与无限未来</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="ypDetailFoot">
                <AppFoot />
            </div>
        </div>
    )
}

export default YpDetail