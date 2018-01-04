$(function() {
    // $.ajax({
    //     url: 'path/to/resource',
    //     method: 'HTTP VERB'
    // });

    const result = $.ajax({
        url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
        // success: function (data) {
        //     console.log(data);
        // },
        // fail: function (e) {
        //     console.log(e);
        // }
    });

    result.then(function(data) {
        console.log(data.data);
    })
})
