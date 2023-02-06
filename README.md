# special-umbrella - Test Repo for Prisma Client Extensions error


When Prisma Client Extensions are enabled on version [4.9.0](https://github.com/prisma/prisma/milestone/106), Typescript can no longer compute the types of Prisma objects properly.

This repo aims to reproduce this problem as minimally as possible for further investigation.  What this shows is that the most basic objects fail to properly generate their types with Prisma once Client Extensions are enabled and that Prisma is impossible to use with Typescript once this feature flag is turned on.  The repo comes with client extensions enabled, to demonstrate the problem.  In step 3 below, you will see how to disable client extensions to show that otherwise this repo will run properly.


1) To Install

- Clone the repo to a new folder
- Run `npm ci`
- Run `npx prisma generate`
- Run `npx prisma migrate dev` (assuming you have a local postgres database running - this is not strictly necessary to reproduce the problem but does make things easier for proving normal operation).

2) To Demonstrate the Bug

- Run `ts-node test.ts`.  Typescript will fail to compile.  You will get the error:

```
TSError: ⨯ Unable to compile TypeScript:
test.ts:20:29 - error TS2339: Property 'toString' does not exist on type 'never'.

20   console.log(taskResult.id.toString());
```

3) To Test Normal Operation (Control)

- Open [schema.prisma](prisma/schema.prisma) and remove the line which reads 'previewFeatures = ["clientExtensions"]'.
- Rerun `npx prisma generate`
- Run `ts-node test.ts`.  The script should output a single integer and then exit.  (Note: if no database is installed, you should get an error connecting to the database)




