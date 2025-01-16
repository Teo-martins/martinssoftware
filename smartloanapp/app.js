// Select DOM elements
const loanForm = document.getElementById("loanForm");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTerm = document.getElementById("loanTerm");
const timeUnit = document.getElementById("timeUnit");
const currency = document.getElementById("currency");
const monthlyPayment = document.getElementById("monthlyPayment");
const totalPayment = document.getElementById("totalPayment");
const totalInterest = document.getElementById("totalInterest");
const loanGraph = document.getElementById("loanGraph");

// Currency conversion rates (example rates; update as needed)
const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  NGN: 760,
};

// Function to calculate loan details
function calculateLoan(amount, annualRate, termInMonths) {
  const monthlyRate = annualRate / 100 / 12; // Convert annual rate to monthly rate
  let monthly, total, interest;

  if (monthlyRate === 0) {
    // Handle zero-interest loans
    monthly = amount / termInMonths;
    total = amount;
    interest = 0;
  } else {
    // Standard loan formula: M = P * [r(1 + r)^n] / [(1 + r)^n - 1]
    monthly = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));
    total = monthly * termInMonths;
    interest = total - amount;
  }

  return {
    monthly: monthly,
    total: total,
    interest: interest,
  };
}

// Function to convert amounts to selected currency
function convertCurrency(amount, selectedCurrency) {
  const rate = currencyRates[selectedCurrency] || 1; // Default to USD if currency not found
  return (amount * rate).toFixed(2);
}

// Function to render the chart
function renderChart(amount, interest) {
  const ctx = loanGraph.getContext("2d");

  // Destroy existing chart instance if it exists
  if (window.loanChart) {
    window.loanChart.destroy();
  }

  window.loanChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Principal Amount", "Total Interest"],
      datasets: [
        {
          data: [amount, interest],
          backgroundColor: ["#4CAF50", "#FF5722"],
          hoverBackgroundColor: ["#66BB6A", "#FF7043"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

// Handle form submission
loanForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = parseFloat(loanAmount.value);
  const rate = parseFloat(interestRate.value);
  const term = parseInt(loanTerm.value);
  const isTermInMonths = timeUnit.value === "months"; // Check if the term is in months
  const selectedCurrency = currency.value;

  // Validate input
  if (isNaN(amount) || isNaN(rate) || isNaN(term) || amount <= 0 || rate < 0 || term <= 0) {
    alert("Please enter valid values for all fields.");
    return;
  }

  // Convert term to months if the selected unit is years
  const termInMonths = isTermInMonths ? term : term * 12;

  // Calculate loan details
  const { monthly, total, interest } = calculateLoan(amount, rate, termInMonths);

  // Convert results to selected currency
  const convertedMonthly = convertCurrency(monthly, selectedCurrency);
  const convertedTotal = convertCurrency(total, selectedCurrency);
  const convertedInterest = convertCurrency(interest, selectedCurrency);

  // Display results
  monthlyPayment.textContent = `${selectedCurrency} ${convertedMonthly}`;
  totalPayment.textContent = `${selectedCurrency} ${convertedTotal}`;
  totalInterest.textContent = `${selectedCurrency} ${convertedInterest}`;

  // Render the chart
  renderChart(parseFloat(total), parseFloat(interest));
});
