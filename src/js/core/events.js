import { handleSearch } from '../handlers/search.js';
import { handleRecommend } from '../handlers/recommend.js';
import { EventEmitter } from '../utils/EventEmitter.js';
import { updateDisplayedBooks } from './render.js';

export function setupEventListeners() {
    // Create event emitter
    window.app.events = new EventEmitter();
    
    // Set up DOM event listeners
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Set up custom event listeners
    window.app.events.on('filtersChanged', updateDisplayedBooks);
    window.app.events.on('recommend', handleRecommend);
}