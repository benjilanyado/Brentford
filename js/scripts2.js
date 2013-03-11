// so first we define an array of objects to work with
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
 
// next we set up some global variables so we don't keep hitting them
var originalBackgroundHeight = '628px';
 
// these are empty placeholders for defining when the document is ready
var background,
    videohead,
    videoholder;
 
// set up functions to run when stuff gets clicked (keeps domready code clean)
function processPlaceClick(place) {
 
    // do stuff with the background
    $('.pubname').fadeOut(function(){
        background.removeClass(place.classesToRemove).addClass(place.classesToAdd).animate({
            'height': place.backgroundHeight
        }, place.fadeDelay, function(){
            videohead.html(place.name).fadeIn();
            videoholder.html("").fadeIn();
        });
    });
 
    var close = $(place.closeSelector);
    close.delay(2500).fadeIn(function(){
        close.addClass("open")
    });

    close.on('click', function(){
       
    if (close.hasClass("open")) {
        $(videoholder).fadeOut();
        $(videohead).fadeOut();
        $(background).animate({'height': originalBackgroundHeight}, place.fadeDelay);        
        $(this).fadeOut(function(){
            $(".pubname").delay(place.fadeDelay).fadeIn(function(){
                $(place.stuffToShowOnClose).fadeIn()
            });
             // etc
        });
    }

    else
        return false
        
    });
}
 
$(document).ready(function(){
    // now the DOM is ready, let's assign those (global) variables
    background = $('#background');
    videohead = $("#videohead");
    videoholder = $("#videoholder");
 
    // loop through each place
    for (var i in places) {
        var place = places[i];
        // this is a bit complicated: it's called a closure
        // basically means that inside the loop, "place" is always correct
        // more here: http://stackoverflow.com/questions/8624057/closure-needed-for-binding-event-handlers-within-a-loop
        $(place.selector).on('click', (function(p, e){
            return function(){;
                processPlaceClick(p);
                e.preventDefault();
            };
        })(place, event));
    }
 
});