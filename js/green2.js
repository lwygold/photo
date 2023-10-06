$(function(){
    
    if ($('body *').is('[class*=ani]')) { 
        green_sock();        
    }   
   
    const progressBar = document.querySelector('.progress-bar');

    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger를 사용하여 스크롤 이벤트 감지
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.progress-section', // 감지할 요소 선택
            start: 'top 0%', // 감지를 시작할 위치  ==> 컨텐츠 맨윗부분이 브라우저 위에 닿으면 시작.       
            // start: 'top 100%', // 감지를 시작할 위치  ==> 컨텐츠 맨윗부분이 브라우저 아래부분에 닿으면 시작.       
            end: 'bottom 0',
            pin:true,
            onUpdate: self => {
                // 스크롤 위치에 따라 진행도 업데이트
                const progress = self.progress * 100;
                progressBar.style.width = `${progress}%`;
            },
        }
    });

    tl2.to('.box1',{
        "opacity" :1,
        'left': "0%",
        "top": "-50%",
    },1);

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
                toggleClass: "active",
                once: true,
            }
        });            
    });


}