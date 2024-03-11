import checkoutHttpProxy from "../infra/http/checkoutHttpProxy";

async function requestPaymentSession(
  amount: number,
  country: string,
  currency: string
) {
  const data = await checkoutHttpProxy.requestPaymentSession(
    amount,
    currency,
    country,
    'https://example.com/payments/success',
    "https://example.com/payments/failure"
  );

  return data
}

async function requestHostedPaymentPage(
  amount: number,
  country: string,
  currency: string
) {
  const data = await checkoutHttpProxy.requestHostedPaymentPage(
    amount,
    currency,
    country,
    'https://guidugaich.github.io/checkout-demo-client/success',
    "https://guidugaich.github.io/checkout-demo-client/failure",
    "https://guidugaich.github.io/checkout-demo-client/cancel"
  );

  return data
}

export default {
  requestPaymentSession,
  requestHostedPaymentPage
};
