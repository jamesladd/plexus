const sinon = require("sinon");
const expect = require('chai').expect;

const WaterOverflowSimulaton = require('../lib/WaterOverflowSimulation');
const glassStackFactory = require('../lib/glassStackFactory');

describe('WaterOverflowSimulation', () => {
  describe('simulate', () => {

    const waterOverflowSimulation = new WaterOverflowSimulaton(glassStackFactory);

    describe('with valid arguments and expected result', () => {
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

    describe('with zero count of glasses', () => {
      const countOfGlasses = 0;
      const pourInLitres = 2.5;
      const glassToCalculate = 0;
      const rowOfGlassToCalculate = 3;
      const output = sinon.spy();

      waterOverflowSimulation.simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output);

      it('should explain there are no glasses', () => {
        expect(output.getCall(1).args[0]).to.be.equal('There are no glasses.');
      });
    });

    describe('with zero litres poured', () => {
      const countOfGlasses = 10;
      const pourInLitres = 0;
      const glassToCalculate = 0;
      const rowOfGlassToCalculate = 3;
      const output = sinon.spy();

      waterOverflowSimulation.simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output);

      it('should explain there is no liquid', () => {
          expect(output.getCall(1).args[0]).to.be.equal('All glasses contain 0mil.');
      });
    });
  });
});
