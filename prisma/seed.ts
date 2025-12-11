import { PrismaClient, TrackType, LessonType, Difficulty, QuizType, AchievementType } from '@prisma/client'

const prisma = new PrismaClient()

// HSK1 Track Data
const hsk1Track = {
  slug: 'hsk1',
  titleCN: 'HSK 1',
  titlePT: 'HSK 1 - Iniciante',
  descriptionPT: 'Domine as 150 palavras essenciais do HSK 1 e construa uma base sólida para seu aprendizado de chinês.',
  icon: '🌟',
  color: '#DE2910',
  type: TrackType.HSK,
  hskLevel: 1,
  totalLessons: 10,
  totalVocabulary: 75,
  estimatedHours: 15,
  isPublished: true,
}

// Modules for HSK1
const hsk1Modules = [
  {
    slug: 'hsk1-basics',
    titleCN: '基础',
    titlePT: 'Fundamentos',
    descriptionPT: 'Comece com as palavras mais essenciais do chinês',
    icon: '📚',
    order: 1,
  },
  {
    slug: 'hsk1-people',
    titleCN: '人物',
    titlePT: 'Pessoas',
    descriptionPT: 'Vocabulário relacionado a família e pessoas',
    icon: '👨‍👩‍👧‍👦',
    order: 2,
  },
  {
    slug: 'hsk1-time',
    titleCN: '时间',
    titlePT: 'Tempo',
    descriptionPT: 'Aprenda a falar sobre tempo, dias e datas',
    icon: '🕐',
    order: 3,
  },
  {
    slug: 'hsk1-daily',
    titleCN: '日常',
    titlePT: 'Dia a Dia',
    descriptionPT: 'Vocabulário para situações do cotidiano',
    icon: '☀️',
    order: 4,
  },
]

// Lessons for HSK1
const hsk1Lessons = [
  // Basics module
  {
    moduleSlug: 'hsk1-basics',
    slug: 'hsk1-greetings',
    titleCN: '问候',
    titlePT: 'Cumprimentos',
    descriptionPT: 'Aprenda a cumprimentar pessoas em chinês',
    icon: '👋',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 15,
    xpReward: 50,
    order: 1,
  },
  {
    moduleSlug: 'hsk1-basics',
    slug: 'hsk1-numbers',
    titleCN: '数字',
    titlePT: 'Números',
    descriptionPT: 'Aprenda a contar de 1 a 10 em chinês',
    icon: '🔢',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 20,
    xpReward: 50,
    order: 2,
  },
  {
    moduleSlug: 'hsk1-basics',
    slug: 'hsk1-pronouns',
    titleCN: '代词',
    titlePT: 'Pronomes',
    descriptionPT: 'Aprenda os pronomes pessoais',
    icon: '👤',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 15,
    xpReward: 50,
    order: 3,
  },
  // People module
  {
    moduleSlug: 'hsk1-people',
    slug: 'hsk1-family',
    titleCN: '家庭',
    titlePT: 'Família',
    descriptionPT: 'Aprenda a falar sobre sua família',
    icon: '👨‍👩‍👧',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 20,
    xpReward: 50,
    order: 1,
  },
  {
    moduleSlug: 'hsk1-people',
    slug: 'hsk1-occupations',
    titleCN: '职业',
    titlePT: 'Profissões',
    descriptionPT: 'Aprenda vocabulário sobre trabalho',
    icon: '💼',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 15,
    xpReward: 50,
    order: 2,
  },
  // Time module
  {
    moduleSlug: 'hsk1-time',
    slug: 'hsk1-days',
    titleCN: '星期',
    titlePT: 'Dias da Semana',
    descriptionPT: 'Aprenda os dias da semana em chinês',
    icon: '📅',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 15,
    xpReward: 50,
    order: 1,
  },
  {
    moduleSlug: 'hsk1-time',
    slug: 'hsk1-time-words',
    titleCN: '时间词',
    titlePT: 'Expressões de Tempo',
    descriptionPT: 'Aprenda palavras para falar sobre horas',
    icon: '⏰',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 15,
    xpReward: 50,
    order: 2,
  },
  // Daily module
  {
    moduleSlug: 'hsk1-daily',
    slug: 'hsk1-food',
    titleCN: '食物',
    titlePT: 'Comida',
    descriptionPT: 'Aprenda vocabulário sobre comida e bebida',
    icon: '🍜',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 20,
    xpReward: 50,
    order: 1,
  },
  {
    moduleSlug: 'hsk1-daily',
    slug: 'hsk1-places',
    titleCN: '地方',
    titlePT: 'Lugares',
    descriptionPT: 'Aprenda nomes de lugares comuns',
    icon: '🏠',
    type: LessonType.VOCABULARY,
    difficulty: Difficulty.BEGINNER,
    durationMin: 15,
    xpReward: 50,
    order: 2,
  },
]

