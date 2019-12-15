'use strict';

// This class is responsible for modeling a no pour Stack of Glasses.
//

class NoPourGlassStack {

  pourLitres() {
    return this;
  }

  calculateFill(glassToCalculate, rowOfGlassToCalculate, output) {
    output('All glasses contain 0mil.');
    return this;
  }
}

module.exports = NoPourGlassStack;
