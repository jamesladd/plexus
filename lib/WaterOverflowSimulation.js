'use strict';

// This class is responsible for controlling the Water Overflow Simulation.
//

class WaterOverflowSimulation {
  constructor(glassStackFactory) {
    this.glassStackFactory = glassStackFactory;
  }

  simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output) {
    output(`Pouring ${pourInLitres} litre(s) into ${countOfGlasses} glass(es) to see how full glass ${glassToCalculate} in row ${rowOfGlassToCalculate} is.`);
    this.createStackOfGlasses(countOfGlasses, pourInLitres)
        .pourLitres(pourInLitres)
        .calculateFill(glassToCalculate, rowOfGlassToCalculate, output);
  }

  createStackOfGlasses(countOfGlasses, pourInLitres) {
    return this.glassStackFactory(countOfGlasses, pourInLitres);
  }
}

module.exports = WaterOverflowSimulation;
