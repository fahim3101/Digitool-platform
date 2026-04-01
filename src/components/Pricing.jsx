import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      button: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      button: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      button: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan, index) => (
          <div key={index} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-[#8b5cf6] bg-[#8b5cf6] text-white shadow-2xl scale-105 z-10' : 'border-gray-100 bg-gray-50 text-gray-800'}`}>
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-[10px] font-bold px-4 py-1 rounded-full border border-orange-200">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className={`text-sm mb-8 ${plan.popular ? 'text-purple-100' : 'text-gray-500'}`}>{plan.desc}</p>
            
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-extrabold">${plan.price}</span>
              <span className={`text-sm font-medium ${plan.popular ? 'text-purple-100' : 'text-gray-500'} mb-2`}>/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center text-sm font-medium">
                  <svg className={`w-4 h-4 mr-3 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition shadow-md ${plan.popular ? 'bg-white text-[#8b5cf6] hover:bg-gray-50' : 'bg-[#8b5cf6] text-white hover:bg-[#7c3aed]'}`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;