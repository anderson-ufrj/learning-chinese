import { Track, VocabularyItem, Lesson, Module } from '@/types/content'

// Import content JSON files
import hsk1Track from '@/content/tracks/hsk1.json'
import hsk1Vocab from '@/content/vocabulary/hsk1-vocab.json'

/**
 * Content Loader
 *
 * Utilities for loading and accessing learning content.
 * Currently loads from static JSON files, can be extended to fetch from API/database.
 */

// Cache for loaded content
const contentCache: {
  tracks: Map<string, Track>
  vocabulary: Map<string, VocabularyItem>
  lessons: Map<string, Lesson>
} = {
  tracks: new Map(),
  vocabulary: new Map(),
  lessons: new Map(),
}

/**
 * Initialize content cache from JSON files
 */
function initializeCache() {
  if (contentCache.tracks.size > 0) return // Already initialized

  // Load HSK1 track
  contentCache.tracks.set('hsk1', hsk1Track as unknown as Track)

  // Load HSK1 vocabulary
  const vocabItems = hsk1Vocab.items as VocabularyItem[]
  vocabItems.forEach(item => {
    contentCache.vocabulary.set(item.id, item)
  })

  // Index lessons from track
  const track = hsk1Track as unknown as Track
  track.modules.forEach(module => {
    module.lessons.forEach(lesson => {
      contentCache.lessons.set(lesson.id, lesson as Lesson)
    })
  })
}

// Initialize on module load
initializeCache()

/**
 * Get all available tracks
 */
export function getAllTracks(): Track[] {
  initializeCache()
  return Array.from(contentCache.tracks.values())
}

/**
 * Get a track by ID or slug
 */
export function getTrack(idOrSlug: string): Track | undefined {
  initializeCache()
  return contentCache.tracks.get(idOrSlug)
}

/**
 * Get a lesson by ID
 */
export function getLesson(lessonId: string): Lesson | undefined {
  initializeCache()
  return contentCache.lessons.get(lessonId)
}

/**
 * Get vocabulary by ID
 */
export function getVocabulary(vocabId: string): VocabularyItem | undefined {
  initializeCache()
  return contentCache.vocabulary.get(vocabId)
}

/**
 * Get multiple vocabulary items by IDs
 */
export function getVocabularyByIds(vocabIds: string[]): VocabularyItem[] {
  initializeCache()
  return vocabIds
    .map(id => contentCache.vocabulary.get(id))
    .filter((item): item is VocabularyItem => item !== undefined)
}

/**
 * Get all vocabulary for a lesson
 */
export function getLessonVocabulary(lessonId: string): VocabularyItem[] {
  const lesson = getLesson(lessonId)
  if (!lesson) return []
  return getVocabularyByIds(lesson.vocabularyIds)
}

/**
 * Get all vocabulary items
 */
export function getAllVocabulary(): VocabularyItem[] {
  initializeCache()
  return Array.from(contentCache.vocabulary.values())
}

/**
 * Get vocabulary by HSK level
 */
export function getVocabularyByHSKLevel(level: number): VocabularyItem[] {
  initializeCache()
  return Array.from(contentCache.vocabulary.values()).filter(
    item => item.hskLevel === level
  )
}

/**
 * Search vocabulary by hanzi, pinyin, or meaning
 */
export function searchVocabulary(query: string): VocabularyItem[] {
  initializeCache()
  const lowerQuery = query.toLowerCase()

  return Array.from(contentCache.vocabulary.values()).filter(item => {
    return (
      item.hanzi.includes(query) ||
      item.pinyin.toLowerCase().includes(lowerQuery) ||
      item.meaningPT.toLowerCase().includes(lowerQuery)
    )
  })
}

/**
 * Get lessons for a module
 */
export function getModuleLessons(moduleId: string, trackId: string): Lesson[] {
  const track = getTrack(trackId)
  if (!track) return []

  const module = track.modules.find(m => m.id === moduleId)
  if (!module) return []

  return module.lessons as Lesson[]
}

/**
 * Get module by ID
 */
export function getModule(moduleId: string, trackId: string): Module | undefined {
  const track = getTrack(trackId)
  if (!track) return undefined

  return track.modules.find(m => m.id === moduleId)
}

/**
 * Get next lesson after completing current one
 */
export function getNextLesson(currentLessonId: string, trackId: string): Lesson | undefined {
  const track = getTrack(trackId)
  if (!track) return undefined

  let foundCurrent = false

  for (const module of track.modules) {
    for (const lesson of module.lessons) {
      if (foundCurrent) {
        return lesson as Lesson
      }
      if (lesson.id === currentLessonId) {
        foundCurrent = true
      }
    }
  }

  return undefined
}

/**
 * Calculate total vocabulary count for a track
 */
export function getTrackVocabularyCount(trackId: string): number {
  const track = getTrack(trackId)
  if (!track) return 0

  const vocabIds = new Set<string>()

  track.modules.forEach(module => {
    module.lessons.forEach(lesson => {
      lesson.vocabularyIds.forEach(id => vocabIds.add(id))
    })
  })

  return vocabIds.size
}

/**
 * Get all vocabulary IDs for a track
 */
export function getTrackVocabularyIds(trackId: string): string[] {
  const track = getTrack(trackId)
  if (!track) return []

  const vocabIds = new Set<string>()

  track.modules.forEach(module => {
    module.lessons.forEach(lesson => {
      lesson.vocabularyIds.forEach(id => vocabIds.add(id))
    })
  })

  return Array.from(vocabIds)
}

/**
 * Get lesson progress info (which lesson number out of total in track)
 */
export function getLessonProgressInfo(
  lessonId: string,
  trackId: string
): { current: number; total: number; moduleName: string } | undefined {
  const track = getTrack(trackId)
  if (!track) return undefined

  let lessonNumber = 0
  let totalLessons = 0
  let currentModuleName = ''

  for (const module of track.modules) {
    for (const lesson of module.lessons) {
      totalLessons++
      if (lesson.id === lessonId) {
        lessonNumber = totalLessons
        currentModuleName = module.titlePT
      }
    }
  }

  if (lessonNumber === 0) return undefined

  return {
    current: lessonNumber,
    total: totalLessons,
    moduleName: currentModuleName,
  }
}
