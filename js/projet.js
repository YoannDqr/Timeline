$(document).ready(function(){
    var $projets = $('div[class^="projet-hover"]');
    var $model = $(".col-md-4.projet");

    
    $projets.css({"height":$model.innerWidth(), "width":$model.innerWidth()});
    $projets.hover(function(){
        $("img."+ $(this).attr("class")).css("opacity", "0.3");
        console.log("#"+$(this).attr("class")+"-detail");
        $("#"+$(this).attr("class")+"-detail").css("opacity","1");
        /*$(this).css("visibility","hidden");*/
        },
        function(){
            $("img."+ $(this).attr("class")).css("opacity", "1");
            $("#"+$(this).attr("class")+"-detail").css("opacity","0");
            /*$(this).css("visibility", "inherit");*/
        }

        
    )
});