$(function() {
    var $logo = $("#logo");

    $logo
//        .attr("crossorigin", "anonymous")
        .attr("src", "http://corspresentation-env.elasticbeanstalk.com/client/image/widen.png")
        .prependTo($("#original"));


    $logo.on("load", function() {
        var $canvas = $("#canvas"),
            context = $canvas[0].getContext("2d");

        context.drawImage($logo[0], 0, 0);

        enableCaching($canvas);
        enablePainting($canvas, context);
    });

    function enableCaching($canvas) {
        $("#cache").click(function() {
            var dataUrl = $canvas[0].toDataURL();
            localStorage.setItem("logo", dataUrl);
        });
    }

    function enablePainting($canvas, context) {
        var canvasOffset = $canvas.offset(),
            drawing = false;

        $canvas.mousemove(function(event) {
            if (drawing) {
                context.lineTo(event.pageX - canvasOffset.left,
                               event.pageY - canvasOffset.top);
                context.stroke();
            }
        })
            .mousedown(function(event) {
                drawing = true;
                context.beginPath();
                context.moveTo(event.pageX - canvasOffset.left,
                               event.pageY - canvasOffset.top);
            });

        $(window).mouseup(function() {
            drawing = false;
        });
    }
});
