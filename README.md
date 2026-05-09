# Mortgage Calculator

A basic mortgage calculator with monthly payment, amortization schedule, total cost, and affordability check.

## Functions

- `monthlyPayment(principal, annualRate, termYears)` — calculates monthly payment
- `amortizationSchedule(principal, annualRate, termYears)` — full month-by-month breakdown
- `totalCost(principal, annualRate, termYears)` — total amount paid and total interest
- `affordabilityCheck(annualIncome, monthlyDebts, principal, annualRate, termYears)` — debt-to-income ratio and recommendation

## Example

```js
const { monthlyPayment, totalCost } = require('./calculator');

const payment = monthlyPayment(300000, 7, 30);
console.log(`Monthly payment: $${payment}`); // $1995.91

const cost = totalCost(300000, 7, 30);
console.log(`Total interest paid: $${cost.totalInterest}`); // $418527.60
```
