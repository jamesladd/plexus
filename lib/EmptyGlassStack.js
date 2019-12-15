'use strict';

// This class is responsible for modeling an Empty Stack of Glasses.
//

class EmptyGlassStack {

  pourLitres() {
    return this;
  }

  calculateFill(glassToCalculate, rowOfGlassToCalculate, output) {
    output('There are no glasses.');
    return this;
  }
}

module.exports = EmptyGlassStack;
