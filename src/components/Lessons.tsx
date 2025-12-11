import React from 'react'

interface Lesson {
  id: number;
  icon: string;
  titleCN: string;
  titlePT: string;
  description: string;
  examples: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    icon: '👋',
    titleCN: '问候',
    titlePT: 'Saudações',
    description: 'Aprenda as saudações básicas em chinês para iniciar conversas.',
    examples: ['你好 (nǐ hǎo) - Olá', '再见 (zài jiàn) - Tchau', '谢谢 (xiè xiè) - Obrigado'],
    difficulty: 'beginner',
    duration: '15 min'
  },
  {
    id: 2,
    icon: '🔢',
    titleCN: '数字',
    titlePT: 'Números',
    description: 'Domine os números de 1 a 100 e aprenda a contar em chinês.',
    examples: ['一 (yī) - Um', '二 (èr) - Dois', '十 (shí) - Dez'],
    difficulty: 'beginner',
    duration: '20 min'
  },
  {
    id: 3,
    icon: '👨‍👩‍👧‍👦',
    titleCN: '家庭',
    titlePT: 'Família',
    description: 'Conheça os membros da família e suas relações em chinês.',
    examples: ['爸爸 (bà ba) - Pai', '妈妈 (mā ma) - Mãe', '家人 (jiā rén) - Família'],
    difficulty: 'beginner',
    duration: '25 min'
  },
  {
    id: 4,
    icon: '🌈',
    titleCN: '颜色',
    titlePT: 'Cores',
    description: 'Aprenda as cores básicas e como descrever objetos coloridos.',
    examples: ['红色 (hóng sè) - Vermelho', '蓝色 (lán sè) - Azul', '绿色 (lǜ sè) - Verde'],
    difficulty: 'beginner',
    duration: '18 min'
  },
  {
    id: 5,
    icon: '🍜',
    titleCN: '食物',
    titlePT: 'Comidas',
    description: 'Explore a culinária chinesa e aprenda os nomes dos alimentos.',
    examples: ['米饭 (mǐ fàn) - Arroz', '面条 (miàn tiáo) - Macarrão', '茶 (chá) - Chá'],
    difficulty: 'intermediate',
    duration: '30 min'
  },
  {
    id: 6,
    icon: '📅',
    titleCN: '星期',
    titlePT: 'Dias da Semana',
    description: 'Aprenda os dias da semana e expressões de tempo.',
    examples: ['星期一 (xīng qī yī) - Segunda', '今天 (jīn tiān) - Hoje', '明天 (míng tiān) - Amanhã'],
    difficulty: 'intermediate',
    duration: '22 min'
  }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-800'
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'advanced':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getDifficultyPT = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'Iniciante'
    case 'intermediate':
      return 'Intermediário'
    case 'advanced':
      return 'Avançado'
    default:
      return 'Desconhecido'
  }
}

export default function Lessons() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-4xl md:text-5xl font-bold text-china-red mb-4">
            课程
          </h2>
          <h3 className="font-portuguese text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Lições Disponíveis
          </h3>
          <p className="font-portuguese text-lg text-gray-600 max-w-3xl mx-auto">
            Comece sua jornada com nossas lições estruturadas, desde o básico até tópicos mais avançados. 
            Cada lição inclui áudio, exercícios e prática interativa.
          </p>
        </div>
        
        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <div 
              key={lesson.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {lesson.icon}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(lesson.difficulty)}`}>
                    {getDifficultyPT(lesson.difficulty)}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {lesson.duration}
                  </span>
                </div>
              </div>
              
              {/* Chinese Title */}
              <h4 className="font-chinese text-2xl font-bold text-china-red mb-2">
                {lesson.titleCN}
              </h4>
              
              {/* Portuguese Title */}
              <h5 className="font-portuguese text-lg font-semibold text-gray-800 mb-3">
                {lesson.titlePT}
              </h5>
              
              {/* Description */}
              <p className="font-portuguese text-gray-600 text-sm mb-4 leading-relaxed">
                {lesson.description}
              </p>
              
              {/* Examples */}
              <div className="mb-4">
                <h6 className="font-portuguese text-sm font-semibold text-gray-700 mb-2">
                  Exemplos:
                </h6>
                <ul className="space-y-1">
                  {lesson.examples.map((example, idx) => (
                    <li key={idx} className="font-chinese text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Button */}
              <button className="w-full bg-china-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Iniciar Lição
              </button>
              
              {/* Progress Bar (placeholder) */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progresso</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-china-red h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-portuguese text-lg text-gray-600 mb-6">
            Pronto para começar sua jornada no aprendizado do chinês?
          </p>
          <button className="bg-china-gold hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Começar Primeira Lição
          </button>
        </div>
      </div>
    </section>
  )
}