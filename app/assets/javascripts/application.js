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
    if ("https://lit-wave-4082.herokuapp.com/" == document.referrer) {
        $('.navbar-default').css("opacity", 1);
    }
};

setTimeout(show, 3000);

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
    }, 2015);
});

// For changing colors
$(document).ready(function(){
    $('#mode').click(function(){
        $('body').toggleClass('daytime nighttime');
        if (nighttime == "true") {
            sessionStorage.setItem('nighttime', "false");
        } else {
            sessionStorage.setItem('nighttime', "true");
        }
    });
    var nighttime = sessionStorage.getItem('nighttime');
    if (nighttime  == "true") {
        $('body').toggleClass('daytime nighttime');
    }
});

$('html').keydown(function(e){
    if (e.keyCode == 82) {
        $('body').toggleClass('daytime nighttime');
        var nighttime = sessionStorage.getItem('nighttime');
        if (nighttime  == "true") {
            sessionStorage.setItem('nighttime', "false");
        }
        else {
            sessionStorage.setItem('nighttime', "true");
        }
    }
});

if( window.localStorage && !window.localStorage.isReturningVisitor ) {
    window.localStorage.isReturningVisitor = true;
}

