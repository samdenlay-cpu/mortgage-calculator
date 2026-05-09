const { monthlyPayment, amortizationSchedule, totalCost, affordabilityCheck } = require("./calculator");

// monthlyPayment — valid inputs
console.assert(monthlyPayment(300000, 7, 30) === 1995.91, "Standard 30yr payment");
console.assert(monthlyPayment(200000, 0, 10) === 1666.67, "Zero interest payment");
console.assert(monthlyPayment(500000, 5.5, 15) === 4085.42, "15yr payment");

// monthlyPayment — invalid inputs
function throws(fn, msg) {
  try { fn(); return false; } catch (e) { return true; }
}
console.assert(throws(() => monthlyPayment(0, 7, 30)),    "Rejects zero principal");
console.assert(throws(() => monthlyPayment(-1000, 7, 30)), "Rejects negative principal");
console.assert(throws(() => monthlyPayment(300000, -1, 30)), "Rejects negative rate");
console.assert(throws(() => monthlyPayment(300000, 7, 0)),  "Rejects zero term");
console.assert(throws(() => monthlyPayment(300000, 7, -5)), "Rejects negative term");

// totalCost
const cost = totalCost(300000, 7, 30);
console.assert(cost.totalPaid === 718527.6,    "Total paid");
console.assert(cost.totalInterest === 418527.6, "Total interest");

// affordabilityCheck — valid
const check = affordabilityCheck(90000, 500, 300000, 7, 30);
console.assert(check.affordable === true,         "Should be affordable");
console.assert(check.recommendation === "Good",   "Should be good");

// affordabilityCheck — invalid inputs
console.assert(throws(() => affordabilityCheck(0, 500, 300000, 7, 30)),    "Rejects zero income");
console.assert(throws(() => affordabilityCheck(-50000, 500, 300000, 7, 30)), "Rejects negative income");
console.assert(throws(() => affordabilityCheck(90000, -100, 300000, 7, 30)), "Rejects negative debts");

// amortizationSchedule
const schedule = amortizationSchedule(300000, 7, 30);
console.assert(schedule.length === 360,           "360 months");
console.assert(schedule[0].balance < 300000,      "Balance decreases");
console.assert(schedule[359].balance === 0,        "Final balance is exactly 0");

console.log("All tests passed.");
