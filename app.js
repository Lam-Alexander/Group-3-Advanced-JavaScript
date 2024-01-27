ar f = document.getElementById("inputBox").value;

var l = parseFloat(f);

console.log(l);



//var number = parseInt(f.value, 10);
//f.setAttribute("type", "text");



let calculation = document.getElementById("calculation"); // changes the html element

console.log(f); // prints the element to the console as a test


let lbstokilo = document.getElementById("lbstokilo");  lbstokilo.addEventListener('click', () =>  document.getElementById("calculation").innerHTML = l * 2.20462262);

let miletokilo = document.getElementById("miletokilo"); const Convert_milestokm = (miles) =>  calculation.innerHTML = miles * 1.609344; miletokilo.addEventListener('click', Convert_milestokm);

let CtoF = document.getElementById("CtoF"); const Convert_CtoF = (F) =>  calculation.innerHTML = (F - 32) / 1.8; CtoF.addEventListener('click', Convert_CtoF);

let kilotolbs = document.getElementById("kilotolbs"); const Convert_kgtolbs = (lbs) => calculation.innerHTML = lbs * 0.454; kilotolbs.addEventListener('click', Convert_kgtolbs);

let kilotomile = document.getElementById("kilotomile"); const Convert_kmtomiles = (km) =>  calculation.innerHTML = km * 0.621371; kilotomile.addEventListener('click', Convert_kmtomiles);

let FtoC = document.getElementById("FtoC"); const Convert_FtoC = (C) => calculation.innerHTML = (C * 1.8) + 32; FtoC.addEventListener('click', Convert_FtoC);



