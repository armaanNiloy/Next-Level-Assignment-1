Why any is Dangerous and unknown is Safer in TypeScript

Introduction

One of the biggest advantages of TypeScript is that it catches errors before running the code. However, using any disables TypeScript’s type checking, which can lead to runtime errors.

Why any is Dangerous
When a variable is typed as any, TypeScript allows any operation on it without checking for errors.

Example:
let value: any = "Arman Hossain";
value.toFixed(2); // No TypeScript error

This compiles successfully, but crashes at runtime because strings do not have a toFixed() method.

Problems with any
1. Bypasses type checking
2. Errors appear only at runtime
3. Defeats the purpose of TypeScript

That is why any is called a type safety hole.

Why unknown is Safer
unknown is a safer alternative because TypeScript forces us to check the type before using the value.

Example:
let value: unknown = "hello";
value.toFixed(2); // Error

We must verify the type first:

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
This process is called type narrowing.

Conclusion
While any removes TypeScript’s safety features, unknown keeps your code safe by forcing proper type checks. For unpredictable data, unknown is always the better choice.