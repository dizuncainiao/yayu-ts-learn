// 可使用分号或逗号隔开
function test(obj: { name: string; age: number }) { }
function test2(obj: { name: string, age: number }) { }

// 可选属性
function test3(obj: {name: string, age?: number}) {
    return obj.name + obj.age
    
}