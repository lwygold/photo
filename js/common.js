var clickType = "click";
if ("ontouchstart" in document.documentElement) {
    clickType = "touchstart";
}
$(function () {

    popup();
});


const popup = function() {

    $('.popup__close').click(function () {
        $('.popup__wrap').removeClass('active');
    });

    $('.photo__button__box').click(function (e) {
        e.preventDefault();
        $('.popup__wrap').addClass('active');
    });

}

