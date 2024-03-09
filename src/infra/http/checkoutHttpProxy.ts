export async function requestPaymentSession(
  amount: number,
  currency: string,
  billing: { address: { country: string } },
  success_url: string,
  failure_url: string,
) {
  // const data = await fetch("https://google.com");

  return 'bode'
}

export default {
  requestPaymentSession
}