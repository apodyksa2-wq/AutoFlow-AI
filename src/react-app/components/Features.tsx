import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  Users,
  MessageSquare,
  Database,
  Workflow
} from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t.features.feature1Title,
      description: t.features.feature1Desc,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: t.features.feature2Title,
      description: t.features.feature2Desc,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: t.features.feature3Title,
      description: t.features.feature3Desc,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: t.features.feature4Title,
      description: t.features.feature4Desc,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: t.features.feature5Title,
      description: t.features.feature5Desc,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: t.features.feature6Title,
      description: t.features.feature6Desc,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MessageSquare,
      title: t.features.feature7Title,
      description: t.features.feature7Desc,
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Database,
      title: t.features.feature8Title,
      description: t.features.feature8Desc,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Workflow,
      title: t.features.feature9Title,
      description: t.features.feature9Desc,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.features.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.features.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
