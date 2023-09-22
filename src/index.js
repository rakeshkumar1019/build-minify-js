import Processor from "./processor.js";
/* 
process.argv = 
[
  '/usr/local/bin/node',
  '/Users/rakeshkumarsingh/Documents/All/projects/BuildJS/src/index.js',
  'public/index.js'
]
*/
//pick filename from terminal
//starting point
Processor.run(process.argv[2]);
