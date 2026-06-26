import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const { priceId } = await request.json()
    
    console.log('Price ID received:', priceId)
    console.log('Stripe key exists:', !!process.env.STRIPE_SECRET_KEY)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: 'http://www.redpenclub.co.uk/tools?upgraded=true',
      cancel_url: 'http://www.redpenclub.co.uk/upgrade',
    })

    console.log('Session created:', session.url)
    return Response.json({ url: session.url })

  } catch (error) {
    console.error('Stripe error details:', error.message)
    return Response.json({ error: error.message }, { status: 500 })
  }
}