// Sample vocabulary - first lesson (greetings)
const greetingsVocab = [
  {
    hanzi: '你好',
    pinyin: 'nǐ hǎo',
    meaningPT: 'Olá',
    partOfSpeech: 'interjeição',
    hskLevel: 1,
    exampleCN: '你好，我叫李明。',
    examplePinyin: 'Nǐ hǎo, wǒ jiào Lǐ Míng.',
    examplePT: 'Olá, meu nome é Li Ming.',
    notes: 'Cumprimento mais comum em chinês.',
    order: 1,
  },
  {
    hanzi: '再见',
    pinyin: 'zài jiàn',
    meaningPT: 'Tchau / Adeus',
    partOfSpeech: 'interjeição',
    hskLevel: 1,
    exampleCN: '明天见！再见！',
    examplePinyin: 'Míngtiān jiàn! Zàijiàn!',
    examplePT: 'Até amanhã! Tchau!',
    notes: 'Literalmente significa "ver de novo".',
    order: 2,
  },
  {
    hanzi: '谢谢',
    pinyin: 'xiè xie',
    meaningPT: 'Obrigado(a)',
    partOfSpeech: 'verbo',
    hskLevel: 1,
    exampleCN: '谢谢你的帮助！',
    examplePinyin: 'Xièxie nǐ de bāngzhù!',
    examplePT: 'Obrigado pela sua ajuda!',
    notes: 'Agradecimento básico.',
    order: 3,
  },
  {
    hanzi: '不客气',
    pinyin: 'bú kè qi',
    meaningPT: 'De nada',
    partOfSpeech: 'expressão',
    hskLevel: 1,
    exampleCN: '谢谢！— 不客气！',
    examplePinyin: 'Xièxie! — Bú kèqi!',
    examplePT: 'Obrigado! — De nada!',
    notes: 'Literalmente "não seja formal".',
    order: 4,
  },
  {
    hanzi: '对不起',
    pinyin: 'duì bu qǐ',
    meaningPT: 'Desculpe',
    partOfSpeech: 'expressão',
    hskLevel: 1,
    exampleCN: '对不起，我来晚了。',
    examplePinyin: 'Duìbuqǐ, wǒ lái wǎn le.',
    examplePT: 'Desculpe, cheguei atrasado.',
    notes: 'Usado para pedir desculpas.',
    order: 5,
  },
  {
    hanzi: '没关系',
    pinyin: 'méi guān xi',
    meaningPT: 'Não tem problema',
    partOfSpeech: 'expressão',
    hskLevel: 1,
    exampleCN: '对不起！— 没关系！',
    examplePinyin: 'Duìbuqǐ! — Méi guānxi!',
    examplePT: 'Desculpe! — Não tem problema!',
    notes: 'Resposta para 对不起.',
    order: 6,
  },
]

