define([], function() {
    var undrawable = function(ctx) {
    };
    var elements = {
        "background": function(ctx) {
            ctx.fillRect(0,0, ctx.width, ctx.height);
        }
    };

    return {
        load: function (name, onError) {
            onError = onError || function() {};
            if (elements[name]) {
                return elements[name];
            }
            else {
                onError("Unknown image:", name);
                return undrawable;
            }
        }
    };
});
