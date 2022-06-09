function isString(s: unknown): boolean {
    return typeof s === 'string'
}

function toUpperCase(x: unknown) {
    // x 已经通过 isString 验证，但是底下会报错
    if(isString(x)) {
        // x => unknown
        x.toUpperCase() // Error, Object is of type 'unknown'
    }
}

// const isString = (s: unknown): s is string => typeof s === 'string'
function isString2(s: unknown): s is string {
    return typeof s === 'string'
}

function toUpperCase2(x: unknown) {
    if(isString2(x)) {
        // x => string
        x.toUpperCase()
    }
}

// is 关键字经常用来封装”类型判断函数”，通过和函数返回值的比较，从而缩小参数的类型范围，所以类型谓词 is 也是一种类型保护。
