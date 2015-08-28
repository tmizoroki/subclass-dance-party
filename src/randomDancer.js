var makeRandomDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.value = 'trump';
  this.$node.append('<img src="src/trump.png" alt="Smiley face" height="150" width="150">')
  this.$node.css('border', '0');
  this.fireClick();

  this.step();
};
makeRandomDancer.prototype = Object.create(makeDancer.prototype);
makeRandomDancer.prototype.constructor = makeRandomDancer;
makeRandomDancer.prototype.random = function() {
  return Math.random() * 1000;
};
makeRandomDancer.prototype.step = function(){
  
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    top: this.random(),
    left: this.random()
  }, 5000);
  
};
makeRandomDancer.prototype.fire = function(hillaryTop, hillaryLeft, hillary) {
  var dist = Math.sqrt(Math.abs(Math.pow((Math.abs(hillaryTop - this.$node.offset().top)), 2) - Math.pow(Math.abs(hillaryLeft - this.$node.offset().left), 2)));
  var that = this;
  if (dist < 100) {
    if ($('.fired').length === 0) {
      this.$node.append('<img class="fired" src="src/fired.gif" alt="You\'re fired" height="109" width="450">');
      setTimeout(function() {
      that.$node.html('<img src="src/trump.png" alt="Smiley face" height="150" width="150">');
      hillary.$node.html('<img src="src/hillaryclinton.png" alt="hillary" height="150" width="150">');
      hillary.$node.append('<img class="flame" src="src/flame.gif" alt="burn" height="150" width="150" right="-150">');
      hillary.fire = true;
      }, 800);
    }
  }
}

makeRandomDancer.prototype.fireClick = function() {
  var that = this;
  this.$node.on('click', function(event) {
    dancers.forEach(function(dancer) {
      if (dancer.value === 'hillary') {
        that.fire(dancer.$node.offset().top, dancer.$node.offset().left, dancer);
      }
    });
  });
}