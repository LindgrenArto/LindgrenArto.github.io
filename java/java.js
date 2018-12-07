$(document).ready(function () {
    // Activate Carousel
    $("#carousel").carousel();
    $("#carousel").stop();

});


$("#mystory").text("Hei! Olen Arto Lindgren, olen opiskelijana Saimaan ammattikorkeakoulussa." + 
 " Tällä sivustolla kerron taidoistani ja esittelen portfolion tähänastisista projekteistani. Olen 25 vuotias tulevaisuuden osaaja ja taitoni kehittyvät nopeasti." + 
 " Harrastan liikuntaa lähes päivittäin ja pidän muutenkin itseni terävänä ja valmiudessa koko ajan. Pidän myös lukemisesta, elokuvista sekä sijoittamisesta.");

$("#contact").text("Sähköposti:");


var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton;            // give $().bootstrapBtn the Bootstrap functionality