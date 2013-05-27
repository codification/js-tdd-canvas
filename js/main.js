define(['jquery', 'images', 'screen'], function($, images, screen) {
    return {
        init: function(content) {
            var title = document.createElement('h1');
            title.textContent = 'Hullo';
            $(content).append($(title));

            var canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 480;
            $(content).append(canvas);

            var bg = images.load('background', this.errorHandler);
            var theScreen = screen(canvas);
            bg(theScreen);
        },
        errorHandler: function() {
            console.log('Error: ', arguments);
        }
    };
});
