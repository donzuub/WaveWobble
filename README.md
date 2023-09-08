# WaveWobble

WaveWobble is a TypeScript library designed to help analyze and manage jitter, a common phenomenon in electronics and signal processing.

![WaveWobble Logo](path/to/logo/if/you/have/one.png)

## Features

- **Easy Initialization:** Create Jitter instances with ease.
- **Comprehensive Analysis:** From Time Interval Error (TIE) to N-Cycle Jitter.
- **Versatile Utilities:** Additional utility functions for common tasks.

## Installation

Using npm:

```bash
npm install wavewobble
```

## Usage

Please refer to our [Usage Guide](./docs/USAGE.md) for detailed instructions and examples.

### Basic Example

```typescript
import { Jitter } from 'wavewobble';

const myJitter = new Jitter(0.05, 0.02, 0.03);
const totalJitter = myJitter.totalJitterEstimation(1e-12);

console.log(`Total Jitter: ${totalJitter}`);
```

For more examples, check the [examples](./examples) directory.
