/**
 * 数组类型注解方法
 */

let arr = [1,2,3,"1",true,{}]
arr=[2,3,4]
console.log(arr[0])

const arr2 : (string|number)[] = ["aaa","bbb",222,"ccc"]
console.log(arr2[3])

// 元组
const arr3:[string,number] = ["aaa",111]