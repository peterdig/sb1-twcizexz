export interface FilterState {
  genres: string[];
  minRating: number;
  yearRange: [number, number];
}

export interface SortOption {
  label: string;
  value: 'rating' | 'year' | 'title';
  direction: 'asc' | 'desc';
}