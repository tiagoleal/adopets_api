<!-- <p align="center">
  <a href="#">
   <img alt="Secret Friend" src="https://github.com/tiagoleal/secret_friend/blob/master/app/assets/images/logo.png?raw=true" width="50">
  </a>
</p> -->
<h1 align="center">Adopets Test API</h1>

<p align="center">
  <a href="https://github.com/tiagoleal/adopets_api">
    <img alt="Current Version" src="https://img.shields.io/badge/version-1.0.0 -blue.svg">
  </a>

  <a href="https://nodejs.org/en/">
    <img alt="Node Version" src="https://img.shields.io/badge/node-%3E%3D%2012.18.2-brightgreen" target="_blank">
  </a>
  <a href="https://expressjs.com/pt-br/">
    <img alt="" src="https://img.shields.io/badge/Express-4.17.1-red.svg" target="_blank">
  </a>
  <a href="https://jestjs.io/">
    <img alt="" src="https://img.shields.io/badge/Jest-25.2.3-blue.svg" target="_blank">
  </a>

</p>

## Stack the Project

- **Yarn**
- **NodeJS**
- **ExpressJS**
- **SQLite3**
- **Jest(TDD)**

## Features

- **Authentication:** Login, Logout.
- **Product:** Register, Edit, Delete and list/Seach(Filters by name, description and category), incluir também opção de Paginação.
- **Logs:** Save logs of everything the user does in the API,
  save error logs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have installed on your machine:

- Node
- NPM

### Installing

First step is to install the docker service:

```bash
# Using Ubuntu
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install -y nodejs

# Using Debian, as root
# curl -sL https://deb.nodesource.com/setup_12.x | bash -
# apt-get install -y nodejs

```

For test if the service was installed with succeed, you can run the command for to check de version of Node:

```bash
$ node -v
# Must be have the node version: v12.18.2
$ npm -v
# Must be have the npm version: 6.14.5
```

## First steps

Follow the instructions to have a project present and able to run it locally.
After copying the repository to your machine, go to the project's root site and:

1.  Install dependencies

```
$ yarn install
```

2.  Create database structure

```
$ yarn knex:migrate
$ yarn knex:seed
```

3.  Run Project

```
$ yarn start #production
#ou
$ yarn dev #development
```

## Running the tests

To run the tests just run the following command:

```
$ yarn test
```

## Authors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
[<img src="https://avatars1.githubusercontent.com/u/5727529?s=460&v=4" width="100px;"/><br /><sub><b>Tiago Leal</b></sub>](https://github.com/tiagoleal)<br />
