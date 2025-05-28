import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, CreditCard, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubscriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/chat');
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-purple-600 transition mb-6"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back
            </button>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-6">
                <h1 className="text-2xl font-bold">Subscribe to StudentConnect</h1>
                <p className="text-purple-100 mt-2">Get full access to all chat rooms and features</p>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Subscription Benefits</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">Full access to all country chat rooms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">Send messages to any chat room</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">Create private conversations with other students</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">Share documents and study materials</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Payment Information</h2>
                    <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                      Rs. 55/month
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Name on card"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-10"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          id="expiry"
                          value={expiry}
                          onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                        <input
                          type="text"
                          id="cvc"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6 bg-blue-50 p-3 rounded-md border border-blue-100 flex items-start">
                      <Shield className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-blue-700">
                        Your payment information is secured with industry-standard encryption. We do not store your full card details.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className={`w-full py-3 px-4 rounded-md font-medium text-white bg-purple-600 hover:bg-purple-700 transition duration-300 flex items-center justify-center
                                ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isProcessing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Payment...
                        </span>
                      ) : (
                        'Subscribe Now'
                      )}
                    </button>
                    
                    <p className="mt-4 text-sm text-gray-500 text-center">
                      By subscribing, you agree to our Terms of Service and Privacy Policy.
                      You can cancel your subscription at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionPage;