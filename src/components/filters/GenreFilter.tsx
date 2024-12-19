import React from 'react';
import { Filter } from 'lucide-react';

interface GenreFilterProps {
  availableGenres: string[];
  selectedGenres: string[];
  onGenreChange: (genres: string[]) => void;
}

export function GenreFilter({ availableGenres, selectedGenres, onGenreChange }: GenreFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Genre Filters</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {availableGenres.map((genre) => (
          <button
            key={genre}
            onClick={() => {
              if (selectedGenres.includes(genre)) {
                onGenreChange(selectedGenres.filter((g) => g !== genre));
              } else {
                onGenreChange([...selectedGenres, genre]);
              }
            }}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedGenres.includes(genre)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}