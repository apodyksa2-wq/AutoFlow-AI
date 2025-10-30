import { Building2, Users2, Building } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Solutions() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Building2,
      title: t.solutions.small.title,
      subtitle: t.solutions.small.subtitle,
      description: t.solutions.small.description,
      features: [
        t.solutions.small.feature1,
        t.solutions.small.feature2,
        t.solutions.small.feature3,
        t.solutions.small.feature4,
        t.solutions.small.feature5
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Users2,
      title: t.solutions.mid.title,
      subtitle: t.solutions.mid.subtitle,
      description: t.solutions.mid.description,
      features: [
        t.solutions.mid.feature1,
        t.solutions.mid.feature2,
        t.solutions.mid.feature3,
        t.solutions.mid.feature4,
        t.solutions.mid.feature5
      ],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Building,
      title: t.solutions.enterprise.title,
      subtitle: t.solutions.enterprise.subtitle,
      description: t.solutions.enterprise.description,
      features: [
        t.solutions.enterprise.feature1,
        t.solutions.enterprise.feature2,
        t.solutions.enterprise.feature3,
        t.solutions.enterprise.feature4,
        t.solutions.enterprise.feature5
      ],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.solutions.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.solutions.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${solution.bgColor} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/50`}
              >
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-xl"></div>

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {solution.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => document.getElementById('book-appointment')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`mt-8 w-full bg-gradient-to-r ${solution.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    {t.solutions.getStarted}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
