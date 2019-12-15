'use strict';

// This function is responsible for creating the correct instance of a stack of glasses.
// For example, a count of zero (0) glasses would result in a no-op GlassStack.
//
// Uses the Null Object Pattern to allow the majority of code to have less 'if' statements.
//

const GlassStack = require('./GlassStack');
const EmptyGlassStack = require('./EmptyGlassStack');
const NoPourGlassStack = require('./NoPourGlassStack');

const glassStackFactory = (countOfGlasses, pourInLitres) => {
  if (countOfGlasses === 0) {
    return new EmptyGlassStack();
  }
  if (pourInLitres === 0) {
    return new NoPourGlassStack();
  }
  return new GlassStack();
};

module.exports = glassStackFactory;
