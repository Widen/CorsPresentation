$(function() {
    window.onmessage = function(event) {
        var balance = event.data.getBalance;
        $("#balance").text(balance);
    };

    parent.postMessage({command: "getBalance"}, "http://localhost:8081");
});
