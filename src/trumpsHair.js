var MakeTrumpsHair = function(top, left, timeBetweenSteps) {
  makeRandomDancer.call(this, top, left, timeBetweenSteps);

  this.$node.html('<img class="combover" src="src/combover.png" alt="Trump\'s hair" height="147" width="324">')
  this.value = 'hair';
  // this.$node.on('click', function(event) {
  //   this.rotate();
  // });
  this.step();
};

MakeTrumpsHair.prototype = Object.create(makeRandomDancer.prototype);
MakeTrumpsHair.prototype.constructor = MakeTrumpsHair;
// MakeTrumpsHair.prototype.rotate = function() {
//   this.$node.css({WebkitTransform: 'rotate(' + 360 + 'deg)'});
// };