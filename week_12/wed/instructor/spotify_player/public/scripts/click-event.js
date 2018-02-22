$(function() {
    $('body').on('click', '.track-name', function() {
        const _this = $(this);
        const id = _this.data('id');

        const result = $.ajax({
            url: `/track/${id}`
        });

        result.then(function(data) {
            console.log(data);
        })
    });
});
