document.addEventListener('DOMContentLoaded', function() {
  // Calorie Calculator Form
  const calculatorForm = document.getElementById('calculator-form');
  const resultDiv = document.getElementById('result');
  
  if (calculatorForm) {
    calculatorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const intensity = document.getElementById('intensity').value;
      const duration = parseInt(document.getElementById('duration').value);
      
      if (!intensity || isNaN(duration)) {
        resultDiv.innerHTML = 'Please fill in all fields correctly';
        resultDiv.style.backgroundColor = '#e60000';
        resultDiv.style.display = 'block';
        return;
      }
      
      let burnRate = 0;
      let intensityName = '';
      
      if (intensity === 'low') {
        burnRate = 5;
        intensityName = 'Low Intensity';
      } else if (intensity === 'medium') {
        burnRate = 8;
        intensityName = 'Medium Intensity';
      } else if (intensity === 'high') {
        burnRate = 12;
        intensityName = 'High Intensity';
      }
      
      const caloriesBurned = burnRate * duration;
      
      resultDiv.innerHTML = `
        <h3>Calories Burned</h3>
        <div class="result-details">
          <p><strong>${intensityName} workout for ${duration} minutes</strong></p>
          <p>You burned approximately <span style="font-size: 1.4rem; color: #ff4d4d; font-weight: bold;">${caloriesBurned}</span> calories</p>
        </div>
      `;
      resultDiv.style.backgroundColor = '#333';
      resultDiv.style.display = 'block';
    });
  }
});