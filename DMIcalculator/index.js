// Function to calculate BMI
function calculateBMI() {
    // Get user input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        displayResult('Please enter valid positive numbers for weight and height.', '', 'error');
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display the result
    displayResult(`Your BMI is ${bmi}`, `Category: ${category}`);
}

// Function to reset the inputs and result
function resetCalculator() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    displayResult('', '', 'reset');
}

// Function to display the result
function displayResult(bmiText, categoryText, type = '') {
    const bmiResult = document.getElementById('bmi-result');
    const bmiCategory = document.getElementById('bmi-category');

    if (type === 'error') {
        bmiResult.textContent = bmiText;
        bmiCategory.textContent = '';
        bmiResult.style.color = 'red';
        return;
    }

    if (type === 'reset') {
        bmiResult.textContent = '';
        bmiCategory.textContent = '';
        return;
    }

    bmiResult.textContent = bmiText;
    bmiCategory.textContent = categoryText;
    bmiResult.style.color = '#ffcc00'; // Match design theme
    bmiCategory.style.color = '#ffcc00';
}

// Attach event listeners to buttons
document.getElementById('calculate-btn').addEventListener('click', calculateBMI);
document.getElementById('reset-btn').addEventListener('click', resetCalculator);
