$(document).ready(function() {
    $('.playbutton').click(function() {
        $('#volvo_vid').get(0).play();

        $('.playbutton').addClass('hide');

        $('.logo').addClass('hide');

        $('.video_overlay').addClass('hide');
    });

    $('#volvo_vid').click(function() {
        this.paused ? this.play() : this.pause();

        $('.playbutton').toggleClass('hide');

        $('.logo').addClass('hide');

        $('.video_overlay').addClass('hide');
    });

    $('.playbutton1').click(function() {
        $('#volvo_vid1').get(0).play();

        $('.playbutton1').addClass('hide');
    });

    $('#volvo_vid1').click(function() {
        this.paused ? this.play() : this.pause();

        $('.playbutton1').toggleClass('hide');
    });

    $('a').click(function (e) {
        e.preventDefault();
    });
});