const faqs = [
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking number provided in your confirmation email.",
  },
  {
    question: "What are your customer service hours?",
    answer: "Our team is available 24/7 to assist you.",
  },
  {
    question: "How do I change my delivery address?",
    answer: "Contact our support team immediately to update your address.",
  },
];

const FAQ = () => (
  <div className="max-w-4xl mx-auto my-10 px-4">
    <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border-b pb-4">
          <h3 className="font-semibold text-lg">{faq.question}</h3>
          <p className="text-gray-600 mt-1">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);
export default FAQ;
