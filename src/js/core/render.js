import { BookCard } from '../components/BookCard.js';
import { FilterUtils } from '../utils/FilterUtils.js';
import { showLoader, hideLoader } from '../utils/ui.js';

export function renderInitialBooks() {
    renderBooks(window.app.currentBooks);
}

export function updateDisplayedBooks() {
    showLoader();
    
    setTimeout(() => {
        const filtered = FilterUtils.filterBooks(
            window.app.currentBooks,
            window.app.filters
        );
        renderBooks(filtered);
        hideLoader();
    }, 300);
}

export function renderBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';
    
    if (books.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No books found matching your criteria.';
        booksGrid.appendChild(noResults);
        return;
    }
    
    books.forEach(book => {
        const card = BookCard.create(book, (book) => {
            window.app.events.emit('recommend', book);
        });
        booksGrid.appendChild(card);
    });
}