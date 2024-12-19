import { Book, BookRecommendation } from '../types/book';

export function getRecommendations(
  sourceBook: Book,
  allBooks: Book[],
  limit: number = 20
): BookRecommendation[] {
  const recommendations = allBooks
    .filter((book) => book.id !== sourceBook.id)
    .map((book) => ({
      book,
      relevanceScore: calculateRelevanceScore(sourceBook, book),
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);

  return recommendations;
}

function calculateRelevanceScore(sourceBook: Book, targetBook: Book): number {
  let score = 0;
  
  // Genre matching
  const genreOverlap = sourceBook.genre.filter(g => 
    targetBook.genre.includes(g)
  ).length;
  score += genreOverlap * 2;
  
  // Theme matching
  const themeOverlap = sourceBook.themes.filter(t => 
    targetBook.themes.includes(t)
  ).length;
  score += themeOverlap * 1.5;
  
  // Same author bonus
  if (sourceBook.author === targetBook.author) {
    score += 3;
  }
  
  // Publication year proximity
  const yearDiff = Math.abs(sourceBook.publicationYear - targetBook.publicationYear);
  score += Math.max(0, 1 - yearDiff / 10);
  
  // Rating influence
  score += targetBook.rating / 2;
  
  return score;
}