// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.liningUp = false;
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

makeDancer.prototype.step = function(){
  var that = this;

  if (!this.liningUp) {
    setTimeout(function() {that.step();}, that.timeBetweenSteps);
  }
};

makeDancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  this.$node.stop();
  this.$node.animate({
    top: top,
    left: left
  }, 100);
};

