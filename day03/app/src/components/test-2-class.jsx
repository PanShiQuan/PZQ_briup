import React from 'react';
/**
 * @author 潘峥全 2019-9-4-20：30
 * 类组件
 */
class MyClassComponent extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div>
                我要加火腿
                {/* 为什么类组件这里需要this，而函数组件不需要？
                因为这里的props不在render（）函数中。 */}
                {this.props.stu}
            </div>
        );
    }
}
export default MyClassComponent;