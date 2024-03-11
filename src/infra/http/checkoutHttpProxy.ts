import config from "../../config";

async function requestPaymentSession(
  amount: number,
  currency: string,
  country: string,
  success_url: string,
  failure_url: string,
) {
  const url = `${config.checkout.baseUrl}${config.checkout.paymentSessiosPath}`
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.checkout.secretKey}`
    },
    body: JSON.stringify({
      amount,
      currency,
      billing: {
        address: {
          country 
        }
      },
      success_url,
      failure_url,
      processing_channel_id: config.checkout.processingChannelId
    })
  })
    .then((res) => res.json())
    .then(data =>  data)

  return data
}

async function requestHostedPaymentPage(
  amount: number,
  currency: string,
  country: string,
  success_url: string,
  failure_url: string,
  cancel_url: string
) {
  const url = `${config.checkout.baseUrl}${config.checkout.hostedPaymentsPath}`
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.checkout.secretKey}`
    },
    body: JSON.stringify({
      amount,
      currency,
      billing: {
        address: {
          country 
        }
      },
      success_url,
      failure_url,
      cancel_url,
      processing_channel_id: config.checkout.processingChannelId
    })
  })
    .then((res) => res.json())
    .then(data =>  data)

  return data
}

export default {
  requestPaymentSession,
  requestHostedPaymentPage
}