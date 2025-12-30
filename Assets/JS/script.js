$(document).ready(function () {
    AOS.init({
        duration: 1200,
        once: true,
    });

    $('#currentYear').text(new Date().getFullYear());

    $('a.navbar-brand').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $('a.nav-link').click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    $('.navbar-nav .nav-link').click(function () {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});