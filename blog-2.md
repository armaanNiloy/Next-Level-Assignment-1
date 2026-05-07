Using Pick and Omit in TypeScript

Introduction
Pick and Omit are powerful TypeScript utility types that help developers write cleaner and more maintainable code. Instead of creating multiple similar interfaces manually, these utilities allow us to create specialized versions of an existing interface without duplication.

Using Pick
Suppose we have a User interface:
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

If we only need specific properties, we can use Pick:

type PublicUser = Pick<User, "id" | "name">;
This creates a new type containing only id and name.

Using Omit
If we want to remove sensitive properties like password, we can use Omit:

type SafeUser = Omit<User, "password">;
This creates a type with all properties except password.

Conclusion

Pick and Omit help keep code DRY (Don’t Repeat Yourself) by using the original interface as the single source of truth. If the main interface changes, all derived types update automatically, reducing duplication and improving maintainability.