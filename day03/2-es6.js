/**
 * 累加函数
 * @author 潘峥全 2019-9-4
 * @param {number} a 累加的第一个数值
 * @param {number} b 累加的第二个数值
 * @returns    累加的结果
 */
function test(a,b){
    //todo
    return a+b;
}
//generator函数
function* generator(){
    console.log(1);
    yield 'hello';
    console.log(2);
    yield 'word';
    console.log(3);
    yield '!';
    return 'test';
}
let g=generator();
let total='';
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
while(result=g.next()){
    total+=result.value;
    // console.log(result.value);
    if(result.done){
        break;
    }

}
console.log(total);

function* ajax(){
    
}