var makeRandomDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = makeDancer.prototype.step;
  // debugger;
  this.$node.append('<img src="http://tinyurl.com/p77txzr" alt="Smiley face" height="400" width="400">')
  this.$node.css('border','10px solid #124352');


  this.step();

};
makeRandomDancer.prototype = Object.create(makeDancer.prototype);
makeRandomDancer.prototype.constructor = makeRandomDancer;
makeRandomDancer.prototype.random = function() {
  return Math.random() * 1000;
};
makeRandomDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  //debugger;
  makeDancer.prototype.step.call(this);
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  //console.log(this.$node);
  this.$node.animate({
    top: this.random(),
    left: this.random()
  }, 1000);
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};