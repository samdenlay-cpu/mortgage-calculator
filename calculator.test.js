const { monthlyPayment, amortizationSchedule, totalCost, affordabilityCheck } = require("./calculator");

// monthlyPayment
console.assert(monthlyPayment(300000, 7, 30) === 1995.91, "Standard 30yr payment");
console.assert(monthlyPayment(200000, 0, 10) === 1666.67, "Zero interest payment");
console.assert(monthlyPayment(500000, 5.5, 15) === 4085.42, "15yr payment");

// totalCost
const cost = totalCost(300000, 7, 30);
console.assert(cost.totalPaid === 718527.6, "Total paid");
console.assert(cost.totalInterest === 418527.6, "Total interest");

// affordabilityCheck
const check = affordabilityCheck(90000, 500, 300000, 7, 30);
console.assert(check.affordable === true, "Should be affordable");
console.assert(check.recommendation === "Good", "Should be good");

// amortizationSchedule
const schedule = amortizationSchedule(300000, 7, 30);
console.assert(schedule.length === 360, "360 months");
console.assert(schedule[0].balance < 300000, "Balance decreases");
console.assert(schedule[359].balance === 0, "Final balance is 0");

console.log("All tests passed.");
