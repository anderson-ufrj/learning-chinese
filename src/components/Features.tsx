import React from 'react'

interface Feature {
  icon: string;
  titleCN: string;
  titlePT: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🎯',
    titleCN: '互动课程',
    titlePT: 'Lições Interativas',
    description: 'Aprenda com exercícios dinâmicos e envolventes que tornam o estudo divertido e eficaz.'
  },
  {
    icon: '🗣️',
    titleCN: '母语发音',
    titlePT: 'Pronúncia Nativa',
    description: 'Treine sua pronúncia com áudio de falantes nativos e melhore seu sotaque chinês.'
  },
  {
    icon: '📚',
    titleCN: '完整课程',
    titlePT: 'Curso Completo',
    description: 'Do básico ao avançado, com conteúdo estruturado para seu progresso contínuo.'
  },
  {
    icon: '🏆',
    titleCN: '成就系统',
    titlePT: 'Sistema de Conquistas',
    description: 'Motive-se com conquistas, badges e progresso visual em sua jornada de aprendizado.'
  },
  {
    icon: '🌍',
    titleCN: '文化学习',
    titlePT: 'Aprendizado Cultural',
    description: 'Descubra a rica cultura chinesa enquanto aprende o idioma, com contexto histórico e social.'
  },
  {
    icon: '📱',
    titleCN: '移动学习',
    titlePT: 'Aprenda em Qualquer Lugar',
    description: 'Acesse seu curso em qualquer dispositivo, aprenda no seu ritmo onde estiver.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-4xl md:text-5xl font-bold text-china-red mb-4">
            学习特点
          </h2>
          <h3 className="font-portuguese text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Por Que Escolher Nosso Curso?
          </h3>
          <p className="font-portuguese text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece uma experiência de aprendizado completa e imersiva, 
            combinando tecnologia moderna com métodos pedagógicos comprovados.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Chinese Title */}
                <h4 className="font-chinese text-2xl font-bold text-china-red mb-2">
                  {feature.titleCN}
                </h4>
                
                {/* Portuguese Title */}
                <h5 className="font-portuguese text-lg font-semibold text-gray-800 mb-4">
                  {feature.titlePT}
                </h5>
                
                {/* Description */}
                <p className="font-portuguese text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="mt-6 h-1 bg-gradient-to-r from-china-red to-brazil-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-brazil-green hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Comece Sua Jornada Agora
          </button>
        </div>
      </div>
    </section>
  )
}