// Initialize Lucide icons
lucide.createIcons();

// State
let currentBooks = books;
let filters = {
    genres: [],
    minRating: 0,
    yearRange: [1900, 2024]
};

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const loader = document.getElementById('loader');

// Initialize FilterPanel
const filterPanel = new FilterPanel(
    document.querySelector('.filter-panel'),
    filters,
    handleFiltersChange
);

// Set available genres
filterPanel.setGenres(FilterUtils.getUniqueGenres(books));

// Event Handlers
function handleFiltersChange(newFilters) {
    filters = newFilters;
    updateDisplayedBooks();
}

function handleSearch(event) {
    showLoader();
    const query = event.target.value;
    
    // Simulate API delay
    setTimeout(() => {
        let filtered = FilterUtils.searchBooks(books, query);
        filtered = FilterUtils.filterBooks(filtered, filters);
        renderBooks(filtered);
        hideLoader();
    }, 300);
}

function handleRecommend(book) {
    showLoader();
    
    // Simulate API delay
    setTimeout(() => {
        const recommendations = RecommendationEngine.getRecommendations(book, books);
        renderBooks(recommendations);
        filterPanel.reset();
        hideLoader();
    }, 500);
}

// UI Updates
function updateDisplayedBooks() {
    showLoader();
    
    // Simulate API delay
    setTimeout(() => {
        const filtered = FilterUtils.filterBooks(currentBooks, filters);
        renderBooks(filtered);
        hideLoader();
    }, 300);
}

function renderBooks(books) {
    booksGrid.innerHTML = '';
    
    if (books.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No books found matching your criteria.';
        booksGrid.appendChild(noResults);
        return;
    }
    
    books.forEach(book => {
        const card = BookCard.create(book, handleRecommend);
        booksGrid.appendChild(card);
    });
}

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

// Event Listeners
searchInput.addEventListener('input', handleSearch);

// Initial render
renderBooks(books);