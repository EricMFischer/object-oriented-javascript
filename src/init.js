$(document).ready(function(){
  window.dancers = [];

  var players = ["bowser", "donkey", "luigi", "mario", "peach", "toad", "turtle", "warrio", "yoshi", "marioJackson"];
  

  // $('body').on('click', '.dancer', function() {
  //   $(this).animate({
  //     bottom: '+=100px',
  //   });
  //   $(this).animate({
  //     bottom: '-=100px',
  //   });
  // });


  $(".partyTime").on('click', function(){
    $('body').addClass("partyTime");
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    for(var i = 0; i < 15; i++){
      var height = $("body").height() * Math.random();
      var width = $("body").width() * Math.random();
      var time = Math.random() * 1000;
      var dancer = new dancerMakerFunction(height, width, time);
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    }
  });

  $('.lineUp').on('click', function() {
    // $('.dancer').stop(true, true);
    // $('.dancer').removeClass("movement");
    var windowHeight = document.documentElement.clientHeight;
    var ElementHeight = $('.dancer').height() + 50;
    $('.dancer').css({
      "position": "absolute",
      "bottom": "10%"
    });
  });


  $('body').on('mouseover', '.dancer', function() {
    $(this).animate({
      textIndent: "+=360"
    }, {duration: 1000,
        step: function(now, fx){
          $(this).css('transform', 'rotate(' + now + "deg)")
      }
    });
  });


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = ($("body").height() - 250) * Math.random();
    var width = $("body").width() * Math.random();
    var time = 100000;
    var dancer = new dancerMakerFunction(height, width, time);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('body').on('click', '.addDancerButton', function(){

    function makeNewPosition(){
        
        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        return [nh,nw];       
    };

    function animateDiv(){
        var newq = makeNewPosition();
        console.log("bla", $('.movement'));
        var oldq = $('.movement').offset();
        if(oldq){
          var speed = calcSpeed([oldq.top, oldq.left], newq);
          console.log("animate");
          setInterval($('.movement').animate({ top: newq[0], left: newq[1] }, speed, calcSpeed(newq[0], newq[1])), 500);
      }
    };

    function calcSpeed(prev, next) {
        
        var x = Math.abs(prev[1] - next[1]);
        var y = Math.abs(prev[0] - next[0]);
        
        var greatest = x > y ? x : y;
        
        var speedModifier = 0.1;

        var speed = Math.ceil(greatest/speedModifier);

        return speed;
    };
    animateDiv();

  });

});

