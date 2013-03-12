$(document).ready(function(){


  $("#topleft").click(function(event) {        

      event.preventDefault();
       event.stopPropagation()
      $(".pubname").fadeOut(function(event){
        $("#background").removeClass("rightalign botrightalign botleftalign")
        $("#background").addClass("leftalign")
        $("img#background").animate({"height": "1258px"}, 1000, function(event){
          $("#videohead").html("<p>THE ROYAL OAK</p>")
          $("#videohead").fadeIn()
          $("#videoholder").html("")
          $("#videoholder").fadeIn()
          
       })
     })
      $("#close1").delay(2500).fadeIn()
    });

   $("#close1").click(function(event) { 

    event.preventDefault();
    $("#close1").css("display", "none")
    $("#videohead").fadeOut()
    $("#videohead").html("")
    $("#videoholder").fadeOut(function(event){
      $("#videoholder").html("")
    })    
      $("img#background").animate({"height": "628px"}, 1000, function(){
          $("#oak").fadeIn(function(){
            $("#bottomleft").fadeIn()
            $("#griffin").fadeIn()               
        });
      });
    });


      $("#bottomleft").click(function(event) {        

      event.preventDefault();
      $(".pubname").fadeOut(function(event){
        $("#background").removeClass("rightalign leftalign botrightalign")
        $("#background").addClass("botleftalign")
        $("img#background").animate({"height": "1256px"}, 1000, function(){
          
          $("#videohead").html("<p>THE GRIFFIN</p>")
          $("#videohead").fadeIn()
          $("#videoholder").html("")
          $("#videoholder").fadeIn()
       })
     })      
          $("#close2").delay(2500).fadeIn()
    });

      $("#close2").click(function(event) { 

        event.preventDefault()
    $("#videohead").fadeOut()
    $("#videoholder").html("")
    $("#close2").css("display", "none")
    $("#videoholder").fadeOut(function(event){

      $("img#background").animate({"height": "628px"}, 1000, function(event){
          $("#oak, #griffin").fadeIn(function(event){
            $("#thegame").fadeIn()
          })      
        })
      })
    });


      $("#thegame").click(function(event) {        

      event.preventDefault()

      $("#thegame").css("display", "none")
      $("#oak, #griffin").fadeOut(function(event){
       
          $("#videohead").html("<p>THE GAME</p>")
          $("#videohead").fadeIn()
          $("#videoholder").html("")
          $("#videoholder").fadeIn()
          
     })
      $("#close3").delay(1500).fadeIn()
    });

       $("#close3").click(function(event) {

        event.preventDefault()
        $("#videohead").fadeOut()
        $("#videoholder").html("")
        $("#videoholder").fadeOut()
        $("#close3").fadeOut(function(event){
           $("#oak, #griffin, #thegame").fadeIn(function(){
            $("#topright").fadeIn()
          })      
        })     
    });


   $("#newinn").click(function(event) {        

     event.preventDefault();

     event.preventDefault()
     $("#thegame").css("display", "none")
      $("#oak, #griffin, #newinn").fadeOut(function(event){
        $("#background").removeClass("botleftalign leftalign botrightalign")
        $("#background").addClass("rightalign")
        $("img#background").animate({"height": "1256px"}, 1000, function(event){
          $("#videohead").html("<p>THE NEW INN</p>")
          $("#videohead").fadeIn()
          $("#videoholder").html("")
          $("#videoholder").fadeIn()
         

       })
     })
      $("#close4").delay(2500).fadeIn()
    });


   $("#close4").click(function(event) {      

        event.preventDefault()
    $("#videohead").fadeOut()
    $("#videoholder").html("")
    $("#close4").css("display", "none")
    $("#videoholder").fadeOut(function(event){

      $("img#background").animate({"height": "628px"}, 1000, function(event){
          $("#oak, #griffin, #newinn, #thegame").fadeIn(function(event){
            $("#bottomright").fadeIn()
          })      
        })
      })
    });




     $("#princess").click(function(event) {        

     event.preventDefault();
     event.stopPropagation()
     $("#thegame").css("display", "none")
      $("#oak, #griffin, #newinn, #princess").fadeOut(function(event){
        $("#background").removeClass("botleftalign leftalign rightalign")
        $("#background").addClass("botrightalign");
        $("img#background").animate({"height": "1256px"}, 1000, function(event){
          $("#videohead").html("<p>THE PRINCESS ROYAL</p>")
          $("#videohead").fadeIn()
          $("#videoholder").html("")
          $("#videoholder").fadeIn()
         

       })
     })
      $("#close5").delay(3500).fadeIn()
    });


  $("#close5").click(function(event) {      

        event.preventDefault()
        event.stopPropagation()
    $("#videohead").fadeOut()
    $("#videoholder").html("")
    $("#close5").css("display", "none")
    $("#videoholder").fadeOut(function(event){
      $("img#background").animate({"height": "628px"}, 1000, function(event){
          $("#oak, #griffin, #newinn, #princess, #thegame").fadeIn()
        })
      })
    });
 


}); //ready

