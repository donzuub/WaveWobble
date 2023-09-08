
# WaveWobble Usage Guide

Welcome to `WaveWobble`, a comprehensive toolkit to understand and quantify jitter in your applications. 

## Table of Contents

- [WaveWobble Usage Guide](#wavewobble-usage-guide)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Core Features](#core-features)
    - [1. Time Interval Error (TIE)](#1-time-interval-error-tie)
    - [2. Cycle-to-Cycle Jitter](#2-cycle-to-cycle-jitter)
    - [3. N-Cycle Jitter](#3-n-cycle-jitter)
  - [Advanced Usage](#advanced-usage)
  - [Support and Contributions](#support-and-contributions)

## Installation

While we're in the development stage, you can clone our repository and integrate it directly:

```bash
git clone https://github.com/donzuub/WaveWobble.git
cd WaveWobble
npm install
```

## Getting Started

After installation, you can start using `WaveWobble` by importing the necessary modules:

```typescript
import { Jitter } from 'WaveWobble/src/models/jitter';
```

To instantiate a new Jitter object:

```typescript
const myJitter = new Jitter(0.05, 0.02, 0.03);
```

## Core Features

### 1. Time Interval Error (TIE)

Calculate the TIE using:

```typescript
const tie = Jitter.TIE(1.02, 1.00); // replace with your values
```

### 2. Cycle-to-Cycle Jitter

To determine the cycle-to-cycle jitter:

```typescript
const cycleJitter = Jitter.cycleToCycleJitter(1.02, 1.03); // replace with your values
```

### 3. N-Cycle Jitter

For an array of cycle values, calculate the N-Cycle Jitter:

```typescript
const nCycle = Jitter.nCycleJitter([1.02, 1.03, 1.04]); // replace with your values
```

... and many more features. Dive into the codebase to discover all the functionalities we offer.

## Advanced Usage

For users looking to deeply integrate and customize `WaveWobble` within their application, we recommend reading our comprehensive [API documentation](./api/index.md).

## Support and Contributions

Facing issues or have a feature request? Raise a ticket in our [GitHub issues](https://github.com/donzuub/WaveWobble/issues) section.

We also warmly welcome contributions. If you've made an enhancement or fixed a bug, feel free to create a pull request!

---

