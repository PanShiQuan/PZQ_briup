import React, { Component } from "react";
import axios from "axios";

export default class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }

  //生命周期钩子函数
  componentDidMount() {
    console.log("hello");
    //获取后台的数据
    axios
      .get("http://47.106.244.1:6677/address/findAddressAll")
      .then(res => {
        //res.data是后台给的所有数据
        console.log(res.data.data);
        this.setState({
          arr: res.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { arr } = this.state;
    return (
      <div>
        hello 以下是从后台获取到的数据，展示省份
        {arr.map((item, index) => {
          //item->是一个个地址对象
          return <div key={index}>{item.province}</div>;
        })}
      </div>
    );
  }
}
