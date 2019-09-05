let test=({name,age})=>{
    console.log(name,age);
}
test({name:'zhangsan',age:12});

let test_1 = ([a,b,c,d=10]) => {
    console.log(a, b, c,d);
}
test_1([1,2,3]);

let test_2=(a=1,b=2)=>{
    console.log(a,b);
}
test_2(10,20);

//rest参数   ...扩展运算符 应用
//箭头函数不能用argument
//...a中的a是全部的实参
let test4=(m,...a)=>{
    console.log(m,a);
}
test4(1,2,3,4,5,6,7);