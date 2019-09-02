#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const init = require('./cmd-init')

program.version('0.0.1');

program
  .option('-w, --wallet', 'Add custom wallet location')
  .description('Start your trading bot')
  .parse(process.argv);

  init(program.wallet)


