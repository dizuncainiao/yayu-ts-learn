function getId(id: string | number) {
  id.toUpperCase() // Property 'toUpperCase' does not exist on type 'number'.
  id.toFixed()     // Property 'toFixed' does not exist on type 'string'.
}

// 使用 typeof 进行类型收窄
function getId2(id: string | number) {
  if (typeof id === 'string') {
    id.toUpperCase()
  } else if (typeof id === 'number') {
    id.toFixed()
  }
}


// 拥有相同属性或方法的不需要进行类型收窄
function getInfo(info: string[] | string) {
  info.includes('1')
}

getInfo(['1'])
getInfo('1')
