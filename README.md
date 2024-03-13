# Checkout T-Shirt Store - Backend server

This is a Node.js/Typescript API that uses `express.js` to manage the backend logic for the [front-end application](https://github.com/guidugaich/checkout-demo-client)

## Get started
First, fill the `.env` file with the variables present in the `.env.example` and use the appropriate values

To serve the API locally, run the commands:

``` javascript
nvm use // to set node version to 20.11.1
npm install // to install dependencies
npm run dev // to serve the project on http://localhost:3000/
```

## Endpoints
The API has 3 endpoints, to be found in the `src/routers` folder:

`/` : healthcheck, should return  `{ "message": "health OK" }`

`/request-payment-session` : requests a payment session to be used to build a payment component to the Checkout.com API, in the sandbox environment.

`/request-hosted-payment-page` : requests the data necessary to generate a hosted payment page, also in Checkout.com's sandbox API.

## Architecture

The project uses a simple layer architecture, with routers, controllers, services and infra (http calls)

No database is being used, because the only external data needed is coming from `https://api.sandbox.checkout.com`





