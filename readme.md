# Validate lead project

## Overview

This project is a lead validator. In short, it has a form that you will fill with client's data. Each field has validation that decides if the form will be sent to the API stub. If all data is correct, the user will request the stub if the client is an eligible for a loan.

### To be eligible, a client needs to have 3 conditions:

1. All his information (name, email, and national ID) should match the data in the database stub.

2. The client can't have any legal processes active.

3. The client's SCORE should be bigger than 70.

## Archtecture

I used `feature driven archtecture` which divided the project in 2 main folders.

- config
  Has the main configurations, providers, mocks, router, context, theme and axios config.

- features
  Has The modules that split the UI and logic in folders to avoid dependency between big parts of code, this way will be easier to create microfrontends from each module for don't have dependency in other modules(except common).

_For example:_

`main` module has the main screens like `LeadValidation.tsx` and `LeadStatus.tsx`, with its components, helpers, hooks, reducers, slices, and services that will only be used in this module.

`common` module has the reused components, helpers, and logic across modules.

`auth` module was created just to capture the idea of other modules that could be here in this project, this module could have `signIn.tsx`, `signUp.tsx` and other screens outside authenticated routes.

### Form validations

Name field: Can't be empty and needs to have at least 3 letters.

E-mail field: Has to have a valid e-mail and can't be empty.

National ID: Can't be empty, has to be numbers and has the minimum of 3 numbers.

### Mock API

I am using `miragejs` as stub to mock the API and axios to make the requests and `contextAPI` for sharing information between screens.

**In the simulated API, I created 3 clients.**

_Not eligible clients:_

John: Has no legal processes actives, but has a 40 score, which is below the minimum.

Alice: Has legal processes and as a result, she is not eligible.

_Eligible clients_

Bob: He has a 80 score and no processes active.

### Data API

```ts
    {
      name: "Bob",
      email: "bob@bob.com",
      nationalId: 123,
      score: 80,
    },
    {
      name: "Alice",
      email: "alice@alice.com",
      nationalId: 456,
      score: 10,
    },
    {
      name: "John",
      email: "john@john.com",
      nationalId: 789,
      score: 40,
    },
```

## Unit tests

This project is using `jest` and `testing library`.

71% code coverage

## Scripts

`npm start`
`npm run test`
`npm run test:coverage`
