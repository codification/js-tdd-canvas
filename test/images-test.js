define(['images'], function(images) {
    buster.testCase("images", {
        setUp: function() {
            this.errorHandler = this.stub();
            var bad_name = "unknown image";
        },
        "elements must be known": function () {
            images.load(this.bad_name, this.errorHandler);
            assert.calledWith(this.errorHandler, "Unknown element:", this.bad_name);
        },
        "unknowns are not drawn": function () {
            var drawable = images.load(this.bad_name);

            refute.exception(function () {
                drawable({});
            });
        },
        "works without an errorHandler": function() {
            var image = images.load("background");
            assert.defined(image);
        },
        "can be drawn": function() {
            var image = images.load("background");
            assert.isFunction(image);
        },
        "elements": {
            "background is a black rectangle": function() {
                var scrn = {
                    fill: function() {}
                };
                var screen = this.mock(scrn);
                screen.expects('fill').withArgs('black');
                images.load("background")(scrn);
            }
        }

    });
});
