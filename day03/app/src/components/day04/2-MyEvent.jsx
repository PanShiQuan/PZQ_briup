import React, { Component } from "react";

class MyEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            msg:'message'
        };
    }
    //点击后启用的函数
    changeLogin =(msg,e)=>{
        //更改state中的数据
        this.setState({
            isLogin: !this.state.isLogin,
            msg
        });
    }
    render() {
        const { isLogin,msg } = this.state;
        return (
          <div>
            {msg}
            {isLogin ? <div>欢迎您！</div> : <div>请登录</div>}
            <button onClick={this.changeLogin.bind(this,'hello')}>点击</button>
          </div>
        );
    }
}

export default MyEvent;
