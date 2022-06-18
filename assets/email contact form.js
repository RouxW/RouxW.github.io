function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbxmRn4lrVNKSElJ0v0fo-3ra1zADbDftXXJJcICEve-vQavpz8s80AAfhzC7isTLS9n/exec";
    //get data from form
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    //send data
    var url = script_url + "?callback=thanks&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function thanks(e) {
    //confirmation
    alert("Thanks, I'll get back to you soon.");
}
