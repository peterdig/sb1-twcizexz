import React from 'react';
import { Book } from '../../types/book';
import { FilterState } from '../../types/filters';
import { FilterPanel } from '../filters/FilterPanel';
import { BookGrid } from '../BookGrid';
import { getUniqueGenres, getYearRange } from '../../utils/bookUtils';

interface MainContentProps {
  books: Book[];
  filters: FilterState;
  isLoading: boolean;
  onFiltersChange: (filters: FilterState) => void;
  onRecommend: (book: Book) => void;
}

export function MainContent({
  books,
  filters,
  isLoading,
  onFiltersChange,
  onRecommend,
}: MainContentProps) {
  const availableGenres = getUniqueGenres(books);
  const yearRange = getYearRange(books);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <div className="w-80 flex-shrink-0">
          <FilterPanel
            filters={filters}
            availableGenres={availableGenres}
            yearRange={yearRange}
            onFiltersChange={onFiltersChange}
          />
        </div>
        
        <div className="flex-grow">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : books.length > 0 ? (
            <BookGrid books={books} onRecommend={onRecommend} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}