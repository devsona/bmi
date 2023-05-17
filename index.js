let height, weight

function changeUnit() {
  let unit = document.getElementById('radio-container');
  unit.addEventListener('click', function(e) {
    if (e.target.id == 'metric') {
      document.getElementById('wxh-container').innerHTML = `        
        <p>height</p>
        <input type="number" class="wxh" placeholder="CM" id='cm' min="1" max="300"> 
        <p>weight</p>
        <input type="number" class="wxh" placeholder="KG" id="weight"  min="1" max="999">`;
    } else {
      document.getElementById('wxh-container').innerHTML = `             
        <p>height</p>
        <div>
        <input type="number" class="wxh" placeholder="ft" id='feet'>
        <input type="number" class="wxh" placeholder="in" id='inch'>
        </div>
        <p>weight</p>
        <div>
        <input type="number" class="wxh" placeholder="st" id='st'>
        <input type="number" class="wxh" placeholder="lbs" id='pound'>
        </div>`;
    }
  });
}

function startCheck() {
  document.getElementById('metric').checked = true;
}

startCheck();
changeUnit();

function fixedDecimal(num) {
  return Number.parseFloat(num).toFixed(2);
}

function getBmi() {
  if (document.getElementById('metric').checked) {
    weight = document.getElementById('weight').value;
    height = document.getElementById('cm').value;
    let bmi = weight / Math.pow(height, 2);
    bmi += bmi * 10000;
    bmi = fixedDecimal(bmi);
    return bmi;
  } else {
    let feet = document.getElementById('feet').value;
    let inch = document.getElementById('inch').value;
    let st = document.getElementById('st').value;
    let pound = document.getElementById('pound').value;
    
    let heightInInches = (parseInt(feet) * 12) + parseInt(inch);
    let weightInPounds = (parseInt(st) * 14) + parseInt(pound);
    
    let bmi = weightInPounds / Math.pow(heightInInches, 2) * 703;
    bmi = fixedDecimal(bmi);
    return bmi;
  }
}

function ifHealthy(){
    let bmi = getBmi()
    let healthyWord;
    if(bmi < 18.5){
        healthyWord = 'Underweight'
    } else if (bmi <= 24.5){
        healthyWord = 'Healthy'
    } else if (bmi <= 30) {
        healthyWord = 'Overweight'
    } else if (bmi > 30){
        healthyWord = 'Obese'
    }else {
        healthyWord = 'error please try again!'
    }
    return healthyWord   
}




document.addEventListener('input', function() {
    let numberHtml = document.getElementById('bmi-answer');
    let bmi = getBmi();
    
    if (isNaN(bmi) || !isFinite(bmi)) {
      numberHtml.innerHTML = '0.00';
      document.getElementById('bmi-answer-p-ending').innerHTML =`Add your weight and height details to recive more information about your bmi. Or scroll down to learn more!`
    } else {
      numberHtml.innerHTML = bmi;
      document.getElementById('bmi-answer-p-ending').innerHTML =`Your BMI suggests you’re a <span>${ifHealthy()}</span> weight. `
    }
    if (bmi > 100 || bmi < 0){
        numberHtml.innerHTML = 'Impomsible BMI'
        numberHtml.style.fontSize = '2rem'
    }

});


