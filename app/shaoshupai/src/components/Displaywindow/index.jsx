import React from "react";
import request from '../../utils/request';
import { Carousel, WingBlank } from 'antd-mobile';

import "./displaywindow.scss";

class Displaywindow extends React.Component {
    state = {
        data: [],
        imgHeight: 110,
    }
    componentDidMount() {
        // simulate img loading
        request.get('/home/paging?page=1&pagesize=1').then(res => {
            this.setState({
                data: res.data[0].sbanner
            });
        });
    }
    render() {
        return (
            <div style={{ margin: '10px 0 0' }}>
                <WingBlank style={{ margin: 0, height: 110 }}>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.5}
                        autoplay={false}
                        infinite
                        dots={false}
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={index + 1}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -5 : 0,
                                    height: this.state.imgHeight,
                                }}
                            >
                                <img
                                    src={val.image}
                                    alt=""
                                    style={{
                                        width: '100%', verticalAlign: 'top', boxShadow: '0 4px 4px rgba(0,0,0,.15)',
                                        borderRadius: '6px',
                                    }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        );
    }
}

export default Displaywindow;


/*
// 小轮播图片
'https://cdn.sspai.com/article/4824cd11-035f-86bd-5969-95de2daad939.png?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1', 'https://cdn.sspai.com/article/a4f79ee9-6a42-e0ab-82a0-e2f44fdc66dc.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1', 'https://cdn.sspai.com/article/45a0357d-41c1-5527-f77e-13e799531d76.png?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1', 'https://cdn.sspai.com/article/a55dfc88-3d99-55a3-7240-088bd67cc275.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!528x288r/gravity/Center/crop/528x288/interlace/1'
*/