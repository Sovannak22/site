$(document).ready(function () {
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    if (window.matchMedia('min-width:990px').matches){
        $window.scroll(function () {
            var scroll=window.scrollTop();
            if (scroll > 300){
                $("#navbarpro").css("background","#000");
            }
            else{
                $("#navbarpro").css("background","none"); 
            }
          })
    }
})
