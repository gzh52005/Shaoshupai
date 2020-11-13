import React, { useCallback, useRef, useEffect } from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

import Recommend from "@/components/Recommend";

import "./contentui.scss";


function Contentul(props) {

    // let fn = function (props, ulRef) {
    //     if (props.location.pathname == '/home') {
    //         if (parseInt(window.pageYOffset) > 276) {
    //             ulRef.current.layout.style.position = 'fixed';
    //             ulRef.current.layout.style.top = 50 + 'px';
    //         } else {
    //             ulRef.current.layout.style.position = 'relative';
    //             ulRef.current.layout.style.top = 0;
    //         }
    //     }
    // }

    // let ulRef = useRef();
    // useEffect(() => {
    //     if (ulRef.current != null) {
    //         console.log(1111);
    //         ulRef.current.layout.style.backgroundColor = '#f4f4f4';
    //         window.addEventListener('scroll', () => {
    //             fn(props, ulRef)
    //         })

    //         return () => {
    //             // window.removeEventListener('scroll',fn)
    //             console.log(ulRef);
    //             console.log(123)// ulRef.current.layout = null
    //         }
    //     }
    // }, []);





    let renderContent = liList =>
        (<div style={{ padding: ' 20px 12px', minHeight: 150, backgroundColor: '#f4f4f4' }}>
            {liList.component}
        </div>);


    const liList = [
        {
            id: 1,
            title: '推荐',
            path: '/recommend',
            component: <Recommend />
        }, {
            id: 2,
            title: '最热',
            path: '/hot',
            component: <Recommend />
        }
        , {
            id: 3,
            title: '应用推荐',
            path: '/application',
            component: <Recommend />
        }, {
            id: 4,
            title: '生活方式',
            path: '/life',
            component: <Recommend />
        }, {
            id: 5,
            title: '效率技巧',
            path: '/efficiency',
            component: <Recommend />
        }
    ]

    return (
        <div>
            <WhiteSpace />
            <Tabs tabs={liList} renderTabBar={props => <Tabs.DefaultTabBar  {...props} page={4} tabBarUnderlineStyle={{ border: '1px solid #d71a1b' }} tabBarBackgroundColor="#f4f4f4" tabBarActiveTextColor='#d71a1b' />}>
                {renderContent}
            </Tabs>
            <WhiteSpace />
        </div>
    );

}



// function Contentul() {
//     const ulRef = useRef();
//     let [currentIndex, changeCurrentIndex] = useState(0)
// const liList = [
//     {
//         id: 1,
//         name: '推荐',
//         path: '/recommend',
//         component: ""
//     }, {
//         id: 2,
//         name: '最热',
//         path: '/hot',
//         component: ""
//     }
//     , {
//         id: 3,
//         name: '应用推荐',
//         path: '/application',
//         component: ""
//     }, {
//         id: 4,
//         name: '生活方式',
//         path: '/life',
//         component: ""
//     }, {
//         id: 5,
//         name: '效率技巧',
//         path: '/efficiency',
//         component: ""
//     }
// ]
//     const LiItem = liList.map((item, index) => <li onClick={() => { changeCurrentIndex(currentIndex = index) }} key={item.id} className={currentIndex == index ? 'content-item-active' : ''}><span>{item.name}</span></li>)

// useEffect(() => {
//     // console.log(ulRef.current);
//     window.addEventListener('scroll', () => {
//         // console.log(parseInt(window.pageYOffset))
//         if (parseInt(window.pageYOffset) > 276) {
//             ulRef.current.style.position = 'fixed';
//             ulRef.current.style.top = 50 + 'px';
//         } else {
//             ulRef.current.style.position = 'relative';
//             ulRef.current.style.top = 0;
//         }

//     })
// }, [ulRef]);
//     return (
//         <div className="content-box" >
//             <ul className="content-ul" ref={ulRef}>
//                 {LiItem}
//             </ul>
//         </div>
//     )
// }

Contentul = withRouter(Contentul)
export default Contentul