One of the may reason of using Typescript is that it provides necessary errors before we run our code. However, if we use 'any' for unpredictable data it completely disables TypeScript’s type checking for that value. Once a variable is typed as any, you can do anything with it, and TypeScript will not warn you about possible errors.

Example:

let value: any = "Arman Hossain";
value.toFixed(2); // No TypeScript error

This compiles successfully, but at runtime it crashes because strings do not have a toFixed() method.

So any is dangerous because:

1. It bypasses type checking
2. Errors are only caught at runtime
3. It defeats the purpose of TypeScript

This is why in TypeScript, any is called a 'type safety hole'

Meanwhile, unknown is the safer alternative for unpredictable data because TypeScript will forces you to verify the type before using it.

Example:

let value: unknown = "hello";
value.toFixed(2); // Error

TypeScript prevents unsafe operations until we check the actual type. This makes your code safer and more predictable.