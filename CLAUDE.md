# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run tests:
```bash
node calculator.test.js
```

## Architecture

Single-file library (`calculator.js`) exporting four pure functions with no dependencies:

- `monthlyPayment(principal, annualRate, termYears)` — core calculation used internally by all other functions. Rates are passed as percentages (e.g. `7` for 7%). All monetary outputs are rounded to 2 decimal places.
- `amortizationSchedule()` — calls `monthlyPayment()` internally, returns array of 360 objects for a 30yr term
- `totalCost()` — calls `monthlyPayment()` internally
- `affordabilityCheck()` — calls `monthlyPayment()` internally; DTI threshold for `affordable` is 43%, recommendation thresholds are 28/36/43%

Tests live in `calculator.test.js` using `console.assert` (no test framework).
