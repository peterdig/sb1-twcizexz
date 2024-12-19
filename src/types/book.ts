export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  genre: string[];
  publicationYear: number;
  rating: number;
  description: string;
  themes: string[];
}

export interface BookRecommendation {
  book: Book;
  relevanceScore: number;
}