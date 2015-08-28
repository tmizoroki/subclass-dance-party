var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  var boundStep = this.step.bind(this);
  var boundTimeBetween = this.timeBetweenSteps;
  setTimeout(boundStep, boundTimeBetween);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  this.$node.stop();
  this.$node.animate({
    top: top,
    left: left
  }, 100);
};

