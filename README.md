# ts-learning-part1

6 - Debug

1. create sourcemap file for debugging purpose
2. create launch.js with nodejs env
3. debug functio - step over, step in, cancel

Fundamentals

2 - Built in Types

1.  We not necessary need to initialize and annotate the type of the variable, ts will automatically do it for us

3 - The any Type

1. if we declare a variable w/o assigning a value, typescript will claim it as any
2. you can go to tsconfig.json to make noImplicityAny to false

4 - Array

1. same like others, typescript will automatically annotate type for you when you first assigning value to the variable, if you declare variable w/o assigning value, it will automatically become type any

6 - Tuples

1. it onlny available in Typescript, we cant find in Javascript, it is just an array
2. try to retricts your tuples with 2 values
