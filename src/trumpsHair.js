var MakeTrumpsHair = function(top, left, timeBetweenSteps) {
  makeRandomDancer.call(this, top, left, timeBetweenSteps);


  this.$node.html('<img class="combover" src="src/combover.png" alt="Trump\'s hair" height="147" width="324">')
  this.value = 'hair';
  this.step();

};
MakeTrumpsHair.prototype = Object.create(makeRandomDancer.prototype);
MakeTrumpsHair.prototype.constructor = MakeTrumpsHair;
// MakeTrumpsHair.prototype.step = function(){

//   if(!this.liningUp) {
//     makeDancer.prototype.step.call(this);
//   }

//   this.$node.animate();

// };