
# Cypress.js test suite for MaPS/MoneyHelper

Available for all projects, including MoneyHelper Core, DTT and MaPS corporate.

## Prerequisites 

- Install and Setup Node.js from [here](https://nodejs.org/en)

## Setup

- Clone this repo: ``git clone https://github.com/moneyadviceservice/moneyhelper_cypress_js.git``
- cd into the project: ``cd path/to/moneyhelper_cypress_js``
- Install dependencies: ``yarn``

## Running tests

- Run headless: ``yarn cypress run``
- Run app: ``yarn cypress open``

## Running on Github

The github action is already set up, however there is a current unknown around the environment varibles for local vs running on github, currently base urls are set in the individual test spec for local development.  The github variabled exist and are callabale, but commented out, for example:

```
// const baseUrl = Cypress.env('DTT_BASEURL')
const baseUrl = 'https://adviser.moneyhelper.org.uk/en'
```
