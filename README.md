# Validately - Job Assessment

## Requirements

* [NodeJS](https://nodejs.org/en/download "NodeJS")

## Presteps

You have to use the following command to install dependencies:

```sh
npm install
```

or if you have installed yarn

```sh
yarn
```

See `package.json` for more details about used packages.

## Build for local development

You have to use the following command to start a development server:

```sh
npm run start
```

or if you have installed yarn

```sh
yarn start
```

## Build for staging and production environments

You have to use the following command to start a development server:

```sh
npm run build
```

or if you have installed yarn

```sh
yarn build
```

## Tests

Following tests libraries are used for unit/integration tests:
* [Enzyme](https://github.com/airbnb/enzyme "Enzyme")
* [Jest](https://jestjs.io/ "Jest")

Tests are kept next to source with following pattern *.spec.js

Use following command to run tests:

```sh
npm test
```

or if you have installed yarn

```sh
yarn test
```

## Assessment solution description

Solution for that assessment is very simple. At the initialization of the application there's fired a redux action to get initial details about timezones throught moment-timezone library. Through that library application is guessing a user timezone and set current time as a default selected timezone based on which other timezones (including second default one GMT) times would be calculated.

Both of the timezones GMT and guessed user timezone is non deletable - user can't remove them but still can operate to calculate time in different timezones and highligh based on which timezone other timezones are calculated.

Each selected timezone is stored in Redux state and operations like modyfing time, adding new timezone and removing timezone is done in Redux actions.