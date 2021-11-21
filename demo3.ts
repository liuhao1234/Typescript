/**
 * 基础静态类型和对象静态类型
 * 基础静态类型：string,number,boolean,undefined,null,symbol
 * 对象静态类型：array,object
 */

let num : number = 111
let str : string = "aaa"
let boo : boolean = true

let xiaohong:{
    name:string;
    age:number
} = {
    name:"xiaohong",
    age:18
}

let list : string[] = ["aaa","19"]
console.log(list[1])

class Person{ }
let xiaoming : Person = new Person();

const testFunc:(a:string,b:number)=>string = function(name,age){ return name+age }
console.log(testFunc("aaa",111))