$(function() {
    var $resultsContainer = $('#results-container');

    $resultsContainer.on('click', '.movie', function() {
        const imdbID = $(this).data('id');
        getMovieData({ i: imdbID, apikey: '9c1996d3' }).then(function (data) {
            console.log(data);
        })
    })

    function getMovieData(options) {
        const result = $.ajax({
            url: 'http://www.omdbapi.com/',
            data: options
        })

        return result;
    }

    function normalizedMovies (data) {
        const movieData = data.Search;

        const normalizedMovies = movieData.map(function(movie) {
            const { Poster: poster, Title: title, imdbID } = movie;

            return {
                poster,
                title,
                imdbID
            }
        })

        return normalizedMovies;
    }

    function renderMovies (moviesToRender) {
        $resultsContainer.empty();

        moviesToRender.forEach(function (movie) {
            const { poster, title, imdbID } = movie;
            const template = `
                <div class="movie" data-id="${imdbID}">
                    <h1>${title}</h1>
                    <img src="${poster}" alt="${title}">
                </div>
            `;

            $resultsContainer.append(template);
        })
    }

    getMovieData({ s: 'Batman', apikey: '9c1996d3' })
        .then(normalizedMovies)
        .then(renderMovies)
});
