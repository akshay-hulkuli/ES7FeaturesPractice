let value;
let base = 24;
let exponent  = 12;

//es7 feature
value = base ** exponent;
console.log(value);


//legacy
value  = Math.pow(base,exponent);
console.log(value);