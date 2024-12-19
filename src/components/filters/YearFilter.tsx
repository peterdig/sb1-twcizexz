import React from 'react';
import { Calendar } from 'lucide-react';

interface YearFilterProps {
  yearRange: [number, number];
  minYear: number;
  maxYear: number;
  onYearChange: (range: [number, number]) => void;
}

export function YearFilter({ yearRange, minYear, maxYear, onYearChange }: YearFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Publication Year</h2>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          min={minYear}
          max={yearRange[1]}
          value={yearRange[0]}
          onChange={(e) => onYearChange([parseInt(e.target.value), yearRange[1]])}
          className="w-24 px-3 py-1.5 border rounded"
        />
        <span>to</span>
        <input
          type="number"
          min={yearRange[0]}
          max={maxYear}
          value={yearRange[1]}
          onChange={(e) => onYearChange([yearRange[0], parseInt(e.target.value)])}
          className="w-24 px-3 py-1.5 border rounded"
        />
      </div>
    </div>
  );
}