import { FilterUtils } from '../utils/FilterUtils.js';
import { showLoader, hideLoader } from '../utils/ui.js';
import { renderBooks } from '../core/render.js';

export function handleSearch(event) {
    showLoader();
    const query = event.target.value;
    
    setTimeout(() => {
        let filtered = FilterUtils.searchBooks(window.app.currentBooks, query);
        filtered = FilterUtils.filterBooks(filtered, window.app.filters);
        renderBooks(filtered);
        hideLoader();
    }, 300);
}