'use strict';

class WaterOverflowSimulation {
  simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output) {
    output(`Pouring ${pourInLitres} litre(s) into ${countOfGlasses} glass(es) to see how full glass ${glassToCalculate} in row ${rowOfGlassToCalculate} is.`);
  }
}

module.exports = WaterOverflowSimulation;
