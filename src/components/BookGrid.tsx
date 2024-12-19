import React from 'react';
import { Book } from '../types/book';
import { BookCard } from './BookCard';

interface BookGridProps {
  books: Book[];
  onRecommend: (book: Book) => void;
}

export function BookGrid({ books, onRecommend }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onRecommend={onRecommend} />
      ))}
    </div>
  );
}