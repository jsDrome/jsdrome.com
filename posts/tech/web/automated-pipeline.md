# How I deploy to production - My automated CI/CD Pipeline

#### Aug 24, 2019 by Sreeram Padmanabhan

![automated pipeline](/img/automated-pipeline.jpg "automated pipeline")

## Summary

In this post, I will detail about how I send something to production and the decisions I took along the way.

I follow a 8 step workflow to production - **Code, Unit Test, Build, Stage, Cross Browser Test, Regression Test, Performance Test, Deploy**.
I use Circle CI as the CI provider and Firebase as the backend.

## Code
I Code. I try split things into pure functions. I support them using unit tests. I dont waste time testing React or Redux. They are already tested. Once done, I push the code to Github. I have enforced commit liniting to check all of the code is syntactically good.

## Unit test
Github is configured with Circle CI. Every push generates triggers a unit test in Circle CI. I chose Circle CI over Travis CI because the former was way faster than the latter.

## Build
The next stage is Building the code. Circle CI tries to build the code. If it fails, it stops there.

## Stage
The next step is to stage it in the test server. I have scripts which deploy the code to the test environments.

## Regression Test
All the unit tests are performed in various browsers using Browserstack.

## Regression Test
I perform a bunch of regression tests using Cypress to check if everything is fine.

## Performance Test
Once staged, the next step is to test for performance using Lighthouse and/or Puppetter.

## Deploy
Once all of the above pass, the change is then deployed to production.

&nbsp;

# Decision Points

## What Git workflow do I use?

Currently with me being the only developer, I use a Feature branch workflow when I change something existing. When the team expands, I will switch to a Gitflow workflow.

### How do I decide which branch gets deployed to production?

For all branches except master, only the first 6 are perfomed. The last deploy is done only for the master branch.

### What would happen when multiple branches are being built more or less at the same time?

This is a problem I will face in the future. Currently with me being the only developer, I dont face this issue. But when 2 branches get built and deployed in test, one may override the other. It is a problem I have kept for the future.

### What is the solution to the above problem?

- One thing I could do is build synchronously. But thats inefficient.

- One thing could be to avoid steps 5 and 6 altogether. But that partially defeats the purpose in that the branches wont be tested for performance issues, only master will be.

- One other thing I could do is have firebase projects for each new branch. This way, each branch will have its own backend and frontend. This could be the right solution but the process of creating and deleting firebase projects is manual. Not feasible.

For now, the only feasible solution for me seems to be option 2.