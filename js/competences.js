$(document).ready(function(){
    $(window).scroll(function(){

        if($(window).scrollTop() > $("div.competences").height()){
            var tools = $("p[class^='competences-tools-']");
            for(var i = 0; i < tools['length']; i++){
                var tool = tools[i];
                $(tool).html($(tool).attr("class").split('competences-tools-')[1]);
            }

            var toolsValues = $("div[class^='competences-bar-']");
            for(var i = 0; i < toolsValues['length']; i++){
                var toolValues = toolsValues[i];
                var id = $(toolValues).attr("id");
                $(toolValues).animate({width:id+"%"}, 2000);
                var label = "p.competences-value-" + $(toolValues).attr("class").split("competences-bar-")[1];
                $(label).text(id + "%");

            }
        }
    });
});