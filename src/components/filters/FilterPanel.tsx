import React from 'react';
import { FilterState } from '../../types/filters';
import { GenreFilter } from './GenreFilter';
import { RatingFilter } from './RatingFilter';
import { YearFilter } from './YearFilter';
import { SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterState;
  availableGenres: string[];
  yearRange: [number, number];
  onFiltersChange: (filters: FilterState) => void;
}

export function FilterPanel({ filters, availableGenres, yearRange, onFiltersChange }: FilterPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b">
        <SlidersHorizontal className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold">Filters</h2>
      </div>
      
      <GenreFilter
        availableGenres={availableGenres}
        selectedGenres={filters.genres}
        onGenreChange={(genres) => onFiltersChange({ ...filters, genres })}
      />
      
      <RatingFilter
        minRating={filters.minRating}
        onRatingChange={(rating) => onFiltersChange({ ...filters, minRating: rating })}
      />
      
      <YearFilter
        yearRange={filters.yearRange}
        minYear={yearRange[0]}
        maxYear={yearRange[1]}
        onYearChange={(range) => onFiltersChange({ ...filters, yearRange: range })}
      />
    </div>
  );
}