// Main application entry point
import { initializeApp } from './core/initialize.js';
import { setupEventListeners } from './core/events.js';
import { renderInitialBooks } from './core/render.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    renderInitialBooks();
});