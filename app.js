const g = [8,4,8,5,3,5,6,3,5];


const Convert = (kg, km, C) => {if (kg != 0){return kg * 0.454;} if (km != 0){return km * 1.609344;}if (C != 0){return C * 1.8;}}


for (var i = 1; i != g.length; i++){ console.log(Convert(0, g[i], 0));}



