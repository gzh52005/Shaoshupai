import React from 'react';
import { Redirect } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import request from './request';

// 获取storage值，可多个参数
export function withStorages(...key) {
    return function (InnerComponent) {
        return function OuterComponent(props) {
            let obj = {}
            key.forEach((item) => {
                obj[item] = localStorage.getItem(item);
            });
            return <InnerComponent {...props} {...obj} />
        }
    }
}

// ------------------------------

// 路由守卫
export function withAuth(InnerComponent) {
    @withStorages('currentUser')
    class OuterComponent extends React.Component {
        async componentDidMount() {
            let { currentUser } = this.props;
            currentUser = JSON.parse(currentUser)
            // 校验token
            if (currentUser) {
                const data = await request.get('/user/verify', {}, {
                    header: { token: currentUser.token }
                });
                if (data.flag) {
                    Toast.fail('免登录已过期，请重新登录', 1);
                    this.props.history.replace({
                        pathname: '/login',
                        search: '?redirectTo=' + this.props.location.pathname
                    })
                }
            }
        }
        render() {
            const { currentUser } = this.props;
            if (currentUser) {
                return <InnerComponent {...this.props} />
            }
            return <Redirect to={"/login?redirectTo=" + this.props.location.pathname} />
        }
    }
    return OuterComponent
}