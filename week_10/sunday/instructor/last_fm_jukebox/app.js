$(function() {
    const result = $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/',
        data: {
            method: 'artist.gettoptracks',
			artist: 'tom petty',
			api_key: 'df2c675f58b28056659b902999cdc828',
			format: 'json'
        }
    })

    result.then(function(songData) {
        console.log(songData);
    })
});
