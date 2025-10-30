import { Check, Sparkles, Crown, Rocket } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t.pricing.starter.name,
      icon: Sparkles,
      subtitle: t.pricing.starter.subtitle,
      price: 299,
      period: t.pricing.perMonth,
      description: t.pricing.starter.description,
      features: [
        t.pricing.starter.feature1,
        t.pricing.starter.feature2,
        t.pricing.starter.feature3,
        t.pricing.starter.feature4,
        t.pricing.starter.feature5,
        t.pricing.starter.feature6
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: t.pricing.professional.name,
      icon: Crown,
      subtitle: t.pricing.professional.subtitle,
      price: 799,
      period: t.pricing.perMonth,
      description: t.pricing.professional.description,
      features: [
        t.pricing.professional.feature1,
        t.pricing.professional.feature2,
        t.pricing.professional.feature3,
        t.pricing.professional.feature4,
        t.pricing.professional.feature5,
        t.pricing.professional.feature6,
        t.pricing.professional.feature7,
        t.pricing.professional.feature8
      ],
      popular: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: t.pricing.enterprise.name,
      icon: Rocket,
      subtitle: t.pricing.enterprise.subtitle,
      price: 1999,
      period: t.pricing.perMonth,
      description: t.pricing.enterprise.description,
      features: [
        t.pricing.enterprise.feature1,
        t.pricing.enterprise.feature2,
        t.pricing.enterprise.feature3,
        t.pricing.enterprise.feature4,
        t.pricing.enterprise.feature5,
        t.pricing.enterprise.feature6,
        t.pricing.enterprise.feature7,
        t.pricing.enterprise.feature8,
        t.pricing.enterprise.feature9
      ],
      popular: false,
      color: 'from-purple-500 to-violet-500'
    }
  ];
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.pricing.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.pricing.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-white border-2 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {t.pricing.mostPopular}
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-xl text-gray-500">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => document.getElementById('book-appointment')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                        : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                    }`}
                  >
                    {t.pricing.getStarted}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              {t.pricing.guarantee}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
