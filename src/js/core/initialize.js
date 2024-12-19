import { books } from '../data/books.js';
import { FilterPanel } from '../components/FilterPanel.js';
import { FilterUtils } from '../utils/FilterUtils.js';

export function initializeApp() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize FilterPanel
    const filterPanel = new FilterPanel(
        document.querySelector('.filter-panel'),
        {
            genres: [],
            minRating: 0,
            yearRange: [1900, 2024]
        },
        handleFiltersChange
    );
    
    // Set available genres
    filterPanel.setGenres(FilterUtils.getUniqueGenres(books));
    
    // Store instances for global access
    window.app = {
        filterPanel,
        currentBooks: books,
        filters: filterPanel.filters
    };
}

function handleFiltersChange(newFilters) {
    window.app.filters = newFilters;
    window.app.events.emit('filtersChanged', newFilters);
}