// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Function to determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Handle form submission
document.getElementById("bmi-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get weight and height from input fields
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Get BMI category
    const category = getBMICategory(bmi);

    // Display the result
    document.getElementById("bmi-output").textContent = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById("category-output").textContent = `Category: ${category}`;

    // Show the result section
    document.getElementById("result").style.display = "block";
});
