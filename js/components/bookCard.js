class BookCard {
    static template = document.getElementById('bookCardTemplate');

    static create(book, onRecommend) {
        const clone = this.template.content.cloneNode(true);
        const card = clone.querySelector('.book-card');
        
        // Set book cover
        const coverImg = card.querySelector('img');
        coverImg.src = book.coverUrl;
        coverImg.alt = `Cover of ${book.title}`;
        
        // Set book details
        card.querySelector('.book-title').textContent = book.title;
        card.querySelector('.book-author').textContent = book.author;
        card.querySelector('.book-rating span').textContent = book.rating.toFixed(1);
        card.querySelector('.book-description').textContent = book.description;
        
        // Add genres
        const genresContainer = card.querySelector('.book-genres');
        book.genre.forEach(genre => {
            const genreTag = document.createElement('span');
            genreTag.className = 'book-genre';
            genreTag.textContent = genre;
            genresContainer.appendChild(genreTag);
        });
        
        // Add recommend button handler
        const recommendButton = card.querySelector('.recommend-button');
        recommendButton.addEventListener('click', () => onRecommend(book));
        
        return card;
    }
}