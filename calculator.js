function monthlyPayment(principal, annualRate, termYears) {
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = termYears * 12;

  if (monthlyRate === 0) {
    return principal / numPayments;
  }

  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  return Math.round(payment * 100) / 100;
}

function amortizationSchedule(principal, annualRate, termYears) {
  const monthlyRate = annualRate / 100 / 12;
  const payment = monthlyPayment(principal, annualRate, termYears);
  const schedule = [];
  let balance = principal;

  for (let month = 1; month <= termYears * 12; month++) {
    const interestPayment = Math.round(balance * monthlyRate * 100) / 100;
    const principalPayment = Math.round((payment - interestPayment) * 100) / 100;
    balance = Math.round((balance - principalPayment) * 100) / 100;

    schedule.push({
      month,
      payment,
      principal: principalPayment,
      interest: interestPayment,
      balance: balance < 0 ? 0 : balance,
    });
  }

  return schedule;
}

function totalCost(principal, annualRate, termYears) {
  const payment = monthlyPayment(principal, annualRate, termYears);
  const total = Math.round(payment * termYears * 12 * 100) / 100;
  return {
    totalPaid: total,
    totalInterest: Math.round((total - principal) * 100) / 100,
  };
}

function affordabilityCheck(annualIncome, monthlyDebts, principal, annualRate, termYears) {
  const payment = monthlyPayment(principal, annualRate, termYears);
  const monthlyIncome = annualIncome / 12;
  const dti = ((payment + monthlyDebts) / monthlyIncome) * 100;

  return {
    monthlyPayment: payment,
    debtToIncomeRatio: Math.round(dti * 10) / 10,
    affordable: dti <= 43,
    recommendation: dti <= 28 ? "Excellent" : dti <= 36 ? "Good" : dti <= 43 ? "Borderline" : "Too high",
  };
}

module.exports = { monthlyPayment, amortizationSchedule, totalCost, affordabilityCheck };
