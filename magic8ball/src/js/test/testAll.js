// Test all files in the js/test directory prepended with 'test'

import { readdirSync } from 'fs';
import { dirname as _dirname, basename } from 'path';
import { exec } from 'child_process';

// Get absolute path to test directory
const dirname = _dirname(new URL(import.meta.url).pathname);

// Get all files in the test directory that start with 'test' excluding this file
const testFiles = readdirSync(dirname)
  .filter(
    file => file.startsWith('test') &&
    file.endsWith('.js') &&
    file !== basename(new URL(import.meta.url).pathname)
  );

console.log('Test files:');
console.log(testFiles);
console.log('Running tests...\n');

testFiles.forEach(file => {
  exec(`node ${dirname}/${file}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error in ${file}:`);
      console.error(err);
    } else if (stderr) {
      console.error(`Error in ${file}:`);
      console.error(stderr);
    } else {
      console.log(`Success in ${file}:`);
      console.log(stdout);
    }
  });
});
