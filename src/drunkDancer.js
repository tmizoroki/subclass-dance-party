var makeDrunkDancer = function(top, left, timeBetweenSteps) {
makeDancer.call(this, top, left, timeBetweenSteps);


  this.$node.append('<img src="src/hillarySmile.png" alt="Smiley face" height="150" width="150">')
  this.$node.css('border', '0');
  this.step();
  this.value = 'hillary';
  this.fire = false;

};
makeDrunkDancer.prototype = Object.create(makeDancer.prototype);
makeDrunkDancer.prototype.constructor = makeDrunkDancer;
makeDrunkDancer.prototype.wobble = function () {
  return Math.random() * 1000;
}
makeDrunkDancer.prototype.step = function(){

  if(!this.liningUp) {
    makeDancer.prototype.step.call(this);
  }

  this.$node.animate({
    top: this.wobble(),
    left: this.wobble()
  }, 10000);

};