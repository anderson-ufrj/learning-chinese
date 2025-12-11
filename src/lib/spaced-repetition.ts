/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Implementation of the SuperMemo 2 algorithm for vocabulary review scheduling.
 * This algorithm optimizes memory retention by scheduling reviews at increasing
 * intervals based on how well the user knows each item.
 */

export interface SM2Input {
  quality: number        // Response quality (0-5)
  easeFactor: number     // Current ease factor (default 2.5)
  interval: number       // Current interval in days
  repetitions: number    // Number of successful repetitions
}

export interface SM2Result {
  easeFactor: number     // New ease factor
  interval: number       // New interval in days
  repetitions: number    // New repetition count
  nextReview: Date       // Next review date
}

/**
 * Quality ratings for SM-2:
 * 0 - Complete blackout, no recall
 * 1 - Incorrect response, but remembered after seeing answer
 * 2 - Incorrect response, but answer seemed easy to recall
 * 3 - Correct response with serious difficulty
 * 4 - Correct response after hesitation
 * 5 - Perfect response with no hesitation
 */
export const QUALITY_RATINGS = {
  BLACKOUT: 0,
  INCORRECT_REMEMBERED: 1,
  INCORRECT_EASY: 2,
  CORRECT_DIFFICULT: 3,
  CORRECT_HESITATION: 4,
  PERFECT: 5,
} as const

export type QualityRating = typeof QUALITY_RATINGS[keyof typeof QUALITY_RATINGS]

/**
 * Calculate the next review parameters using SM-2 algorithm
 */
export function calculateSM2(input: SM2Input): SM2Result {
  const { quality, easeFactor: prevEF, interval: prevInterval, repetitions: prevReps } = input

  // Calculate new ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  let newEF = prevEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

  // EF should not fall below 1.3
  if (newEF < 1.3) {
    newEF = 1.3
  }

  let newInterval: number
  let newReps: number

  if (quality < 3) {
    // Failed review - reset to beginning
    newInterval = 1
    newReps = 0
  } else {
    // Successful review
    newReps = prevReps + 1

    if (prevReps === 0) {
      newInterval = 1
    } else if (prevReps === 1) {
      newInterval = 6
    } else {
      newInterval = Math.round(prevInterval * newEF)
    }
  }

  // Calculate next review date
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + newInterval)
  nextReview.setHours(0, 0, 0, 0) // Set to start of day

  return {
    easeFactor: Math.round(newEF * 100) / 100, // Round to 2 decimal places
    interval: newInterval,
    repetitions: newReps,
    nextReview,
  }
}

/**
 * Get default SM-2 values for a new vocabulary item
 */
export function getDefaultSM2Values(): Omit<SM2Input, 'quality'> {
  return {
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
  }
}

/**
 * Check if a vocabulary item is due for review
 */
export function isDueForReview(nextReview: Date | string): boolean {
  const reviewDate = typeof nextReview === 'string' ? new Date(nextReview) : nextReview
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return reviewDate <= today
}

/**
 * Calculate mastery level based on SM-2 data (0-5)
 *
 * Mastery levels:
 * 0 - New/Unknown
 * 1 - Learning (1-2 successful reviews)
 * 2 - Familiar (3-4 successful reviews, EF < 2.0)
 * 3 - Good (5+ successful reviews, EF >= 2.0)
 * 4 - Strong (7+ successful reviews, EF >= 2.3)
 * 5 - Mastered (10+ successful reviews, EF >= 2.5, interval >= 30 days)
 */
export function calculateMasteryLevel(
  repetitions: number,
  easeFactor: number,
  interval: number
): number {
  if (repetitions === 0) return 0
  if (repetitions <= 2) return 1
  if (repetitions <= 4 && easeFactor < 2.0) return 2
  if (repetitions <= 6 && easeFactor >= 2.0) return 3
  if (repetitions <= 9 && easeFactor >= 2.3) return 4
  if (repetitions >= 10 && easeFactor >= 2.5 && interval >= 30) return 5
  return Math.min(4, Math.floor(repetitions / 3))
}

/**
 * Get Portuguese label for mastery level
 */
export function getMasteryLabelPT(level: number): string {
  const labels = [
    'Novo',
    'Aprendendo',
    'Familiar',
    'Bom',
    'Forte',
    'Dominado',
  ]
  return labels[Math.min(level, 5)]
}

/**
 * Get color for mastery level (Tailwind CSS classes)
 */
export function getMasteryColor(level: number): string {
  const colors = [
    'bg-gray-200 text-gray-700',      // 0 - New
    'bg-red-100 text-red-700',        // 1 - Learning
    'bg-orange-100 text-orange-700',  // 2 - Familiar
    'bg-yellow-100 text-yellow-700',  // 3 - Good
    'bg-green-100 text-green-700',    // 4 - Strong
    'bg-china-gold text-gray-800',    // 5 - Mastered
  ]
  return colors[Math.min(level, 5)]
}

/**
 * Sort vocabulary items by priority for review
 * Priority: overdue items first, then by interval (shorter = more important)
 */
export function sortByReviewPriority<T extends { nextReview: Date | string; interval: number }>(
  items: T[]
): T[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return [...items].sort((a, b) => {
    const aDate = typeof a.nextReview === 'string' ? new Date(a.nextReview) : a.nextReview
    const bDate = typeof b.nextReview === 'string' ? new Date(b.nextReview) : b.nextReview

    const aOverdue = aDate <= today
    const bOverdue = bDate <= today

    // Overdue items come first
    if (aOverdue && !bOverdue) return -1
    if (!aOverdue && bOverdue) return 1

    // If both overdue or both not overdue, sort by how overdue they are
    if (aOverdue && bOverdue) {
      return aDate.getTime() - bDate.getTime()
    }

    // If neither is overdue, sort by interval (lower = higher priority)
    return a.interval - b.interval
  })
}

/**
 * Estimate review session duration in minutes
 * Assumes ~15 seconds per vocabulary item
 */
export function estimateReviewDuration(itemCount: number): number {
  return Math.ceil((itemCount * 15) / 60)
}

/**
 * Get motivational message based on review performance
 */
export function getReviewFeedbackPT(correctPercentage: number): string {
  if (correctPercentage >= 90) return 'Excelente! Você está dominando esse vocabulário! 🌟'
  if (correctPercentage >= 75) return 'Muito bem! Continue assim! 💪'
  if (correctPercentage >= 60) return 'Bom trabalho! A prática leva à perfeição! 📚'
  if (correctPercentage >= 40) return 'Continue tentando! Cada revisão te deixa mais forte! 🎯'
  return 'Não desanime! Aprender um novo idioma leva tempo! 加油！'
}
