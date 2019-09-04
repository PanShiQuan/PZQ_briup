import React from 'react';
/**
 * @author 潘峥全 2019-9-4
 * 函数组件
 */
function MyFunctionComponent(props){
    console.log(props);
    return (
        <div>
            我要加鸡腿
            <br/>
            {JSON.stringify(props)}
            <br/>
            {props.stu}
            <br/>
            {props.obj.name}
        </div>
    );
}
export default MyFunctionComponent;