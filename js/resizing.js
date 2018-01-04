function titre(){
    var hauteur = $(window).height() + 300;
    $(".row.titre").css({'height':hauteur});
    var translate = hauteur - $("div.about").innerHeight()/2 - $("div.about").offset().top;
    var translate2 = $("div.contact").innerHeight()/2;
    $("div.about").css({'transform':'translate(50%,' + translate + 'px)'});
    $("div.contact").css({'transform':'translate(35%,' + translate2 + 'px)'});
    $(".row.competences").css({'height':hauteur + $("div.about").innerHeight()*1.7});

    $(".row.competences>.container").css({"padding-top":$("div.about").height() - 100});
    $(".col-md-4.projet").css("height", $(".col-md-4.projet").width())

    $(".timeline-block-icone").css("left",$('.timeline').innerWidth()/2 - 21+ "px");


    
}

window.onload = function(){ titre() };
window.onresize = function(){ titre() };
