// ==================== BASE TYPES ====================

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
export type HSKLevel = 1 | 2 | 3 | 4 | 5 | 6
export type ToneNumber = 1 | 2 | 3 | 4 | 5 // 5 = neutral tone
export type LessonType = 'vocabulary' | 'grammar' | 'culture' | 'conversation'
export type TrackType = 'hsk' | 'thematic' | 'skill'

export type QuizType =
  | 'multiple_choice'
  | 'matching'
  | 'fill_blank'
  | 'listening'
  | 'character_recognition'
  | 'tone_recognition'

// ==================== BILINGUAL CONTENT ====================

export interface BilingualText {
  cn: string // Chinese (Simplified)
  cnTraditional?: string // Traditional Chinese (optional)
  pt: string // Portuguese
}

export interface BilingualTitle {
  titleCN: string
  titlePT: string
  pinyin?: string
}

// ==================== PINYIN & TONES ====================

export interface PinyinSyllable {
  syllable: string // e.g., "ni"
  tone: ToneNumber // 1-5
  toneMarked: string // e.g., "nǐ"
}

export const TONE_COLORS: Record<ToneNumber, string> = {
  1: '#FF0000', // Red - high flat (first tone)
  2: '#FFA500', // Orange - rising (second tone)
  3: '#008000', // Green - dipping (third tone)
  4: '#0000FF', // Blue - falling (fourth tone)
  5: '#808080', // Gray - neutral (fifth tone)
}

// ==================== VOCABULARY ====================

export interface VocabularyExample {
  sentenceCN: string
  sentencePinyin: string
  sentencePT: string
  audioUrl?: string
}

export interface VocabularyItem {
  id: string
  hanzi: string // Simplified Chinese
  hanziTraditional?: string // Traditional Chinese
  pinyin: string // Full pinyin with tone marks (e.g., "nǐ hǎo")
  pinyinSyllables?: PinyinSyllable[] // Broken down syllables
  meaningPT: string // Portuguese translation
  audioUrl?: string
  audioSlowUrl?: string
  hskLevel: HSKLevel
  partOfSpeech?: string // noun, verb, adjective, etc.
  examples: VocabularyExample[]
  notes?: string // Usage notes in Portuguese
  tags?: string[]
}

// ==================== TRACK / MODULE / LESSON ====================

export interface Track {
  id: string
  slug: string
  titleCN: string
  titlePT: string
  descriptionPT: string
  icon: string
  color: string
  type: TrackType
  hskLevel?: HSKLevel
  modules: Module[]
  totalLessons: number
  totalVocabulary: number
  estimatedHours: number
  isPublished: boolean
  tags?: string[]
}

export interface Module {
  id: string
  slug: string
  trackId: string
  titleCN: string
  titlePT: string
  descriptionPT?: string
  icon: string
  order: number
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  slug: string
  moduleId: string
  titleCN: string
  titlePT: string
  descriptionPT: string
  icon: string
  type: LessonType
  difficulty: Difficulty
  durationMin: number
  xpReward: number
  order: number
  vocabularyIds: string[]
  objectives?: string[]
  tags?: string[]
}

// ==================== QUIZ ====================

export interface Quiz {
  id: string
  lessonId: string
  titleCN?: string
  titlePT: string
  instructionsPT?: string
  questions: QuizQuestion[]
  passingScore: number // Percentage (0-100)
  timeLimit?: number // Seconds, null = no limit
  shuffleQuestions: boolean
}

export interface QuizQuestion {
  id: string
  type: QuizType
  points: number
  promptPT: string // Question text in Portuguese
  promptCN?: string // Optional Chinese in prompt
  promptPinyin?: string
  promptAudioUrl?: string
  options?: QuizOption[] // For multiple choice
  correctAnswer: string | string[] // Answer or array for matching
  explanationPT?: string // Explanation shown after
  hints?: string[]
}

export interface QuizOption {
  id: string
  text: string
  textCN?: string
  pinyin?: string
  isCorrect: boolean
}

// ==================== HSK REQUIREMENTS ====================

export const HSK_REQUIREMENTS: Record<
  HSKLevel,
  {
    vocabulary: number
    characters: number
    descriptionPT: string
  }
> = {
  1: { vocabulary: 150, characters: 174, descriptionPT: 'Iniciante absoluto' },
  2: { vocabulary: 300, characters: 347, descriptionPT: 'Iniciante' },
  3: { vocabulary: 600, characters: 617, descriptionPT: 'Elementar' },
  4: { vocabulary: 1200, characters: 1064, descriptionPT: 'Intermediário' },
  5: { vocabulary: 2500, characters: 1685, descriptionPT: 'Intermediário-avançado' },
  6: { vocabulary: 5000, characters: 2663, descriptionPT: 'Avançado' },
}

// ==================== CONTENT MANIFEST ====================

export interface ContentManifest {
  version: string
  lastUpdated: string
  tracks: string[]
  totalVocabulary: number
  totalLessons: number
  hskCoverage: Record<HSKLevel, number>
}
