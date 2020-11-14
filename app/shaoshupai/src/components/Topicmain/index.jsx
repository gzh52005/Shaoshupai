import React from "react";

import "./topicmain.scss";

function Topicmain(props) {
    let {renderList} = props
    return  props ? (
        <div className="topics-content-main-item">
            <div className="main-link-item">
                <i className="topic-cover" style={{
                    background: `url(https://cdn.sspai.com/${renderList.banner})`, backgroundPosition: 'center center',
                    backgroundSize:"230%"
                }}></i>
                <div className="topic-info">
                    <span className="topic-title">{renderList.title}</span>
                    <span className="topic-count">共 {renderList.article_count} 篇文章</span>
                </div>
            </div>
        </div>
    ) : null
}

export default Topicmain;