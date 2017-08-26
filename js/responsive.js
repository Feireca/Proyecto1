$(document).ready(function() {
    console.log("jquery cargado");
    var altura = $(window).height();
    $("#imagen").css({"height": altura});
    $("#home").css({"height": altura});

    $("#iraopciones").click(function(){
        console.log("entro");
        $('html, body').animate({
            scrollTop: $("#home").offset().top}, 2000);
    });
});