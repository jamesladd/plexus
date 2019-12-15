'use strict';

// This function is responsible for creating the correct instance of a stack of glasses.
// For example, a count of zero (0) glasses would result in a no-op GlassStack.
//
// Uses the Null Object Pattern to allow the majority of code to have less 'if' statements.
//

const GlassStack = require('./GlassStack');
const EmptyGlassStack = require('./EmptyGlassStack');

const glassStackFactory = (countOfGlasses) => {
  return countOfGlasses > 0 ? new GlassStack() : new EmptyGlassStack();
};

module.exports = glassStackFactory;
