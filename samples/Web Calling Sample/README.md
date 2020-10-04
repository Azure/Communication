# Azure Communication Services Calling SDK For Javascript

## Before starting - tools you'll need to run the sample

1. [npm](https://www.npmjs.com/get-npm)
2. [Node.js](https://nodejs.org/en/download/)

## Code structure

* ./src: client side source code
* ./webpack.config.js: Project bundler. Has a simple local server for user token provisioning.
* ./config.json: configuration file for specifying the connectiong string.

## Running the sample

1. npm install
2. Get a connection string by provisioning an Azure Communication Services resource from the Azure portal. Use the connection string as value for key `connectionString` in config.json file.
3. npm run build
4. npm run start
