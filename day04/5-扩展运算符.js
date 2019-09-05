//
//指传递
let a = 1;
let b = a;
console.log(a, b);
a = 2;
console.log(a, b);

//引用传递
let obj = { name: "zhangsan" };
let obj2 = obj;
console.log(obj == obj2);
console.log(obj === obj2);
obj.name = "lisi";
console.log(obj, obj2);
//实现obj的内容的复制，同时obj跟obj2相互不影响
//...obj是展开obj获取里面的属性
let obj3 = { ...obj };
console.log(obj === obj3);
console.log(obj == obj3);
obj.name='潘峥全';
console.log(obj,obj3);
