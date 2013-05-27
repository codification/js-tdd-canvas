define(['main'], function (main) {
    buster.testCase("main", {
        setUp: function () {
            this.content = document.createElement('div');
        },

        "has a title": function () {
            main(this.content);
            var titles = this.content.getElementsByTagName('h1');
            assert.greater(titles.length, 0, "Number of h1's");
        },
        "has a canvas": function () {
            main (this.content);
            refute.isNull(this.content.querySelector('canvas'));
        }

    });

});
