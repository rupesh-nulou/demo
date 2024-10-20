const plans = [
  {
    name: 'Basic',
    price: '$199',
    features: [
      '3 Logo Concepts',
      '3 Revisions',
      'File Formats: JPG, PNG',
      '3 Day Delivery',
    ],
  },
  {
    name: 'Standard',
    price: '$399',
    features: [
      '5 Logo Concepts',
      '5 Revisions',
      'File Formats: AI, EPS, PDF, PNG, JPG',
      '5 Day Delivery',
      'Social Media Kit',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$999',
    features: [
      '8 Logo Concepts',
      'Unlimited Revisions',
      'All File Formats',
      '7 Day Delivery',
      'Social Media Kit',
      'Brand Guidelines',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-secondary py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Pricing Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-accent rounded-lg p-8 ${plan.featured ? 'border-2 border-primary' : ''}`}>
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded ${plan.featured ? 'bg-primary text-secondary' : 'bg-transparent border border-primary text-primary'} hover:bg-primary hover:text-secondary transition duration-300`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}