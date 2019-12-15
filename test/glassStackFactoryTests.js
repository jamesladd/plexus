const expect = require('chai').expect;

const glassStackFactory = require('../lib/glassStackFactory');
const GlassStack = require('../lib/GlassStack');
const EmptyGlassStack = require('../lib/EmptyGlassStack');
const NoPourGlassStack = require('../lib/NoPourGlassStack');

describe('glassStackFactory', () => {
  describe('with non-zero count of glasses', () => {

    const glassStack = glassStackFactory(10, 2.5);

    it('should create GlassStack instance', () => {
      expect(glassStack.constructor.name).to.be.equal('GlassStack');
    });
  });

  describe('with zero count of glasses', () => {

    const glassStack = glassStackFactory(0, 2.5);

    it('should create EmptyGlassStack instance', () => {
      expect(glassStack.constructor.name).to.be.equal('EmptyGlassStack');
    });
  });

  describe('with zero pour in litres', () => {

    const glassStack = glassStackFactory(10, 0);

    it('should create NoPourGlassStack instance', () => {
      expect(glassStack.constructor.name).to.be.equal('NoPourGlassStack');
    });
  });
});
