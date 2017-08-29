$(document).ready(function() {
    console.log("jquery cargado");
    var altura = $(window).height();
    $("#imagen").css({"height": altura});
    $("#home").css({"height": altura});
    $("#trabajo").css({"height": altura});
    $("#estudio").css({"height": altura});
    $("#familia").css({"height": altura});
    $("#yo").css({"height": altura});

    $("#iraopciones").click(function(){
        console.log("entro");
        $('html, body').animate({
            scrollTop: $("#home").offset().top}, 2000);
    });
});