// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs

//= require mousetrap
//= require bootstrap-sprockets
//= require jquery.infinite-pages

// require turbolinks
//= require_tree .
//= require_self

$(window).load(function() {
   show();
});

function show() {
    $('.loader').delay(1000).hide();
    $('body').fadeIn();
};

setTimeout(show, 3000);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-default').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

$('html').keydown(function (e) {
	if (e.keyCode == 38 || e.keyCode == 67) {
		$('.navbar-default').toggleClass('nav-down').toggleClass('nav-up');
	}
});


function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st < lastScrollTop){
        // Scroll Down
        $('.navbar-default').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-default').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}



$('a[href*=#]:not([href=#])').keydown(function(e) {
    if (e.keyCode == 87 || e.keyCode == 83) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    }
});


// For Flash-notices
$(document).ready(function(){
    setTimeout(function(){
        $('#notice-wrapper').fadeOut("slow", function(){
            $(this).remove();
        })
    }, 3141);
});
