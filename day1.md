Day 1.

I learned how to bootstrap a new Nestjs project ( using the documentation for reference )
Here https://docs.nestjs.com/first-steps

The steps include :

1. Installing NestJs cli globally
   Command: `npm i -g @nestjs/cli`

2. Creating New Project
   Command: `nest new project-name`

A NestJs Boiler code looks like this
-src

- app.controller.spec.ts
- app.controller.ts
- app.module.ts
- app.service.ts
- main.ts

- app.controller.ts
  A basic controller with a single route.

- app.controller.spec.ts
  The unit tests for the controller.

- app.module.ts
  The root module of the application.

- app.service.ts
  Basic service with a single method.

- main.ts
  The entry file of the application which uses the core function NestFactory to create a Nest application instance.

Still Wrapping my head around the rest of the file, so far been able to work with the app.controller.ts file and create a .TS file myself.

Moved on to working with different routing methods. GET, POST, PUT, DELETE

I also learned more decorators, using
@Param
for dynamic routing, and using @Body to get values from POST requests.

I Tested my endpoints using POSTMAN
Link: https://documenter.getpostman.com/view/16176152/2s93mAVLRm