// Achievements
const achievements = [
  {
    slug: 'first_lesson',
    nameCN: '初学者',
    namePT: 'Primeiro Passo',
    descriptionPT: 'Complete sua primeira lição',
    icon: '🎯',
    badgeColor: '#DE2910',
    type: AchievementType.FIRST_LESSON,
    threshold: 1,
    xpReward: 50,
  },
  {
    slug: 'streak_7',
    nameCN: '坚持一周',
    namePT: 'Uma Semana',
    descriptionPT: 'Mantenha uma sequência de 7 dias',
    icon: '🔥',
    badgeColor: '#FF6B35',
    type: AchievementType.STREAK_DAYS,
    threshold: 7,
    xpReward: 100,
  },
  {
    slug: 'streak_30',
    nameCN: '坚持一月',
    namePT: 'Um Mês',
    descriptionPT: 'Mantenha uma sequência de 30 dias',
    icon: '🏆',
    badgeColor: '#FFD700',
    type: AchievementType.STREAK_DAYS,
    threshold: 30,
    xpReward: 500,
  },
  {
    slug: 'vocabulary_50',
    nameCN: '词汇新手',
    namePT: '50 Palavras',
    descriptionPT: 'Aprenda 50 palavras de vocabulário',
    icon: '📚',
    badgeColor: '#4CAF50',
    type: AchievementType.VOCABULARY_LEARNED,
    threshold: 50,
    xpReward: 100,
  },
  {
    slug: 'vocabulary_150',
    nameCN: 'HSK1达人',
    namePT: 'HSK1 Completo',
    descriptionPT: 'Aprenda 150 palavras (HSK1 completo)',
    icon: '🌟',
    badgeColor: '#FFDE00',
    type: AchievementType.VOCABULARY_LEARNED,
    threshold: 150,
    xpReward: 300,
  },
  {
    slug: 'perfect_quiz',
    nameCN: '完美得分',
    namePT: 'Quiz Perfeito',
    descriptionPT: 'Obtenha 100% em um quiz',
    icon: '💯',
    badgeColor: '#9C27B0',
    type: AchievementType.PERFECT_QUIZ,
    threshold: 1,
    xpReward: 75,
  },
  {
    slug: 'lessons_10',
    nameCN: '勤学者',
    namePT: '10 Lições',
    descriptionPT: 'Complete 10 lições',
    icon: '📖',
    badgeColor: '#2196F3',
    type: AchievementType.LESSONS_COMPLETED,
    threshold: 10,
    xpReward: 150,
  },
  {
    slug: 'xp_1000',
    nameCN: '千分学者',
    namePT: '1000 XP',
    descriptionPT: 'Acumule 1000 pontos de experiência',
    icon: '⭐',
    badgeColor: '#E91E63',
    type: AchievementType.XP_EARNED,
    threshold: 1000,
    xpReward: 100,
  },
  {
    slug: 'track_hsk1',
    nameCN: 'HSK1毕业',
    namePT: 'Trilha HSK1',
    descriptionPT: 'Complete toda a trilha HSK1',
    icon: '🎓',
    badgeColor: '#DE2910',
    type: AchievementType.TRACK_COMPLETED,
    threshold: 1,
    xpReward: 500,
  },
]

// Quiz for greetings lesson
const greetingsQuiz = {
  titlePT: 'Quiz: Cumprimentos',
  instructionsPT: 'Teste seus conhecimentos sobre cumprimentos em chinês!',
  passingScore: 70,
  shuffleQuestions: true,
  questions: [
    {
      type: QuizType.MULTIPLE_CHOICE,
      points: 10,
      promptPT: 'Como se diz "Olá" em chinês?',
      correctAnswer: '你好',
      options: JSON.stringify([
        { id: 'a', text: '你好', isCorrect: true },
        { id: 'b', text: '再见', isCorrect: false },
        { id: 'c', text: '谢谢', isCorrect: false },
        { id: 'd', text: '对不起', isCorrect: false },
      ]),
      explanationPT: '你好 (nǐ hǎo) é o cumprimento mais comum em chinês.',
      order: 1,
    },
    {
      type: QuizType.MULTIPLE_CHOICE,
      points: 10,
      promptPT: 'Qual é a resposta adequada para "谢谢"?',
      correctAnswer: '不客气',
      options: JSON.stringify([
        { id: 'a', text: '不客气', isCorrect: true },
        { id: 'b', text: '再见', isCorrect: false },
        { id: 'c', text: '你好', isCorrect: false },
        { id: 'd', text: '对不起', isCorrect: false },
      ]),
      explanationPT: '不客气 (bú kèqi) significa "de nada", resposta padrão para "obrigado".',
      order: 2,
    },
    {
      type: QuizType.MULTIPLE_CHOICE,
      points: 10,
      promptPT: 'O que significa "再见"?',
      correctAnswer: 'Tchau / Adeus',
      options: JSON.stringify([
        { id: 'a', text: 'Tchau / Adeus', isCorrect: true },
        { id: 'b', text: 'Olá', isCorrect: false },
        { id: 'c', text: 'Obrigado', isCorrect: false },
        { id: 'd', text: 'Desculpe', isCorrect: false },
      ]),
      explanationPT: '再见 (zài jiàn) literalmente significa "ver de novo", usado para despedidas.',
      order: 3,
    },
  ],
}

