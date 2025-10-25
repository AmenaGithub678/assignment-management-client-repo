import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 30,
    color: "bg-red-500",
    features: [
      "Strategic Alliance",
      "Growth Expansion",
      "Business Planning",
      "Contract Negotiation",
      "Market Positioning",
    ],
  },
  {
    name: "Standard",
    price: 60,
    color: "bg-blue-500",
    badge: "POPULAR",
    features: [
      "Strategic Alliance",
      "Growth Expansion",
      "Business Planning",
      "Contract Negotiation",
      "Market Positioning",
    ],
  },
  {
    name: "Premium",
    price: 75,
    color: "bg-orange-500",
    features: [
      "Strategic Alliance",
      "Growth Expansion",
      "Business Planning",
      "Contract Negotiation",
      "Market Positioning",
    ],
  },
  {
    name: "Professional",
    price: 99,
    color: "bg-emerald-500",
    features: [
      "Strategic Alliance",
      "Growth Expansion",
      "Business Planning",
      "Contract Negotiation",
      "Market Positioning",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Best Offers
          </h2>
          <p className="text-2xl font-semibold mt-2 text-gray-700">
            Course Pricing
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl shadow-md border hover:shadow-2xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {plan.badge}
                </span>
              )}

              {/* Header */}
              <div className={`${plan.color} text-white rounded-t-2xl py-6`}>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 text-gray-800">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-600"> /month</span>
                </div>

                <ul className="text-gray-600 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-full border-2 border-gray-700 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
                >
                  Get Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
