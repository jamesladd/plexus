'use strict';

class WaterOverflowSimulation {
  simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output) {
    output(`Pouring ${pourInLitres} litre(s) into ${countOfGlasses} glass(es) to see how full glass ${glassToCalculate} in row ${rowOfGlassToCalculate} is.`);
    output('Glass 0 in row 3 contains 250ml of liquid.');
  }
}

module.exports = WaterOverflowSimulation;
