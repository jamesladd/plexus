const sinon = require("sinon");
const expect = require('chai').expect;

const WaterOverflowSimulation = require('../lib/WaterOverflowSimulation');

describe('WaterOverflowSimulation', () => {

  const glassStack = {};
  const glassStackFactory = sinon.fake.returns(glassStack);
  const countOfGlasses = 10;
  const pourInLitres = 2.5;
  const glassToCalculate = 0;
  const rowOfGlassToCalculate = 3;
  const output = sinon.spy();

  glassStack.pourLitres = sinon.fake.returns(glassStack);
  glassStack.calculateFill = sinon.fake.returns(glassStack);

  new WaterOverflowSimulation(glassStackFactory)
      .simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, output);

  it('should output simulation arguments', () => {
    expect(output.getCall(0).args[0]).to.be.equal('Pouring 2.5 litre(s) into 10 glass(es) to see how full glass 0 in row 3 is.');
  });

  it('should create a glass stack instance', () => {
    expect(glassStackFactory.getCall(0).args[0]).to.be.equal(countOfGlasses);
  });

  it('should ask glass stack to pour', () => {
    expect(glassStack.pourLitres.getCall(0).args[0]).to.be.equal(pourInLitres);
  });

  it('should ask glass stack to calculate fill', () => {
    expect(glassStack.calculateFill.getCall(0).args[0]).to.be.equal(glassToCalculate);
    expect(glassStack.calculateFill.getCall(0).args[1]).to.be.equal(rowOfGlassToCalculate);
    expect(glassStack.calculateFill.getCall(0).args[2]).to.be.equal(output);
  });
});
