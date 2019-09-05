import React from 'react';
/**
 * 类组件
 * es6 class
 */
class MyClass extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    //render 方法用来返回模板
    render(){
        return (
            <div>
                MyClass类组件
                {/* 这里的this为实例MyClass */}
                {this.props.stu}
            </div>
        );
    }
}
export default MyClass;








//类是用来创建某一类对象
// class Animal{
//     //构造器
//     constructor(name,age,color,type){
//         //this->创建出来的新实例
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.type = type;
//     }
//     //实例的方法
//     sayName(){
//         //this
//         console.log(this.name);
//     }
// }
// let animal=new Animal('小黑',1,'黑色','dog'); 
// console.log(animal);
// animal.sayName();//小黑