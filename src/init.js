 $(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 5000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

 $(".lineUpDancers").on("click", function(event) {
  var height = 100;
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].$node.finish();
    dancers[i].$node.animate({
      top: "200px"
    }, 'fast', 'swing' );
  }
 });
});

