// ==================== PROGRESS STATUS ====================

export type ProgressStatus = 'not_started' | 'in_progress' | 'completed'

// ==================== USER PROGRESS ====================

export interface UserProgress {
  id: string
  supabaseId: string
  email: string
  name?: string
  nameCN?: string
  avatarUrl?: string

  // Learning preferences
  dailyGoalXp: number
  level: string

  // Gamification stats
  totalXp: number
  currentLevel: number
  streak: number
  longestStreak: number
  lastStudyDate?: string

  // Track progress
  tracks: Record<string, TrackProgress>

  // Daily progress
  dailyXp: number
  dailyLessonsCompleted: number
}

export interface TrackProgress {
  trackId: string
  startedAt?: string
  completedAt?: string
  modules: Record<string, ModuleProgress>
  overallProgress: number // Percentage 0-100
}

export interface ModuleProgress {
  moduleId: string
  startedAt?: string
  completedAt?: string
  lessons: Record<string, LessonProgress>
  overallProgress: number // Percentage 0-100
}

export interface LessonProgress {
  lessonId: string
  status: ProgressStatus
  percentage: number
  score: number
  bestScore: number
  timeSpentMin: number
  attempts: number
  startedAt?: string
  completedAt?: string
  lastAccessedAt: string
  quizResults?: Record<string, QuizResult>
}

// ==================== QUIZ RESULTS ====================

export interface QuizResult {
  quizId: string
  score: number
  totalPoints: number
  percentage: number
  passed: boolean
  completedAt: string
  timeSpent: number // Seconds
  attempts: number
  answers: Record<string, UserAnswer>
}

export interface UserAnswer {
  questionId: string
  answer: string | string[]
  isCorrect: boolean
  timeSpent: number // Milliseconds
}

// ==================== SPACED REPETITION ====================

export interface VocabularyMastery {
  vocabularyId: string
  profileId: string

  // SM-2 Algorithm data
  easeFactor: number // Default 2.5
  interval: number // Days until next review
  repetitions: number
  nextReview: string // ISO date
  lastReview?: string

  // Performance stats
  correctCount: number
  incorrectCount: number
  masteryLevel: number // 0-5

  createdAt: string
  updatedAt: string
}

export interface ReviewSession {
  id: string
  items: VocabularyMastery[]
  currentIndex: number
  startedAt: string
  completedAt?: string
  results: ReviewResult[]
}

export interface ReviewResult {
  vocabularyId: string
  quality: number // 0-5 response quality
  responseTime: number // Milliseconds
  wasCorrect: boolean
}

// ==================== LEVEL THRESHOLDS ====================

export const LEVEL_THRESHOLDS: number[] = [
  0,      // Level 1
  100,    // Level 2
  250,    // Level 3
  500,    // Level 4
  1000,   // Level 5
  2000,   // Level 6
  4000,   // Level 7
  7000,   // Level 8
  11000,  // Level 9
  16000,  // Level 10
  22000,  // Level 11
  29000,  // Level 12
  37000,  // Level 13
  46000,  // Level 14
  56000,  // Level 15
  // ... continues exponentially
]

export function getLevelFromXp(xp: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      return i + 1
    }
  }
  return 1
}

export function getXpForNextLevel(currentLevel: number): number {
  if (currentLevel >= LEVEL_THRESHOLDS.length) {
    // Beyond defined levels, use exponential growth
    return Math.floor(LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] * 1.3)
  }
  return LEVEL_THRESHOLDS[currentLevel]
}

export function getXpProgress(xp: number): { current: number; target: number; percentage: number } {
  const level = getLevelFromXp(xp)
  const currentLevelXp = LEVEL_THRESHOLDS[level - 1] || 0
  const nextLevelXp = getXpForNextLevel(level)
  const progress = xp - currentLevelXp
  const target = nextLevelXp - currentLevelXp

  return {
    current: progress,
    target,
    percentage: Math.min(100, (progress / target) * 100),
  }
}
