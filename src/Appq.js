import $ from 'jquery'

$(document).ready(function() {

    $("a").click(function() {
        // remove classes from all
        $("a").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });


    $(".tog").click(function() {
        $(".tog").removeClass("login")
        $(this).addClass("cha")
    })


})