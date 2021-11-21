/**
 * 静态数据类型
 * 类型定义之后不能改变
 */

let num:number = 1
// num = "2"
interface person {
    name:string;
    age:string;
    sex:string
}

let xiaohong:person
xiaohong = {
    name:"xiaohong",
    age:"12",
    sex:"male"
}

// xiaohong = { //报错，缺少属性age,sex
//     name:"xiaohong"
// }

// xiaohong = { //报错，属性location不在类型person中
//     name:"xiaohong",
//     age:"21",
//     sex:"female",
//     location:123
// }

console.log(xiaohong.name)