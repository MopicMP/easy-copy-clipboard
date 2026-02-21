# easy-copy-clipboard

> Easy copy text to clipboard one-liner

[![npm version](https://badge.fury.io/js/easy-copy-clipboard.svg)](https://www.npmjs.com/package/easy-copy-clipboard)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Installation

```bash
npm install easy-copy-clipboard
```

## Quick Start

```javascript
const { clipboard } = require('easy-copy-clipboard');

// Basic usage
const result = clipboard('your input here');
console.log(result);
```

## Features

- Simple, clean API
- Zero dependencies
- Lightweight (< 3KB)
- Works in Node.js and browsers
- Fully tested with Jest

## API Reference

### `clipboard(input, [options])`

Main utility function.

**Parameters:**
- `input` — The input data to process
- `options` — Optional configuration object

**Returns:** Processed result

### `batch(inputs, [options])`

Process multiple inputs at once.

## Examples

```javascript
const { clipboard, batch } = require('easy-copy-clipboard');

// Single item
const result = clipboard('hello');

// Batch processing
const results = batch(['a', 'b', 'c']);
```

## Running Tests

```bash
npm test
```

## License

MIT License - see [LICENSE](LICENSE) for details.

---

### Learn More

**Want to build tools like this?** Check out the
**[Frontend For Beginners](https://gumroad.com/l/frontend-for-beginners)** course — learn how to create
modern web utilities with hands-on projects and best practices.

*Built with skills from [Frontend For Beginners](https://gumroad.com/l/frontend-for-beginners)*
