define(['jquery'], function($) {
    return function(content) {
        var title = document.createElement('h1');
        title.textContent = 'Hullo';
        $(content).append($(title));

        $ (content).append (document.createElement ('canvas'));
    };
});
