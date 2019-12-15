const expect = require('chai').expect;

const glassStackFactory = require('../lib/glassStackFactory');
const GlassStack = require('../lib/GlassStack');
const EmptyGlassStack = require('../lib/EmptyGlassStack');

describe('glassStackFactory', () => {
  describe('with non-zero count of glasses', () => {

    const glassStack = glassStackFactory(10);

    it('should create GlassStack instance', () => {
      expect(glassStack.constructor.name).to.be.equal('GlassStack');
    });
  });

  describe('with zero count of glasses', () => {

    const glassStack = glassStackFactory(0);

    it('should create EmptyGlassStack instance', () => {
      expect(glassStack.constructor.name).to.be.equal('EmptyGlassStack');
    });
  });
});
