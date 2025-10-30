import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import LanguageSelector from '@/react-app/components/LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AutoFlow AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.header.features}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.header.solutions}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.header.pricing}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t.header.testimonials}
            </button>
            <LanguageSelector />
            <button
              onClick={() => scrollToSection('book-appointment')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {t.header.bookConsultation}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.header.features}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.header.solutions}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.header.pricing}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                {t.header.testimonials}
              </button>
              <div className="flex justify-center">
                <LanguageSelector />
              </div>
              <button
                onClick={() => scrollToSection('book-appointment')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 w-full text-center shadow-lg"
              >
                {t.header.bookConsultation}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
