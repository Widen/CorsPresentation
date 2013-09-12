$(function() {
    var $logo = $("#logo"),
        $cacheContainer = $("#cachedContainer"),
        $cacheImg = $("#cached"),
        $loadBtn = $("#load"),
        storageKey = "logo";

    enableLoadFromCache($cacheContainer, $cacheImg, $loadBtn, storageKey);

    $logo
        // CORS-enabled example
//        .attr("crossorigin", "anonymous")
        .attr("src", "http://corspresentation-env.elasticbeanstalk.com/image/widen.png")

        // proxying example
//        .attr("src", "/proxy?source=" + encodeURIComponent("http://widen.smartimage.com/thumbnail/BROON8/960px/WidenFlat-GreyLogoTagPMS.png?ref=c6eb1a258"))
        .prependTo($("#original"));


    $logo.on("load", function() {
        var $canvas = $("#canvas"),
            context = $canvas[0].getContext("2d");

        context.drawImage($logo[0], 0, 0);

        enableCaching($canvas, storageKey);
        enablePainting($canvas, context);
    });

    function enableLoadFromCache($container, $emptyImg, $btn, key) {
        $btn.click(function() {
            var imageData = localStorage.getItem(key);

            if (imageData) {
                $container.show();
                $emptyImg.attr("src", imageData);
            }
        });
    }

    function enableCaching($canvas, key) {
        $("#cache").click(function() {
            var dataUrl = $canvas[0].toDataURL();
            localStorage.setItem(key, dataUrl);
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
