import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
      <p className="mb-8">Your order has been received and is being processed.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYou;