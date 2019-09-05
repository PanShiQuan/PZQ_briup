import React, { Component } from 'react'

export default class MyState extends Component {
    constructor (props) {
        super(props)
        //状态管理器
        this.state={
            msg:'message',
            arr:[1,2,3,4,5],
            obj:{
                name:'zhangsan',
                age:12
            },
            isLogin:false
        };
    }

    render () {
        const {isLogin,msg,arr}=this.state;
        return (
            <div>
                hello{msg}
                {/* 条件渲染 */}
                {/* 三目运算符 */}
                {isLogin?<div>欢迎您！</div>:<div>请登录</div>}
                {/* 列表渲染 */}
                {
                    arr.map((item)=>{
                        return <div>{item}</div>
                    })
                }
            </div>
        );
    }
}