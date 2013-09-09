$(function() {

    function getTime() {
        var xhr = new XMLHttpRequest;

        xhr.open("GET", "http://corspresentation-env.elasticbeanstalk.com/time");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var time = xhr.responseText;

                $("#time").text(time);
            }
        };

        xhr.send();
    }

    getTime();
});
