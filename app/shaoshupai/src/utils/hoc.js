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
    @withStorages('userState')
    class OuterComponent extends React.Component {
        async componentDidMount() {
            let { userState } = this.props;
            userState = JSON.parse(userState)
            // 校验token
            if (userState) {
                const data = await request.get('/user/verify', {}, {
                    header: { token: userState.token }
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
            const { userState } = this.props;
            if (userState) {
                return <InnerComponent {...this.props} />
            }
            return <Redirect to={"/login?redirectTo=" + this.props.location.pathname} />
        }
    }
    return OuterComponent
}