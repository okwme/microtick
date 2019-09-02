# mtick cmd

 * Add a custom build of the [mtapi](https://gitlab.com/microtick/mtapi)
 * Link it in the `package.json` like:
```JSON
...
 "dependencies": {
    "commander": "^3.0.1",
    "mtapi": "link:../microtick/mtapi/dist"
  }
...
```
 * Install the rest of your packages with `yarn` or `npm i`
 * Add `mtick` as a global `bin` command by linking your current repo like: `yarn link` or using `yarn start-dev`
 * Use your command `mtick` to run commands
 ```bash
mtick --help

Usage: mtick [options]

Start your trading bot

Options:
  -V, --version  output the version number
  -w, --wallet   Add custom wallet location
  -h, --help     output usage information
 ```
 * Stop using `mtick` as a global `bin` command by unlinking your current repo like: `yarn unlink` or using `yarn stop-dev`
