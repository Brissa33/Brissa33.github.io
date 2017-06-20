$(document).ready(function () {
    $('.navLinks a').click(function (e) {
        $('.navLinks a').removeClass('active');
        $(this).addClass('active');
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
});

