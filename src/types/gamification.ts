// ==================== ACHIEVEMENT TYPES ====================

export type AchievementType =
  | 'lessons_completed'
  | 'vocabulary_learned'
  | 'streak_days'
  | 'xp_earned'
  | 'perfect_quiz'
  | 'track_completed'
  | 'first_lesson'

// ==================== ACHIEVEMENT ====================

export interface Achievement {
  id: string
  slug: string
  nameCN: string
  namePT: string
  descriptionPT: string
  icon: string
  badgeColor: string
  type: AchievementType
  threshold: number
  xpReward: number
}

export interface UserAchievement {
  achievementId: string
  achievement: Achievement
  unlockedAt: string
}

// ==================== XP REWARDS ====================

export const XP_REWARDS = {
  LESSON_START: 5,
  LESSON_COMPLETE: 50,
  QUIZ_PASS: 30,
  QUIZ_PERFECT: 100,
  EXERCISE_CORRECT: 10,
  VOCABULARY_REVIEWED: 5,
  VOCABULARY_MASTERED: 20,
  STREAK_BONUS_DAY: 20,
  FIRST_LESSON_TODAY: 25,
  ACHIEVEMENT_UNLOCKED: 50,
} as const

// ==================== STREAK ====================

export interface StreakInfo {
  current: number
  longest: number
  lastStudyDate?: string
  isActiveToday: boolean
  willLoseStreak: boolean // True if user hasn't studied today and it's late
}

export function calculateStreakStatus(
  lastStudyDate: string | undefined,
  currentStreak: number
): { isActive: boolean; newStreak: number } {
  if (!lastStudyDate) {
    return { isActive: false, newStreak: 0 }
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const lastStudy = new Date(lastStudyDate)
  lastStudy.setHours(0, 0, 0, 0)

  const diffDays = Math.floor((today.getTime() - lastStudy.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    // Studied today
    return { isActive: true, newStreak: currentStreak }
  } else if (diffDays === 1) {
    // Studied yesterday, can continue streak
    return { isActive: false, newStreak: currentStreak }
  } else {
    // Streak broken
    return { isActive: false, newStreak: 0 }
  }
}

// ==================== LEADERBOARD ====================

export interface LeaderboardEntry {
  rank: number
  profileId: string
  name: string
  nameCN?: string
  avatarUrl?: string
  totalXp: number
  level: number
  streak: number
}

export interface LeaderboardPeriod {
  type: 'weekly' | 'monthly' | 'all_time'
  entries: LeaderboardEntry[]
  userRank?: number
  totalParticipants: number
}

// ==================== DEFAULT ACHIEVEMENTS ====================

export const DEFAULT_ACHIEVEMENTS: Omit<Achievement, 'id'>[] = [
  {
    slug: 'first_lesson',
    nameCN: '初学者',
    namePT: 'Primeiro Passo',
    descriptionPT: 'Complete sua primeira lição',
    icon: '🎯',
    badgeColor: '#DE2910',
    type: 'first_lesson',
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
    type: 'streak_days',
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
    type: 'streak_days',
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
    type: 'vocabulary_learned',
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
    type: 'vocabulary_learned',
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
    type: 'perfect_quiz',
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
    type: 'lessons_completed',
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
    type: 'xp_earned',
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
    type: 'track_completed',
    threshold: 1,
    xpReward: 500,
  },
]
