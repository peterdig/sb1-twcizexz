import { Book } from '../types/book';

// This is just a small sample of the full dataset
export const books: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    genre: ['Fiction', 'Fantasy', 'Contemporary'],
    publicationYear: 2020,
    rating: 4.2,
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    themes: ['Life Choices', 'Regret', 'Hope']
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverUrl: 'https://images.unsplash.com/photo-1614544048536-0d28caf77f41?auto=format&fit=crop&q=80&w=400',
    genre: ['Science Fiction', 'Space Opera'],
    publicationYear: 2021,
    rating: 4.8,
    description: 'A lone astronaut must save humanity from a catastrophic extinction event.',
    themes: ['Space', 'Survival', 'Science']
  },
  // Add 100+ more books here with diverse genres, ratings, and years
  // For brevity, I'm showing just a sample - in production, this would be fetched from an API
];