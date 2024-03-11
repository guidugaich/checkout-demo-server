import dotenv from 'dotenv'; 

dotenv.config();

const config = {
    checkout: {
        secretKey: process.env.CHECKOUT_SECRET_KEY,
        processingChannelId: process.env.CHECKOUT_PROCESSING_CHANNEL_ID,
        baseUrl: process.env.CHECKOUT_BASE_URL,
        paymentSessiosPath: '/payment-sessions',
        hostedPaymentsPath: '/hosted-payments'
    }
}

export default config;