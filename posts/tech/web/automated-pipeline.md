<img src="/img/automated-pipeline.jpg" title="automated-pipeline" class="post-first-image" />

# How I deploy to production - My automated CI/CD Pipeline

&nbsp;

In this post, I will detail about how I send something to production and the decisions I took along the way.

I follow a 9 step workflow to production - **Code, Lint, Unit Test, Build, Stage, Cross Browser Test, E2E Test, Performance Test and Deploy**.
I use Circle CI as the CI provider and Firebase as the backend.

## Code
I Code. I try to split things into pure functions. I support them using unit tests. I dont waste time testing React or Redux. They are already tested. Once done, I push the code to Github. I have enforced commit liniting to check all of the code is syntactically good. Github is configured with Circle CI.

## Linting
All lint checks are performed as part of a pre-commit hook as well as in CI.

## Unit test
Every code push triggers a unit test in Circle CI. I chose Circle CI over Travis CI because the former was way faster than the latter. I am also trying out Github Actions these days. The code coverange report is then sent to Codecov.

## Build
The next stage is Building the code. Circle CI tries to build the code. If it fails, it stops there.

## Stage
Once the build succeeds, the next step is to stage it in the staging server. I have scripts which deploy the code to the test environments.

## Cross-browser Test
Once staged, all the unit tests are performed in various browsers using Browserstack.

## E2E Test
I perform a bunch of end to end tests using Cypress to check if everything is fine.

## Performance Test
The next step is to test for performance using Lighthouse and/or Puppetter.

## Deploy
Once all of the above pass, the change is then deployed to production.

&nbsp;

# Decision Points

## What Git workflow do I use?

Currently with me being the only developer, I use a Feature branch workflow when I change something existing. When the team expands, I will switch to a Gitflow workflow.

### How do I decide which branch gets deployed to production?

For all branches except master, only the first 6 are perfomed. The last deploy is done only for the master branch.

### What would happen when multiple branches are being built more or less at the same time?

This is a problem I will face in the future. Currently with me being the only developer, I dont face this issue. But when 2 branches get built and deployed in staging, one may override the other. It is a problem I will have to solve in the future.

### What is the solution to the above problem?

- One thing I could do is build synchronously. But thats inefficient.

- One thing could be to avoid steps 5 - 9 altogether. But that partially defeats the purpose in that the branches wont be tested for performance issues, only master will be.

- One other thing I could do is have firebase projects for each new branch. This way, each branch will have its own backend and frontend. This could be the right solution but the process of creating and deleting firebase projects is manual. Not feasible.

For now, the only feasible solution for me seems to be option 2.