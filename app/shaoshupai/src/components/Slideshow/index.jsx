import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Slideshow extends React.Component {
    state = {
        data: ['https://cdn.sspai.com/article/297f5903-93f0-7b74-420e-e6958d4c1b6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/69729601-f76e-ad61-bde1-edc3f2914365.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/ea9d986e-8ea2-2b9a-bc6f-4a1181a25627.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/beffb488-0561-b2d9-d9ee-80099a626523.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/73dd60a5-5909-e3eb-668a-5f6f692822a9.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1'],
        imgHeight: 165,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://cdn.sspai.com/article/297f5903-93f0-7b74-420e-e6958d4c1b6e.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/69729601-f76e-ad61-bde1-edc3f2914365.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/ea9d986e-8ea2-2b9a-bc6f-4a1181a25627.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/beffb488-0561-b2d9-d9ee-80099a626523.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1', 'https://cdn.sspai.com/article/73dd60a5-5909-e3eb-668a-5f6f692822a9.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1'],
            });
        }, 100);
    }
    componentWillUnmount() {
        clearInterval()
    }
    render() {
        return (
            <WingBlank style={{ margin: 0 }
            }>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    dotStyle={{ margin: '0 5px 5px' }}
                    dotActiveStyle={{ margin: '0 5px 5px' }}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, zIndex: 10000 }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' ,touchAction: 'none'}}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank >
        );
    }
}


export default Slideshow