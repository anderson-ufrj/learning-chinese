import React from 'react'

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-china-red via-white to-brazil-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-pulse-gentle">🇨🇳</div>
        <div className="absolute top-20 right-20 text-6xl animate-pulse-gentle">🇧🇷</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-pulse-gentle">🏮</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse-gentle">🌸</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Chinese Title */}
        <h1 className="font-chinese text-4xl md:text-6xl lg:text-8xl font-bold text-china-red mb-4 animate-fade-in">
          学习中文
        </h1>
        
        {/* Portuguese Title */}
        <h2 className="font-portuguese text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-8 animate-slide-up">
          Aprenda Chinês Mandarim
        </h2>
        
        {/* Subtitle */}
        <p className="font-portuguese text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up">
          Domine o idioma mais falado do mundo com métodos interativos, áudio nativo e exercícios práticos. 
          Comece sua jornada cultural hoje!
        </p>
        
        {/* Flags */}
        <div className="flex justify-center items-center space-x-8 mb-12 animate-fade-in">
          <span className="text-6xl md:text-8xl animate-float">🇨🇳</span>
          <span className="text-4xl md:text-6xl text-china-gold">🤝</span>
          <span className="text-6xl md:text-8xl animate-float" style={{animationDelay: '1s'}}>🇧🇷</span>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button 
            onClick={onGetStarted}
            className="bg-china-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Começar Agora
          </button>
          <button className="border-2 border-china-red text-china-red hover:bg-china-red hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Ver Demonstração
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}