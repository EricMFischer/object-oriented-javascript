var Luigi = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer movement luigi"></span>');
  this.setPosition(top, left);
  // this.step();
}

Luigi.prototype = Object.create(Dancer.prototype);
Luigi.prototype.constructor = Luigi;

