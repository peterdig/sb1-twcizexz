import React from 'react';
import { Book } from '../types/book';
import { Star, BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onRecommend: (book: Book) => void;
}

export function BookCard({ book, onRecommend }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative pb-[150%]">
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
        
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 w-4 h-4" />
          <span className="ml-1 text-sm">{book.rating.toFixed(1)}</span>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-gray-700 line-clamp-2">{book.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {book.genre.map((g) => (
            <span
              key={g}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => onRecommend(book)}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          <BookOpen size={16} />
          <span>Similar Books</span>
        </button>
      </div>
    </div>
  );
}