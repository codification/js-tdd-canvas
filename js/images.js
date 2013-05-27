define([], function() {
    var undrawable = function(screen) {
    };
    var elements = {
        "background": function(screen) {
            screen.fill('black');
        }
    };

    return {
        load: function (name, onError) {
            onError = onError || function() {};
            if (elements[name]) {
                return elements[name];
            }
            else {
                onError("Unknown element:", name);
                return undrawable;
            }
        }
    };
});
