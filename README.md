# AWS Workshop

## Prerequisities

* Serverless: `npm install -g serverless`
* AWS configured: `aws configure`

## Before first deployment

* Install dependencies `yarn install` (preferable) or `npm install`
* Copy `serverless.env.yml.dist` to `serverless.env.yml` and fill it correctly if needed

    `cp serverless.env.yml.dist serverless.env.yml`

## Commands

* `sls deploy` - to create a stack and deploy an application using the default AWS profile
* `sls remove` - to remove a stack
* `yarn test` - to perform unit tests
* `yarn run tdd` - to perform unit tests with watch mode
