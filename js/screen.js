define([], function() {
    return function(canvas) {
        function rect(x, y, width, height) {
            return {x: x,
                    y: y,
                    width: width,
                    height: height};
        };

        return {
            width: canvas.width,
            height: canvas.height,
            'drawFilledRect': function(color, rectangle) {
                var ctx = canvas.getContext('2d');
                ctx.setFillColor(color);
                ctx.fillRect(rectangle.x, rectangle.y,
                             rectangle.width, rectangle.height);
            },
            'fill': function(color) {
                this.drawFilledRect(color, rect(0,0, this.width, this.height));
            }
        };
    };
});
