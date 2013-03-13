var places = [
    {
        name: 'The Royal Oak',
        selector: '#oak',
        closeSelector: '#close1',
        backgroundHeight: '1258px',
        classesToRemove: 'rightalign botrightalign botleftalign',
        classesToAdd: 'leftalign',
        embed: '<iframe frameborder="0" marginheight="0" marginwidth="0" style="border:  0;" src="http://static.guim.co.uk/interactivestore/2013/3/7/1362654594510/815048/publish_to_web/_files/iframe.html" width="550" height="400" allowfullscreen="false" mozallowfullscreen="false" webkitallowfullscreen="false" oallowfullscreen="false" msallowfullscreen="false"></iframe>',
        stuffToShowOnClose: '#bottomleft, .pubname',
        fadeDelay: 1000
    },
    {
        name: 'The Griffin',
        selector: '#griffin',
        closeSelector: '#close2',
        backgroundHeight: '1256px',
        classesToRemove: 'rightalign leftalign botrightalign',
        classesToAdd: 'botleftalign',
        embed: "",
        stuffToShowOnClose: '.pubname, #thegame',
        fadeDelay: 1000
    },

    {
        name: 'The Game',
        selector: '#gamecopy',
        closeSelector: '#close3',
        backgroundHeight: '628px',
        classesToRemove: 'botleftalign leftalign botrightalign',
        classesToAdd: 'rightalign',
        embed: "",
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
        embed: "",
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
        embed: "",
        stuffToShowOnClose:'.pubname',
        fadeDelay: 1000
    }
];

var originalBackgroundHeight = '628px';

var background,
    videoheadholder,
    videohead,
    videoholder,
    videowrapper;


function processPlaceClick(place) {

    console.log("fading a place");

    $('.pubname').fadeOut(place.fadeDelay);

    window.setTimeout(function(){
        background.removeClass(place.classesToRemove).addClass(place.classesToAdd);
        background.animate({'height': place.backgroundHeight}, place.fadeDelay, function(event){
            videoheadholder.fadeIn();
            videohead.html(place.name).fadeIn();
            videoholder.html(place.embed).fadeIn();
            videowrapper.fadeIn();
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
            videowrapper.fadeOut();
            $(videoholder).html("");
            $(videoholder).fadeOut();
            $(videoheadholder).fadeOut();
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
    videohead = $('#videohead')
    videoheadholder = $("#videoheadholder");
    videoholder = $("#videoholder");
    videowrapper = $("#videowrapper")

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