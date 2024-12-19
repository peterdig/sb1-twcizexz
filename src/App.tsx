import React, { useState, useCallback, useMemo } from 'react';
import { Book } from './types/book';
import { FilterState } from './types/filters';
import { books } from './data/books';
import { getRecommendations } from './utils/recommendationEngine';
import { filterBooks } from './utils/bookUtils';
import { Header } from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    genres: [],
    minRating: 0,
    yearRange: [1900, 2024],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationMode, setRecommendationMode] = useState(false);

  // Filter and search books
  const displayedBooks = useMemo(() => {
    let filtered = books;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply other filters
    return filterBooks(filtered, filters);
  }, [searchQuery, filters]);

  const handleSearch = useCallback((query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    setRecommendationMode(false);
    // Simulate API delay
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleRecommend = useCallback((book: Book) => {
    setIsLoading(true);
    setRecommendationMode(true);
    // Simulate API delay
    setTimeout(() => {
      const recommendations = getRecommendations(book, books);
      setSearchQuery('');
      setFilters({
        genres: [],
        minRating: 0,
        yearRange: [1900, 2024],
      });
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />
      <MainContent
        books={displayedBooks}
        filters={filters}
        isLoading={isLoading}
        onFiltersChange={setFilters}
        onRecommend={handleRecommend}
      />
    </div>
  );
}

export default App;