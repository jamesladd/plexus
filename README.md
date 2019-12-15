# Plexus
Plexus Coding Exercise

## Notes and Assumptions


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
