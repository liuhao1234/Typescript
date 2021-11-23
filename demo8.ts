/**
 * 类
 * 
 */

class Lady{
    content="Hi,帅哥"
    sayHello(){
        return this.content
    }
}

class teacher extends Lady{
    content="你好！我是..."
    sayMyHello(){
        return super.sayHello()
    }
    sayLove(){
        return "I love you"
    }
}

const xiaohong = new teacher()
console.log(xiaohong.sayHello())
console.log(xiaohong.sayLove())
console.log(xiaohong.sayMyHello())


