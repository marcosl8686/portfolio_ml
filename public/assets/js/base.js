window.addEventListener("load", function () {
    document.querySelector('body').classList.add('loaded');
    $(this).scrollTop(0);
    window.onscroll = function (e) {
        $('#hideNav').fadeIn();
        $('#hideNav').attr('id', 'showNav');
        $('.scroll_cta').hide();
    }
    //custom Scroll
    function scrollTo(selector) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(selector).offset().top
        }, 1000);
    }
    $('body').on('click', '#contact, #getInTouch', function (e) {
        e.preventDefault();
        scrollTo('#footer');
    });
    $('#about_nav').on('click', function(e){
        e.preventDefault();
        scrollTo('#about');
    });
});