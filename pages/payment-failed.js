import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentFailed = () => {
  // Mock payment error data
  const paymentError = {
    orderId: 'ORD-2024-001',
    errorCode: 'PAYMENT_DECLINED',
    errorMessage: 'Your payment was declined by your bank. Please try a different payment method.',
    amount: 877.80,
    timestamp: '2024-01-15T14:30:00Z'
  };

  const retryPayment = () => {
    // Retry payment logic here
    console.log('Retrying payment...');
  };

  const contactSupport = () => {
    // Contact support logic here
    console.log('Contacting support...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Failed</h1>
          <p className="text-gray-600">We couldn't process your payment. Don't worry, your order hasn't been placed.</p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Error Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Order Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Order Number:</span>
                  <span className="font-medium text-gray-900">{paymentError.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium text-gray-900">${paymentError.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Error Time:</span>
                  <span>{new Date(paymentError.timestamp).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Error Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Error Code:</span>
                  <span className="font-medium text-red-600">{paymentError.errorCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-red-600 font-medium">Failed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 mb-3">What Happened?</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">{paymentError.errorMessage}</p>
            </div>
          </div>
        </div>

        {/* Common Payment Issues */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Common Payment Issues</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Insufficient Funds</h3>
                <p className="text-sm text-gray-600">Your account may not have enough funds to complete the transaction.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Card Expired</h3>
                <p className="text-sm text-gray-600">Your credit or debit card may have expired or is invalid.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Security Verification</h3>
                <p className="text-sm text-gray-600">Your bank may have declined the transaction for security reasons.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Incorrect Information</h3>
                <p className="text-sm text-gray-600">Card number, expiry date, or CVV may be incorrect.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">How to Fix This</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Check Your Payment Method</h3>
                <p className="text-sm text-blue-700">Verify your card details and ensure it's not expired or blocked.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Contact Your Bank</h3>
                <p className="text-sm text-blue-700">Your bank may have declined the transaction. Contact them to authorize it.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Try a Different Method</h3>
                <p className="text-sm text-blue-700">Use a different card or payment method like PayPal or Apple Pay.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={retryPayment}
            className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Try Payment Again
          </button>
          <button
            onClick={contactSupport}
            className="flex-1 sm:flex-none border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact Support
          </button>
        </div>

        {/* Alternative Actions */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Or you can:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/cart" className="text-blue-600 hover:text-blue-700 font-medium">
              Return to Cart
            </a>
            <a href="/products" className="text-blue-600 hover:text-blue-700 font-medium">
              Continue Shopping
            </a>
            <a href="/profile" className="text-blue-600 hover:text-blue-700 font-medium">
              View Orders
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/help" className="text-blue-600 hover:text-blue-700 font-medium">
              Help Center
            </a>
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact Support
            </a>
            <a href="tel:+1-800-123-4567" className="text-blue-600 hover:text-blue-700 font-medium">
              Call Us: 1-800-123-4567
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentFailed;

