$(function() {
    window.onmessage = function(event) {
        var balance = JSON.parse(event.data).getBalance;
        $("#balance").text(balance);
    };

    parent.postMessage(JSON.stringify({command: "getBalance"}), "http://localhost:8081");
});
