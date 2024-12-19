class FilterPanel {
    constructor(container, initialFilters, onFiltersChange) {
        this.container = container;
        this.filters = initialFilters;
        this.onFiltersChange = onFiltersChange;
        
        // Initialize filter elements
        this.genreButtons = container.querySelector('#genreFilters');
        this.ratingInput = container.querySelector('#ratingFilter');
        this.ratingValue = container.querySelector('#ratingValue');
        this.yearMinInput = container.querySelector('#yearMin');
        this.yearMaxInput = container.querySelector('#yearMax');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Rating filter
        this.ratingInput.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            this.ratingValue.textContent = `${value.toFixed(1)}+ ⭐`;
            this.filters.minRating = value;
            this.onFiltersChange(this.filters);
        });
        
        // Year filter
        this.yearMinInput.addEventListener('change', (e) => {
            this.filters.yearRange[0] = parseInt(e.target.value);
            this.onFiltersChange(this.filters);
        });
        
        this.yearMaxInput.addEventListener('change', (e) => {
            this.filters.yearRange[1] = parseInt(e.target.value);
            this.onFiltersChange(this.filters);
        });
    }

    setGenres(genres) {
        this.genreButtons.innerHTML = '';
        genres.forEach(genre => {
            const button = document.createElement('button');
            button.className = 'genre-button';
            button.textContent = genre;
            
            button.addEventListener('click', () => {
                button.classList.toggle('active');
                
                if (button.classList.contains('active')) {
                    this.filters.genres.push(genre);
                } else {
                    this.filters.genres = this.filters.genres.filter(g => g !== genre);
                }
                
                this.onFiltersChange(this.filters);
            });
            
            this.genreButtons.appendChild(button);
        });
    }

    reset() {
        this.filters = {
            genres: [],
            minRating: 0,
            yearRange: [1900, 2024]
        };
        
        // Reset UI
        this.ratingInput.value = 0;
        this.ratingValue.textContent = '0+ ⭐';
        this.yearMinInput.value = 1900;
        this.yearMaxInput.value = 2024;
        
        const activeGenres = this.genreButtons.querySelectorAll('.genre-button.active');
        activeGenres.forEach(button => button.classList.remove('active'));
        
        this.onFiltersChange(this.filters);
    }
}