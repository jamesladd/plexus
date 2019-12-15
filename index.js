#!/usr/bin/env node
'use strict';
const WaterOverflowSimulaton = require('./lib/WaterOverflowSimulation');
const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');

const greeting = chalk.white.bold('Plexus Coding Challeng - Water Overflow Problem!');

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: 'round',
 borderColor: 'green',
 backgroundColor: '#555555'
};
const msgBox = boxen(greeting, boxenOptions);

const options = yargs
  .usage('Usage: -c <count> -p <pour> -g <glass> -r <row>')
  .option('c', { alias: 'countOfGlasses', describe: 'Count of glasses', type: 'number', demandOption: true })
  .option('p', { alias: 'pourInLitres', describe: 'Litres to pour', type: 'number', demandOption: true })
  .option('g', { alias: 'glassToCalculate', describe: 'Glass to calculate fill', type: 'number', demandOption: true })
  .option('r', { alias: 'rowOfGlassToCalculate', describe: 'Row of glass to calculate', type: 'number', demandOption: true })
  .argv;

console.log(msgBox);
const { countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate } = options;
new WaterOverflowSimulaton().simulateOn(countOfGlasses, pourInLitres, glassToCalculate, rowOfGlassToCalculate, console.log);
