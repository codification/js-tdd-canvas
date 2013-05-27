define(['screen'], function(screen) {
    function rect(x, y, width, height) {
        return {x: x,
                y: y,
                width: width,
                height: height};
    };
    buster.testCase('screen', {
        setUp: function() {
            ;
            this.canvas = {
                context: {
                    setFillColor: function() {},
                    fillRect: function() {}
                },
                width: 100,
                height: 50,
                getContext: function(arg) {
                    assert.equals(arg, '2d', "canvas.getContext('2d')");
                    return this.context;
                }
            };
        },
        "defines screen": function() {
            assert.defined(screen({}));
        },
        "has dimensions": function() {
            var scrn = screen(this.canvas);
            assert.equals(scrn.width, this.canvas.width);
            assert.equals(scrn.height, this.canvas.height);
        },
        "drawing": {
            "filled rect": function () {
                var ctx = this.mock(this.canvas.context);
                ctx.expects('setFillColor').withArgs('black');
                ctx.expects('fillRect').withArgs(0,0,1,1);
                var scrn = screen(this.canvas);

                scrn.drawFilledRect('black', rect(0,0,1,1));
            },
            "fill": function() {
                var ctx = this.mock(this.canvas.context);
                ctx.expects('setFillColor').withArgs('black');
                ctx.expects('fillRect').withArgs(0,
                                                 0,
                                                 this.canvas.width,
                                                 this.canvas.height);
                var scrn = screen(this.canvas);

                scrn.fill('black');
            }
        }
    });
});
