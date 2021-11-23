/**
 * get set方法
 */

class Person2{
    constructor(private _name:string,private readonly age?:number){}
    get name(){
        return this._name;
    }
    set name(newName:string){
        this._name = newName
    }
}

const xiaotong = new Person2("xiaotong")
console.log(xiaotong.name)
xiaotong.name = "xiaoli"
console.log(xiaotong.name)

class Person3{
    constructor(public name:string){}
}
// 与上边的代码效果一致
class Person4{
    public name:string;
    constructor(name:string){
        this.name = name
    }
}

const xiaodong = new Person4("xiaodong")
console.log(xiaodong.name)