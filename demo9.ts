/**
 * public 当前类的内部继承类的内部和外部都可以使用
 * protected 当前类的内部和继承类的额内部使用，外部无法使用（外部是指实例的调用）
 * private 当前类的内部使用，继承类和外部不可以使用
 * static 可以类名点属性调用，全局变量
 * 
 * 类中属性可以直接赋值使用，但是未赋值的属性必须在constructor中初始化
 */


class Person{
    public name?:string //严格检查，类中属性必须在constructor中声明，否则报错，但可以使用name!:string;的方式，或者在配置文件tsconfig中添加属性"strictPropertyInitialization": false
    public age : number
    private sex = "male"
    constructor(age:number){
        this.age = age
    }
    
}

const person = new Person(22)
person.name = "xiaohua"
console.log(person.name)
console.log(person.age)