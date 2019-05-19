$(document).ready(function() {


    $(".icon").click(function() {

        if ($('.menu').css('display') == 'none') {
            $(".menu").show("slide", 200);
            // $(".icon").addClass("red");
        }

        else {
            $(".menu").hide("slide", 200);
            // $(".icon").removeClass("red");
        };

    });


});
