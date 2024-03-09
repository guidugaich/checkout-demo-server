import checkoutHttpProxy from "../infra/http/checkoutHttpProxy";

export async function requestPaymentSession(
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

export default {
  requestPaymentSession
};
