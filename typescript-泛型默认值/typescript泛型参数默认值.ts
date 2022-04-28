// function getVal<T>(val: T): T {
//   return val
// }
//
// const result = getVal(1)
// const result2 = getVal('123')
// const result3 = getVal(true)
// const result4 = getVal(undefined)
// const result5 = getVal(null)
// const result6 = getVal(Symbol('foo'))
// const result7 = getVal(123456789n)
// const result8 = getVal([])

// 考虑一个会创建新的 HTMLElement 的函数，调用时不加参数会生成一个Div，你也可以选择性地传入子元素的列表。
// 之前你必须这么去定义：

// type Container<T, U> = {
//   element: T,
//   children: U
// }
//
// function create(): Container<HTMLDivElement, HTMLDivElement[]>;
// function create<T extends HTMLElement>(element: T): Container<T, T[]>;
// function create<T extends HTMLElement, U extends HTMLElement>(
//   element: T,
//   children: U[]
// ): Container<T, U[]>;
// function create<T extends HTMLElement, U extends T[]>(element?: T, children?: U): Container<T, U> {
//   return {
//     element: element as T,
//     children: children as U
//   }
// }


type Container<T, U> = {
  element: T,
  children: U
}

function create<T extends HTMLElement = HTMLDivElement, U = T[]>(element?: T, children?: U): Container<T, U> {
  return {
    element: element as T,
    children: children as U
  }
}

const r1 = create() // Container<HTMLDivElement, HTMLDivElement[]>
const r2 = create(document.createElement('dialog')) // Container<HTMLDialogElement, HTMLDialogElement[]>
const children = [document.createElement('div')] // HTMLDivElement[]
const r3 = create(document.createElement('dialog'), children) // Container<HTMLDialogElement, HTMLDivElement[]>














