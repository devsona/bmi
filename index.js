let height, weight;

function changeUnit() {
  let unit = document.getElementById('radio-container');
  unit.addEventListener('click', function(e) {
    if (e.target.id == 'metric') {
      document.getElementById('wxh-container').innerHTML = `        
        <p>height</p>
        <input type="number" class="wxh" placeholder="CM" id='cm'>
        <p>weight</p>
        <input type="number" class="wxh" placeholder="KG" id="weight">`;
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
    // Calculate BMI for imperial units
    // ...
  }
}

function addBtn() {
  let bmi = getBmi();
  if (weight && height) {
    document.getElementById('submit-container').innerHTML = `<button>Submit</button>`;
  }
}

document.addEventListener('input', function() {
    addBtn();
});
