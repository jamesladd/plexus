const sinon = require("sinon");
const expect = require('chai').expect;

const EmptyGlassStack = require('../lib/EmptyGlassStack');

describe('EmptyGlassStack', () => {

  const emptyGlassStack = new EmptyGlassStack();
  const glassToCalculate = 1;
  const rowOfGlassToCalculate = 1;
  const output = sinon.spy();

  emptyGlassStack.calculateFill(glassToCalculate, rowOfGlassToCalculate, output);

  it('should calculate that there are no glasses', () => {
    expect(output.getCall(0).args[0]).to.be.equal('There are no glasses.');
  });
});
