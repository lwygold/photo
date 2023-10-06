$(function(){
    
    if ($('body *').is('[class*=ani]')) { 
        green_sock();        
    }   
   
});

// green_sock
const green_sock = function (){

    //greensock basic setting
    gsap.registerPlugin(ScrollTrigger);
    var tp = "90%";
    var tp2 = tp;

        // ani_tb ~ ani_opa set
    gsap.utils.toArray(".ani").forEach(function(entry) {    
      
        if($(entry).attr('data-tp')){
            tp = $(entry).attr('data-tp');
        } else {
            tp = tp2;
        }         
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: entry,
                start: "top "+tp,
                toggleClass: "action",
                once: true,
            }
        });            
    });

    
}