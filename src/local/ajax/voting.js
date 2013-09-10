$(function() {
    $("#upvote").click(function() {
        vote(true);
    });

    $("#downvote").click(function() {
        vote(false);
    });

    function updateVotesUi(votes) {
        $("#votes").text(votes);
    }

    function vote(isUp) {
        var url = "http://corspresentation-env.elasticbeanstalk.com/vote",
            param = "?isUp=" + isUp,
            transport = new XMLHttpRequest;

        if (transport.withCredentials === undefined) {
            transport = new XDomainRequest;
        }

        transport.open("POST", url + param);

        transport.onload = function() {
            updateVotesUi(transport.responseText);
        };

        transport.send();
    }

//    function getVotes() {
//        var url = "http://corspresentation-env.elasticbeanstalk.com/votes",
//            xhr = new XMLHttpRequest;
//
//        xhr.open("GET", url);
//
//        xhr.onreadystatechange = function() {
//            if (xhr.readyState === 4 && xhr.status === 200) {
//                updateVotesUi(xhr.responseText);
//            }
//        };
//
//        xhr.send();
//    }
//
//    getVotes();
});

window.updateVotesUi = function(votes) {
    $("#votes").text(votes);
};

