import { RecommendationEngine } from '../utils/RecommendationEngine.js';
import { showLoader, hideLoader } from '../utils/ui.js';
import { renderBooks } from '../core/render.js';

export function handleRecommend(book) {
    showLoader();
    
    setTimeout(() => {
        const recommendations = RecommendationEngine.getRecommendations(
            book,
            window.app.currentBooks
        );
        renderBooks(recommendations);
        window.app.filterPanel.reset();
        hideLoader();
    }, 500);
}