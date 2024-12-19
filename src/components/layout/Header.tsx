import React from 'react';
import { Library } from 'lucide-react';
import { SearchBar } from '../SearchBar';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Library className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Book Recommendations</h1>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}