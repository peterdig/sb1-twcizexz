import React from 'react';
import { Star } from 'lucide-react';

interface RatingFilterProps {
  minRating: number;
  onRatingChange: (rating: number) => void;
}

export function RatingFilter({ minRating, onRatingChange }: RatingFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Star className="w-5 h-5 text-yellow-400" />
        <h2 className="text-lg font-semibold">Minimum Rating</h2>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={minRating}
          onChange={(e) => onRatingChange(parseFloat(e.target.value))}
          className="w-48 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">
          {minRating.toFixed(1)}+ ⭐
        </span>
      </div>
    </div>
  );
}