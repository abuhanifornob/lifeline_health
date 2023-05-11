import stripe from 'stripe';
// import Order from '../../models/order';

const stripeInstance = stripe('sk_test_51MCN69C9sNnUAXts16CfGsiBAnY8u3PEDyLSy9rroep4gqAvkSw1hBqJ3JvGRYCfLwwOhaWMYbbxP6j19zqDjv1z00727gQnKh');

export default async function handler(req, res) {
  const  items  = req.body;
  const amount = calculateAmount(items.price);
  try {
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: 'usd',
      "payment_method_types": [
        "card"
     ]
    });

    // const order = new Order({
    //   user: req.user._id,
    //   items,
    //   amount
    // });

    // await order.save();

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order' });
  }
}

function calculateAmount(items) {
  // Calculate the total amount based on the items and their prices
  return items * 100 ;
}
