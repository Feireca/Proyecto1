$(document).ready(function() {
    console.log("jquery cargado");
    var altura = $(window).height();
    $("#imagen").css({"height": altura});
    $("#home").css({"height": altura});
    $("#trabajo").css({"height": altura});
    $("#estudio").css({"height": altura});
    $("#familia").css({"height": altura});
    $("#yo").css({"height": altura});

    var location = window.location.hash;

    function deseleccionar() {
        $("li").each(function () {
            $(this).removeClass("active");
        })
    }

    $("li").click(function(){
        deseleccionar();
        $(this).addClass("active");
    });

    if(location != "") {
            if(location == "#trabajo"){
                $("li:nth-child(2)").addClass("active");
                $this = $("li:nth-child(2)");
            }
            else if(location == "#estudio") {
                $("li:nth-child(3)").addClass("active");
                $this = $("li:nth-child(3)");
            }
            else if(location == "#familia") {
                $("li:nth-child(4)").addClass("active");
                $this = $("li:nth-child(4)");
            }

        $('html, body').animate({
            scrollTop: $(location).offset().top});
    }



    $("#iraopciones").click(function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top}, 2000);
    });

    $(window).on("navigate", function(event, data) {
       console.log("event", event);
    });

});

