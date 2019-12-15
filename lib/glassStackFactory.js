'use strict';

// This function is responsible for creating the correct instance of a stack of glasses.
// For example, a count of zero (0) glasses would result in a no-op GlassStack.

const GlassStack = require('./GlassStack');

const glassStackFactory = (countOfGlasses) => {
  return new GlassStack();
};

module.exports = glassStackFactory;
