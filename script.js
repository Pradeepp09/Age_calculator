function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdate) {
    result.textContent = "Please select your birthdate!";
    result.style.color = "red";
    return;
  }

  const birthDateObj = new Date(birthdate);
  const today = new Date();

  let age_years = today.getFullYear() - birthDateObj.getFullYear();
  let age_months = today.getMonth() - birthDateObj.getMonth();
  let age_days = today.getDate() - birthDateObj.getDate();

  // Adjust for negative days
  if (age_days < 0) {
    age_months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    age_days += previousMonth.getDate(); // Days in the previous month
  }

  // Adjust for negative months
  if (age_months < 0) {
    age_years--;
    age_months += 12;
  }

  result.textContent = `Your age is ${age_years} years, ${age_months} months, and ${age_days} days.`;
  result.style.color = "green";
}
