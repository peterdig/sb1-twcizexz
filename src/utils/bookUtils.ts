import { Book } from '../types/book';
import { FilterState } from '../types/filters';

export function getUniqueGenres(books: Book[]): string[] {
  const genres = new Set<string>();
  books.forEach((book) => {
    book.genre.forEach((g) => genres.add(g));
  });
  return Array.from(genres).sort();
}

export function getYearRange(books: Book[]): [number, number] {
  const years = books.map((book) => book.publicationYear);
  return [Math.min(...years), Math.max(...years)];
}

export function filterBooks(books: Book[], filters: FilterState): Book[] {
  return books.filter((book) => {
    // Filter by genres if any are selected
    if (filters.genres.length > 0) {
      if (!book.genre.some((g) => filters.genres.includes(g))) {
        return false;
      }
    }

    // Filter by minimum rating
    if (book.rating < filters.minRating) {
      return false;
    }

    // Filter by year range
    if (
      book.publicationYear < filters.yearRange[0] ||
      book.publicationYear > filters.yearRange[1]
    ) {
      return false;
    }

    return true;
  });
}