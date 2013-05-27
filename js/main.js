define(['jquery', 'images'], function($, images) {
    return {
        init: function(content) {
            var title = document.createElement('h1');
            title.textContent = 'Hullo';
            $(content).append($(title));

            var canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 480;
            $ (content).append(canvas);

            var bg = images.load('background', this.errorHandler);
            bg(canvas.getContext('2d'));
        },
        errorHandler: function() {
            console.log('Error: ', arguments);
        }
    };
});
