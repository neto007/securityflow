"use client"

import { useState } from 'react';

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState('Pro Plan');
  const [paymentMethod, setPaymentMethod] = useState('Visa ending in 1234');
  const [billingHistory, setBillingHistory] = useState([
    { date: '2023-05-01', amount: '$29.99', status: 'Paid' },
    { date: '2023-04-01', amount: '$29.99', status: 'Paid' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Billing Settings</h1>
      <div className="bg-white dark:bg-stone-900/30 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Current Plan</h2>
        <p className="mb-4 dark:text-gray-300">You are currently on the <strong>{currentPlan}</strong>.</p>
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Payment Method</h2>
        <p className="mb-4 dark:text-gray-300">Your current payment method is: <strong>{paymentMethod}</strong></p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update Payment Method
        </button>
        <h2 className="text-xl font-semibold mt-6 mb-4 dark:text-gray-200">Billing History</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left pb-2 dark:text-gray-200">Date</th>
              <th className="text-left pb-2 dark:text-gray-200">Amount</th>
              <th className="text-left pb-2 dark:text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 dark:text-gray-300">{entry.date}</td>
                <td className="py-2 dark:text-gray-300">{entry.amount}</td>
                <td className="py-2 dark:text-gray-300">{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}