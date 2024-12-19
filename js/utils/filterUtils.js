class FilterUtils {
    static getUniqueGenres(books) {
        const genres = new Set();
        books.forEach(book => {
            book.genre.forEach(g => genres.add(g));
        });
        return Array.from(genres).sort();
    }

    static getYearRange(books) {
        const years = books.map(book => book.publicationYear);
        return [Math.min(...years), Math.max(...years)];
    }

    static filterBooks(books, filters) {
        return books.filter(book => {
            // Genre filter
            if (filters.genres.length > 0) {
                if (!book.genre.some(g => filters.genres.includes(g))) {
                    return false;
                }
            }

            // Rating filter
            if (book.rating < filters.minRating) {
                return false;
            }

            // Year range filter
            if (book.publicationYear < filters.yearRange[0] ||
                book.publicationYear > filters.yearRange[1]) {
                return false;
            }

            return true;
        });
    }

    static searchBooks(books, query) {
        const searchTerm = query.toLowerCase();
        return books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    }
}