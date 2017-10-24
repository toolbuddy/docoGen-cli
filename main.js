#!/usr/bin/env node
const program = require('commander');
const docogen = require('docogen');
const path = require('path');

// Parse 
program
    .version('0.0.1')
    .option('-s, --src [path]', 'Specify the source script files',__dirname)
    .option('-d, --dest [path]', 'The output result goes here', path.join(__dirname,'dest'))
    .option('-H, --html [type]', 'Generate html release.','none')
    .option('-L, --latex [output filename]', 'Generate Latex release','docogen-latex.pdf')
    .parse(process.argv);

// Get Configuration
console.log(`DocoGen CLI Interface:\nConfiguration of docoGen generation ->`);
if (program.src) console.log(`  - The Source files path: ${program.src}`);
if (program.dest) console.log(`  - The Destination release package path: ${program.dest}`);
if (program.html != "none"){ 
    console.log(`  - Html Package: True, with template: ${program.html}`);
}
if (program.latex){ 
    console.log(`  - Latex Package: True`);
    docogen.generate_latexpdf(program.src,program.dest,{output: "docogen"},(err,msg)=>{
        console.log(msg)
    })
}