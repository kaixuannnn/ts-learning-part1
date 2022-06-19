console.log('here')
let age: number = 20

if (age < 50) age += 10
console.log(age)

let level
level = 1
level = 'a'

function render(document: any) {
  console.log(document)
}

//tuple
let user: [number, string] = [1, 'Mosh']

//enum
/** 3. When your hover over the Variable, you can see the first Variable Small is assigned as 1,
 * the number increases for the following variable
 * 4. use const infront enum is optional, but it can generate more optimised code*/

const enum Size {
  Small,
  Medium,
  Large
}
let mySize: Size = Size.Medium
console.log(mySize)
