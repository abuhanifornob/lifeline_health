import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe';
import CheckoutForm from './CheckoutForm';

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm  />
    </Elements>
  );
};

export default CheckoutPage;
