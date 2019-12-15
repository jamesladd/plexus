const sinon = require("sinon");
const expect = require('chai').expect;

const WaterOverflowSimulaton = require('../lib/WaterOverflowSimulation');

describe('WaterOverflowSimulation', () => {
  describe('simulateOn', () => {

    const waterOverflowSimulation = new WaterOverflowSimulaton();
    const countOfGlasses = 10;
    const pourInLitres = 2.5;
    const glassToCalculate = 0;
    const rowOfGlassToCalculate = 3;
    const output = sinon.spy();

    it('should output simulation information', () => {
      waterOverflowSimulation.simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output);
      expect(output.firstCall.args[0]).to.be.equal('Pouring 2.5 litre(s) into 10 glass(es) to see how full glass 0 in row 3 is...');
    });
  });
});
