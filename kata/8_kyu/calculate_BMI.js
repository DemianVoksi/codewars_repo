// 8 kyu

// Javascript

// Calculate BMI

// By: wichu

// Write function bmi that calculates body mass index
// (bmi = weight / height squared)
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi_result = weight / (height * height);

  if (bmi_result <= 18.5) {
    return "Underweight";
  } else if (bmi_result <= 25.0) {
    return "Normal";
  } else if (bmi_result <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
