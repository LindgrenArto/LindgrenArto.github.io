$(document).ready(function () {
    // Activate Carousel
    $("#carousel").carousel();

});


$("#mystory").text("Hei! Olen Arto Lindgren, olen opiskelijana Saimaan ammattikorkeakoulussa. Tällä sivustolla kerron taidoistani ja esittelen portfolion tähänastisista projekteistani.");

$("#contact").text("Sähköposti:");


var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton;            // give $().bootstrapBtn the Bootstrap functionality