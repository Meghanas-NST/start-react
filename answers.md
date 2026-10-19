# Day 3 - TypeScript Check

## 1. What is the difference between spread and direct mutation?

Direct mutation changes the original object or array.
The spread operator (`...`) creates a shallow copy, so we can
make changes without directly modifying the original data.

## 2. What does await do?

The `await` keyword waits for a Promise to settle before
continuing with the next statement inside an async function.
It makes asynchronous code easier to read and understand.

## 3. Does fetch() throw an error for a 404 response?

No, fetch() does not automatically throw an error for HTTP
errors such as 404. We need to check the response status
using `response.ok` and handle the error ourselves.

## 4. What is the difference between type and interface?

Both `type` and `interface` are used to define the structure
of data in TypeScript.

An interface is mainly used to describe object structures,
while a type alias can also define union types and other types.

## 5. What is strict mode in TypeScript?

Strict mode enables additional type checking in TypeScript.
It helps identify possible errors and makes the code safer
and more reliable.