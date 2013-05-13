// Gumby is ready to go
Gumby.ready(function () {
    console.log('Gumby is ready to go...', Gumby.debug());

    // placeholder polyfil
    if (Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
        $('input, textarea').placeholder();
    }
    //animated logo
    $("div").addClass(function (index, currentClass) {
        var addedClass;
        if (currentClass === "BigLogo") {
            addedClass = "BigLogoColor";
        }
        return addedClass;
    });

    $('.animateDiv').prepend('<h3 class="animated bounceInLeft">by Kogan inc.</h1>');
    $('.animateDiv').prepend('<h2 class="animated fadeInDownBig">Свежее и сочное</h1>');
    $('.animateDiv').prepend('<h1 class="animated fadeInRightBig">CSS3 Review</h1>');
    //top menu
    
    $(window).scroll(function (topPosNav) {
        var topPosNav = $('#nav1').offset().top;
        var topPosWin = $('body').offset();
        if (topPosNav === 0) {
            $(this).css("position", "fixed");
            console.log("event was there");
        };
        console.log("scrolling");
        console.log(topPosNav);
    });
});

// Oldie document loaded
Gumby.oldie(function() {

});

// Document ready
$(function() {

});

