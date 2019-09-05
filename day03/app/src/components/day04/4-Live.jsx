import React, { Component } from 'react';
import axios from 'axios';

class Live extends Component {
    constructor (props) {
        super(props);
        this.state={
            arr:[]
        }
    }
    
    
    //生命周期钩子函数
    componentDidMount() {
        console.log('hello');
        //获取后台数据
        axios
          .get("http://47.106.244.1:6677/address/findAddressAll")
          //get成功执行then方法并执行then方法中的操作，例如console.log()、函数
          //这里的参数res代表着后台的所有数据，潘某自己的理解
          .then(res => {
            //   alert("获取后台数据成功");
            //第一个"data"为对象data，第二个"data"为对象data下的属性data
            console.log(res.data.data);
            this.setState({
              arr: res.data.data
            });
          })
          //get不成功执行catch方法并执行catch方法中的操作，例如console.log()
          .catch(error => {
            //   alert("获取后台数据失败");
            console.log(error);
          });
    }
    
    render () {
        const {arr}=this.state;
        return (
            <div>
                hello
                以下是从后台获取的数据，展示省份
                {
                    arr.map((item,index)=>{
                        //item是一个个地址对象
                        return <div key={index}>{item.province}</div>;
                    })
                }
            </div>
        )
    }
}

export default Live