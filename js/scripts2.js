var places = [
    {
        name: 'The Griffin',
        selector: '#oak',
        closeSelector: '#close1',
        backgroundHeight: '1256px',
        classesToRemove: 'rightalign botrightalign botleftalign',
        classesToAdd: 'leftalign',
        embed: '<iframe src="http://player.vimeo.com/video/61738339?title=0&amp;byline=0&amp;portrait=0" width="800" height="450" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
        stuffToShowOnClose: '#topright, .pubname',
        fadeDelay: 1000
    },
    {
        name: 'The Princess Royal',
        selector: '#griffin',
        closeSelector: '#close2',
        backgroundHeight: '1256px',
        classesToRemove: 'rightalign leftalign botrightalign',
        classesToAdd: 'botleftalign',
        embed: '<iframe src="http://player.vimeo.com/video/61738344?title=0&amp;byline=0&amp;portrait=0" width="800" height="450" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
        stuffToShowOnClose: '.pubname, #thegame',
        fadeDelay: 1000
    },

    {
        name: 'The Game (click to start/stop)',
        selector: '#gamecopy',
        closeSelector: '#close3',
        backgroundHeight: '628px',
        classesToRemove: 'botleftalign leftalign botrightalign',
        classesToAdd: 'rightalign',
        embed: '<iframe frameborder="0" marginheight="0" marginwidth="0" style="border:  0;" src="http://static.guim.co.uk/draft/interactivestore/2013/3/14/1363265282279/166737/publish_to_web/_files/iframe.html" width="750" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>',
        stuffToShowOnClose: '.pubname, #bottomright',
        fadeDelay: 50
    },

    {
        name: 'The Royal Oak',
        selector: '#newinn',
        closeSelector: '#close4',
        backgroundHeight: '1256px',
        classesToRemove: 'botleftalign leftalign botrightalign',
        classesToAdd: 'rightalign',
        embed: '<iframe src="http://player.vimeo.com/video/61738338?title=0&amp;byline=0&amp;portrait=0" width="800" height="450" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
        stuffToShowOnClose:'#thegame, .pubname',
        fadeDelay: 1000
    },

    {
        name: 'The New Inn',
        selector: '#princess',
        closeSelector: '#close5',
        backgroundHeight: '1256px',
        classesToRemove: 'botleftalign leftalign rightalign',
        classesToAdd: 'botrightalign',
        embed: '<iframe src="http://player.vimeo.com/video/61738480?title=0&amp;byline=0&amp;portrait=0" width="800" height="450" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
        stuffToShowOnClose:'.pubname, #bottomleft',
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

    $('.pubname').fadeOut(place.fadeDelay);

    window.setTimeout(function(){
        background.removeClass(place.classesToRemove).addClass(place.classesToAdd);       
        background.animate({'height': place.backgroundHeight}, place.fadeDelay, function(event){
            videoheadholder.fadeIn();
            videohead.html(place.name).fadeIn();
            videoholder.html(place.embed).fadeIn();
            videowrapper.fadeIn();
        });
    }, place.fadeDelay);

    var close = $(place.closeSelector);
    close.delay(2500).fadeIn(function(){
        close.addClass("open");
        $("#videowrapper").addClass("open")
    });

   
    close.on('click', function(event){
        event.preventDefault();
        if (close.hasClass("open")) {
            videowrapper.fadeOut();
            $(videoholder).html("");
            $(videoholder).fadeOut();
            $(videoheadholder).fadeOut();
            $(background).animate({'height': originalBackgroundHeight}, place.fadeDelay);

            $(this).fadeOut(function(){
                $(".pubname").delay(1000).fadeIn(function(){
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

    $.each(places, function(i, place) {
        $(place.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(place);
        });
    });

});