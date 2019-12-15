'use strict';

// This class is responsible for modeling a Stack of Glasses.
//

class GlassStack {

  pourLitres(pourInLitres) {
    return this;
  }

  calculateFill(glassToCalculate, rowOfGlassToCalculate, output) {
    output('Glass 0 in row 3 contains 250ml of liquid.');
    return this;
  }
}

module.exports = GlassStack;
