const form = document.querySelector('form');


form.addEventListener('submit', function(e){
  e.preventDefault()

  const weight = parseInt(document.querySelector('#weight').value);
  const Height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#result');

  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid input ${weight}`;
  } 
  else if(Height === '' || Height < 0 || isNaN(Height)){
    results.innerHTML = `please give a valid input ${height}`;
  }
  else {
    const BMI = (weight/((Height*Height)/10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});



 
  
    
