var Mario = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer movement mario"></span>');
  this.setPosition(top, left);
  //this.animateDiv();
}

Mario.prototype = Object.create(Dancer.prototype);
Mario.prototype.constructor = Mario;
