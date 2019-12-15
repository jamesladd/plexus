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

    waterOverflowSimulation.simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output);

    it('should output simulation information', () => {
      expect(output.getCall(0).args[0]).to.be.equal('Pouring 2.5 litre(s) into 10 glass(es) to see how full glass 0 in row 3 is.');
    });

    it('should calculate liquid in specified glass', () => {
      expect(output.getCall(1).args[0]).to.be.equal('Glass 0 in row 3 contains 250ml of liquid.');
    });
  });
});
