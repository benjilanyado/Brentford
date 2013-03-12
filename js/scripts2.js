var places = [
    {
        name: 'The Royal Oak',
        selector: '#topleft',
        closeSelector: '#close1',
        backgroundHeight: '1258px',
        classesToRemove: 'rightalign botrightalign botleftalign',
        classesToAdd: 'leftalign',
        stuffToShowOnClose: '#bottomleft, .pubname',
        fadeDelay: 1000
    },
    {
        name: 'The Griffin',
        selector: '#bottomleft',
        closeSelector: '#close2',
        backgroundHeight: '1256px',
        classesToRemove: 'rightalign leftalign botrightalign',
        classesToAdd: 'botleftalign',
        stuffToShowOnClose: '.pubname, #thegame',
        fadeDelay: 1000
    },

    {
        name: 'The Game',
        selector: '#thegame',
        closeSelector: '#close3',
        backgroundHeight: '628px',
        classesToRemove: 'botleftalign leftalign botrightalign',
        classesToAdd: 'rightalign',
        stuffToShowOnClose: '.pubname, #topright',
        fadeDelay: 50
    },

    {
        name: 'The New Inn',
        selector: '#newinn',
        closeSelector: '#close4',
        backgroundHeight: '1256px',
        classesToRemove: 'botleftalign leftalign botrightalign',
        classesToAdd: 'rightalign',
        stuffToShowOnClose:'#bottomright, .pubname',
        fadeDelay: 1000
    },

    {
        name: 'The Princess Royal',
        selector: '#princess',
        closeSelector: '#close5',
        backgroundHeight: '1256px',
        classesToRemove: 'botleftalign leftalign rightalign',
        classesToAdd: 'botrightalign',
        stuffToShowOnClose:'.pubname',
        fadeDelay: 1000
    }
];

var originalBackgroundHeight = '628px';

var background,
    videohead,
    videoholder;

function processPlaceClick(place) {

    console.log("fading a place");

    $('.pubname').fadeOut(place.fadeDelay);

    window.setTimeout(function(){
        background.removeClass(place.classesToRemove).addClass(place.classesToAdd);
        background.animate({'height': place.backgroundHeight}, place.fadeDelay, function(event){
            videohead.html(place.name).fadeIn();
            videoholder.html("").fadeIn();
            console.log("place open");
        });
    }, place.fadeDelay);

    var close = $(place.closeSelector);
    close.delay(2500).fadeIn(function(){
        close.addClass("open");
    });

    close.on('click', function(event){
        console.log("close");
        event.preventDefault();
        if (close.hasClass("open")) {
            $(videoholder).fadeOut();
            $(videohead).fadeOut();
            $(background).animate({'height': originalBackgroundHeight}, place.fadeDelay);

            $(this).fadeOut(function(){
                $(".pubname").delay(place.fadeDelay).fadeIn(function(){
                    $(place.stuffToShowOnClose).fadeIn();
                });
            });
        } else {
            return false;
        }
    });
}

$(document).ready(function(){
    background = $('#background');
    videohead = $("#videohead");
    videoholder = $("#videoholder");

    for (var i in places) {
        var place = places[i];

        $(place.selector).on('click', (function(p, e){
            event.preventDefault();
            return function(){
                processPlaceClick(p);
                e.preventDefault(); // not sure if you need this and the one above too
           };
        })(place, event));
    }

});