/**
 * 类型注解type annotation:声明变量的时候注解类型
 * 类型推断type inference: 声明变量时没有注解直接赋值，ts会自动推断类型
 * 
 * 注意：
 * 如果ts能自动推断变量类型，我们就不需要注解
 * 如果ts无法推断变量类型，我们需要添加注解
 */

let count:number
count = 123

let countInterface = 123

interface person {
    name:string,
    age:number
}

function show(person:person):void{
    console.log(person.name+person.age)
}

show({name:"liuzhiyi",age:1})