/*$(document).ready(function(){
    $(document).mousemove(function(event){
        //alert(event.pageX + ", " + event.pageY);
    });
});*/
var offset = -80;
$(document).ready(function(){
     $(".timeline-block").css({"opacity":"0"});
     $("div.descriptif").css({"display":"none"});
    var test = $(".timeline-block");
    var elements = [];

     $(".timeline-block").each(function(){
         elements.push($(this));
     });


    $(window).scroll(function(){
        for(var i in elements){
            var element = elements[i];
            if( ( $(window).scrollTop() + $(window).height()/2 ) >= ($(element).offset().top + i * 90 )){
                $(element).animate({opacity: '1'}, 2000); 
            }
        }
    });

    $("div.timeline-block").click(function(){
        var id = $(this).attr('id');
        if($("div.descriptif."+id).css('display') == 'none'){

            $(".timeline-block#"+id+" div.timeline-block-content").css({opacity: '0'}, 1000);
            $(".timeline-block div.timeline-block-content").css({opacity: '0'}, 1000);
            $(".timeline-block#"+id+" div.timeline-block-content").css({opacity: '1'}, 1000);
            //$(this).css({opacity:"0"});
            $("div.descriptif."+id).css({"display":"block"});
            $("div.descriptif."+id).animate({opacity: '1'}, 1000); 
            
        }
        else{
            $("div.descriptif."+id).animate({opacity: '0'}, 1000);
            $("div.descriptif."+id).css({"display":"none"});
            $(".timeline-block div.timeline-block-content").animate({opacity: '1'}, 1000);
        }
    });
});
