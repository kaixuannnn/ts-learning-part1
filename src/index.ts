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

// function
/** 1. we should always annotate type for return, although ts will infer for us.
 * 2. type void, when we dont return any value
 */
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}

/** 3. Ts will only restrict for allowing 2 argv,
 * we can give a default value to the argv so that,
 * it wont throw errors to us
 */

calculateTax(10_000, 2023)

// objects
/** 1. we can assign readonly to the property of the object, so we wont accidentally modify the value */
let employee: {
  readonly id: number
  name: string
  fax?: number
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Kai',
  retire: (date: Date) => {
    console.log('retire', date)
  }
}

// Aliases Type
type Employee = {
  readonly id: number
  name: string
  fax?: number
  retire: (date: Date) => void
}

let newEmployee: Employee = {
  id: 1,
  name: 'Kai',
  retire: (date: Date) => {
    console.log('retire', date)
  }
}

//Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight == 'number') return weight * 2.2
  else return parseInt(weight) * 2.2
}
kgToLbs('10')
kgToLbs(20)
