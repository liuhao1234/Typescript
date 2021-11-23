/**
 * 接口interface
 * prop?:type 可选属性
 * [prop:string]:any 可填写任意值
 * 接口继承使用extends
 * 接口既可以限制变量又可以限制类
 */

interface Person{
    name:string;
    age:number;
    sex?:string;
    say:()=>void;
    [props:string]:any;
}

interface teacher extends Person{
    teach:string
}

const xiaoming:Person = {
    name:"xiaoming",
    age:22,
    sex:"male",
    say(){
        console.log("111")
    }
}

class employee implements teacher{
    teach: "chinese";
    name: "";
    age: 22;
    sex: "";
    say(){
        console.log(111)
    }
}

const xiaozhang = new employee()
xiaozhang.say()
