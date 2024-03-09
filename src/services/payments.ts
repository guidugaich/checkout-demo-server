import checkoutHttpProxy from "../infra/http/checkoutHttpProxy";

export async function requestPaymentSession() {
  const data = await checkoutHttpProxy.requestPaymentSession(
    10,
    'USD',
    { address: { country: 'GB' } },
    'success',
    'failure'
  )
  
  console.log('this is the service for payments being called', data);

  return data
}

export default {
  requestPaymentSession
}