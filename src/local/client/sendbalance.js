$(function() {
    var commands = {
        getBalance: function() {
            return $("#balance").text();
        }
    };

    window.addEventListener("message", function(event) {
        var command = event.data.command,
            result = commands[command](),
            message = {};

        message[command] = result;

        event.source.postMessage(message, event.origin);
    });
});
