var makeDrunkDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = makeDancer.prototype.step;
  // debugger;
  this.$node.css('background-color', 'blue');

  this.step();

};
makeDrunkDancer.prototype = Object.create(makeDancer.prototype);
makeDrunkDancer.prototype.constructor = makeDrunkDancer;
makeDrunkDancer.prototype.wobble = function () {
  return Math.random() * 500;
}
makeDrunkDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  //debugger;
  makeDancer.prototype.step.call(this);
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  //console.log(this.$node);
  this.$node.animate({
    top: this.wobble(),
    left: this.wobble()
  }, 10000);
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};