async function main() {
  console.log('🌱 Starting database seed...')

  // Clean existing data
  console.log('🧹 Cleaning existing data...')
  await prisma.userAchievement.deleteMany()
  await prisma.userVocabulary.deleteMany()
  await prisma.lessonProgress.deleteMany()
  await prisma.quizQuestion.deleteMany()
  await prisma.quiz.deleteMany()
  await prisma.vocabulary.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.module.deleteMany()
  await prisma.track.deleteMany()
  await prisma.achievement.deleteMany()
  await prisma.profile.deleteMany()

  // Create Track
  console.log('📚 Creating HSK1 track...')
  const track = await prisma.track.create({
    data: hsk1Track,
  })

  // Create Modules
  console.log('📦 Creating modules...')
  const modules: Record<string, { id: string }> = {}
  for (const moduleData of hsk1Modules) {
    const module = await prisma.module.create({
      data: {
        ...moduleData,
        trackId: track.id,
      },
    })
    modules[moduleData.slug] = module
  }

  // Create Lessons
  console.log('📖 Creating lessons...')
  const lessons: Record<string, { id: string }> = {}
  for (const lessonData of hsk1Lessons) {
    const { moduleSlug, ...data } = lessonData
    const lesson = await prisma.lesson.create({
      data: {
        ...data,
        moduleId: modules[moduleSlug].id,
      },
    })
    lessons[lessonData.slug] = lesson
  }

  // Create Vocabulary for greetings lesson
  console.log('📝 Creating vocabulary...')
  for (const vocabData of greetingsVocab) {
    await prisma.vocabulary.create({
      data: {
        ...vocabData,
        lessonId: lessons['hsk1-greetings'].id,
      },
    })
  }

  // Create Quiz for greetings lesson
  console.log('❓ Creating quizzes...')
  const quiz = await prisma.quiz.create({
    data: {
      titlePT: greetingsQuiz.titlePT,
      instructionsPT: greetingsQuiz.instructionsPT,
      passingScore: greetingsQuiz.passingScore,
      shuffleQuestions: greetingsQuiz.shuffleQuestions,
      lessonId: lessons['hsk1-greetings'].id,
    },
  })

  for (const questionData of greetingsQuiz.questions) {
    await prisma.quizQuestion.create({
      data: {
        ...questionData,
        quizId: quiz.id,
      },
    })
  }

  // Create Achievements
  console.log('🏆 Creating achievements...')
  for (const achievementData of achievements) {
    await prisma.achievement.create({
      data: achievementData,
    })
  }

  console.log('✅ Seed completed successfully!')
  console.log(`   - 1 Track created`)
  console.log(`   - ${hsk1Modules.length} Modules created`)
  console.log(`   - ${hsk1Lessons.length} Lessons created`)
  console.log(`   - ${greetingsVocab.length} Vocabulary items created`)
  console.log(`   - 1 Quiz with ${greetingsQuiz.questions.length} questions created`)
  console.log(`   - ${achievements.length} Achievements created`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
