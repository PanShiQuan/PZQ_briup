import React, { Component } from 'react'

class TestMyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        inpuntValue: "zhanglong",
        sex: "male"
      }
    };
  }
  inputChange=(e)=>{
      this.setState={
          form:{
              ...this.state,
              inputValue:'zhaohu'     
          }
      }
  }
  render() {
    const { form } = this.state;
    return (
      <div>
        <input
          type="text"
          value="form.inputValue"
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default TestMyForm