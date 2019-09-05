import React, { Component } from 'react'

//表单的双向数据绑定
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //存放表单的数据
      form: {
        inputValue: "zhangsan",
        value:'test'
      },
      msg: "hello"
    };
  }
  inputChange=(e)=>{
      console.log(e.target.value);
      this.setState({
        form: { 
            ...this.state.form, 
            inputValue: e.target.value 
        }
      });
  }
  render() {
    const { msg, form } = this.state;
    const test = "test";
    return (
      <div>
        {msg}
        {test}
        <br />
        {/* 数据驱动DOM */}
        <input
          type="text"
          value={form.inputValue}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default MyForm;