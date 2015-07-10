var MarioJackson = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer movement marioJackson"></span>');
  this.setPosition(top, left);
}
MarioJackson.prototype = Object.create(Dancer.prototype);
MarioJackson.prototype.constructor = MarioJackson;