function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

let x = multiply(3,5);
console.log(x);
console.log('The value of a is ' + x);

var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota