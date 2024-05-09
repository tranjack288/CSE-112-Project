# Noodle Magic 8 Ball

## Development

### Environment

Recommended setup for dev environment. You can use other method you prefer.

**Requirements:**

- `npm`

**Installation:**

```bash
npm install -g browser-sync
```

**Usage:**

```bash
# Make sure you are in the root directory of the project
cd cse110-sp23-group15

# Start live server. Your browser window will auto-open http://localhost:3000
# that watches for all file changes from the current directory recursively and
# auto-reload the page when changes are detected.
browser-sync start --server --files "**/*"
```

See [BrowserSync](https://browsersync.io/) for more details.


### Testing

**Requirements:**

- `node`

**Usage:** Running all test files in `./src/js/test/`

```bash
node ./src/js/test/testAll.js
```

#### Creating Test Cases

Create a new file in `./src/js/test/` with the name of the file you want to test
in `./src/js`. For example, if you want to test `./src/js/utils.js`, create
a new file `./src/js/test/testUtils.js`.

**Make sure to include the following lines at the top of your test file:**

```js
// Test imports
import { strictEqual, ok } from 'node:assert';
import { it } from './helper.js';
```

> **Note:** Use ES6 `import` instead of CommonJS `require`.

Then, you can write your test cases using `assert` and `it`:

```js
// Import functions to test
import { getRandomInt } from '../utils.js';

// Test getRandomInt
it('getRandomInt Should return random integer between min (inclusive) and max (exclusive)', () => {
  // Test that getRandomInt returns an int between 0 (inclusive) and 10 (exclusive)
  for (let i = 0; i < 1000; i++) {
    const randomInt = getRandomInt(0, 10);
    assert.ok(randomInt >= 0 && randomInt < 10)
  }
});
```

See [Node.js Assert](https://nodejs.org/api/assert.html) for more details.

> **Note:** You may exclude testing `./src/js/main.js` since it is the entry
> point of the app and it is not a module. Node.js will throw an error if you
> try to import it since it contains HTML elements.

