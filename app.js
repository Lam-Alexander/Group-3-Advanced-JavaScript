let f;


Arraycalculation = (output, value) => {
    for(let i = output.length - 1; i >= 0; i--){ output[i] = (output[i] * value).toFixed(3); calculation.innerHTML = output;}
  }

let calculation = document.getElementById("calculation"); // changes the html element


let lbstokilo = document.getElementById("lbstokilo");  lbstokilo.addEventListener('click', () => { f = document.getElementById("input").value; Arraycalculation(f.split(","), 0.454);});

//Arraycalculation(f.split(","), (f * 1.8) + 32);

let miletokilo = document.getElementById("miletokilo");  miletokilo.addEventListener('click', () => { f = document.getElementById("input").value; Arraycalculation(f.split(","), 1.609344);});

let CtoF = document.getElementById("CtoF");  CtoF.addEventListener('click', () => { f = document.getElementById("input").value; const output = f.split(","); for(let i = output.length - 1; i >= 0; i--){output[i] = ((output[i] - 32) / 1.8).toFixed(3); calculation.innerHTML = output}});

let kilotolbs = document.getElementById("kilotolbs");  kilotolbs.addEventListener('click', () => { f = document.getElementById("input").value; Arraycalculation(f.split(","), 2.204623);});

let kilotomile = document.getElementById("kilotomile");  kilotomile.addEventListener('click', () => { f = document.getElementById("input").value; Arraycalculation(f.split(","), 0.621371);});

let FtoC = document.getElementById("FtoC");  FtoC.addEventListener('click', () => { f = document.getElementById("input").value; const output = f.split(","); for(let i = output.length - 1; i >= 0; i--){output[i] = ((output[i] * 1.8) + 32).toFixed(3); calculation.innerHTML = output}});
