$(function() {
    var votingUrl = "http://corspresentation-env.elasticbeanstalk.com/vote";

    $("#upvote").click(function() {
        vote(true);
    });

    $("#downvote").click(function() {
        vote(false);
    });

    function updateVotesUi(votes) {
        $("#votes").text(votes);
    }

    function createTransport() {
        var transport = new XMLHttpRequest;

        if (transport.withCredentials === undefined) {
            transport = new XDomainRequest;
        }

        return transport;
    }

    function sendRequest(type, params) {
        var transport = createTransport(),
            url = params ? votingUrl + params : votingUrl;

        transport.open(type, url);

        transport.onload = function() {
            updateVotesUi(transport.responseText);
        };

        transport.send();
    }

    function vote(isUp) {
        var param = "?isUp=" + isUp;

        sendRequest("POST", param);
    }

    function enableReset() {
        $("#reset").click(function() {
            sendRequest("DELETE");
        });
    }

//    function getVotes() {
//       sendRequest("GET");
//    }
//
//    getVotes();
    enableReset();
});

window.updateVotesUi = function(votes) {
    $("#votes").text(votes);
};

