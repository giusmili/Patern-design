class MovieCard {
    constructor(movie) {
        this._movie = movie
    }

    createMovieCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper')

        const movieCard = `
            <section class="movie-thumbnail center">
                <img
                    alt="${this._movie.title}"
                    src="/assets/thumbnails/${this._movie.picture}"
                />
            </section>
            <h3 class="fs-16 center">${this._movie.title}</h3>
            <p class="fs-14 center">
                <span>${this._movie.released_in}</span>
                -
                <span>${this._movie.duration}</span>
            </p>
        `
        
        $wrapper.innerHTML = movieCard
        return $wrapper
    }
}
