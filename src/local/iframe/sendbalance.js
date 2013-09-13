$(function() {
    var commands = {
        getBalance: function() {
            return $("#balance").text();
        }
    };

    window.addEventListener("message", function(event) {
        var command = JSON.parse(event.data).command,
            result = commands[command](),
            message = {};

        message[command] = result;

        event.source.postMessage(JSON.stringify(message), event.origin);
    });
});
