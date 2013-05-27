curl({
    baseUrl: 'js',
    paths: {
        'test': '../test',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'
    }
});

window.require = curl;
