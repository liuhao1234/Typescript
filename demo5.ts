/**
 * 函数参数和返回值类型注解
 */

function getTotal(a:number,b:number):number{
    return a+b
}

console.log(getTotal(10,20))


function getTotal2(a:number,b:number):void{
    console.log(a+b)
}
getTotal2(10,20)

function neverTest():never{
    throw new Error()
    console.log(111)
}

// neverTest()

function add({one,two}:{one:string,two:string}):string{
    return one + two
}

console.log(add({one:"1",two:"2"}))
