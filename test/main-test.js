define(['main', 'images'], function (main, images) {
    buster.testCase("main", {
        setUp: function() {
            this.content = document.createElement('div');
        },
        layout: {
            setUp: function () {
                this.stub(images, "load").returns(function(){});
                main.init(this.content);
            },
            "has a title": function () {
                var titles = this.content.getElementsByTagName('h1');
                assert.greater(titles.length, 0, "Number of h1's");
            },
            "has a canvas": function () {
                refute.isNull(this.content.querySelector('canvas'));
            },
            "canvas is bigger than 320x200": function () {
                var canvas = this.content.querySelector('canvas');
                assert.greater(canvas.width, 320, "Width");
                assert.greater(canvas.height, 240, "Height");
            }},
        drawing: {
            "draws background image": function() {
                var bg = this.mock().once();
                this.stub(images, "load").returns(bg);
                main.init(this.content);
            },
            "draws background image on 2d context": function() {
                var bg = function(ctx) {
                    assert.defined(ctx.fillRect);
                };
                this.stub(images, "load").returns(bg);
                main.init(this.content);
            }
        }
    });

});
