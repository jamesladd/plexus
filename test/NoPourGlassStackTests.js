const sinon = require("sinon");
const expect = require('chai').expect;

const NoPourGlassStack = require('../lib/NoPourGlassStack');

describe('NoPourGlassStack', () => {

  const noPourGlassStack = new NoPourGlassStack();
  const glassToCalculate = 1;
  const rowOfGlassToCalculate = 1;
  const output = sinon.spy();

  noPourGlassStack.calculateFill(glassToCalculate, rowOfGlassToCalculate, output);

  it('should calculate that there is no liquid', () => {
    expect(output.getCall(0).args[0]).to.be.equal('All glasses contain 0mil.');
  });
});
