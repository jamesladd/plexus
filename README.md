# Plexus
Plexus Coding Exercise

## Notes and Assumptions

- In the given diagram Row 3 appears to have duplicated Glass identifiers (J1,J2).
  It is assumed this Row should be J0, J1, J2, J3.

- It is assumed that while the spec says 'overflow is evenly distributed between the
  glasses in the next row' it is meaning that a glass fed from two glasses above will not
  fill faster but evenly with those glasses fed from a single above it.
  ie: Given glass I2,J1 it will fill at same rate as I2,JI even though it is fed by two
  glasses above.

- It is assumed that doing a simulation with a clear response is better for the User than  
  an output of errors because of input errors. ie: Glasses that cannot be stacked to form 
  a complete row will be disgarded.
  
- I've attempted to make the Business clear in the implementation. That is 
  the naming of things should match those given in the specification. ie: StackOfWaterGlasses.

- I'm using the NullObject pattern when creating the glass stack to reduce the need for 
  conditional statements in other code (which means less tests/problems), AND giving the 
  lifecycle for creation of Glass Stacks a home where developers can easily see 
  Business logic for argument validation etc.
  
- WaterOverflowSimulationTests shows use of mocking out the dependencies.
  
- Git Commits should show the flow of work. Add failing test, add enough code to make tests pass,
  then refactor. => Red, Green, Refactor.

- Git Branches should show 'flow', creating a branch to work on with a meaningful name, then 
  when activity is complete, merging that back into master.
  I don't mind what 'flow' a company uses or if it is master or trunc development.
  
- I try to keep the work I have done able to be merged into master and deployed at all times.
  
## Install
```bash
npm install
```

## Run
```bash
node .
```

### Usage
```bash
Usage: -c <count> -p <pour> -g <glass> -r <row>

Options:
  --help                       Show help                               [boolean]
  --version                    Show version number                     [boolean]
  -c, --countOfGlasses         Count of glasses              [number] [required]
  -p, --pourInLitres           Litres to pour                [number] [required]
  -g, --glassToCalculate       Glass to calculate fill       [number] [required]
  -r, --rowOfGlassToCalculate  Row of glass to calculate     [number] [required]
```

### Example
```bash
node . -c 10 -p 1 -g 1 -r 1 
```

## Test
```bash
npm test
```
