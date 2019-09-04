import React from 'react';
/**
 * 组件的声明：函数组件，类组件的形式
 */
// 函数组件
function MyIf(props) {
  // props对象里有父组件给子组件的数据
  console.log(props);
  return (
    <div>
      MyIf
      ---渲染 render--获取父组件给的数据---
      {JSON.stringify(props)}
      {props.stu}
      {props.obj.name}
    </div>
  );
}
// 导出
export default MyIf;
