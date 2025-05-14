const add = function(x, y) {
	return x+y
};

const subtract = function(x, y) {
	return x-y;
};

const mult = function(x,y) {
    return x*y;
}

const divide = function(x,y) {
    return x/y;
}

const sum = function(arr) {
	return arr.reduce((sum, item) => {
    sum += item;
    return sum;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => {
    total *= item;
    return total;
  }, 1);
};

let a, b, op;

function operate(a, b, op) {
    switch(op) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            mult(a,b);
            break;
        case "/":
            divide(a,b);
            break;
        default:
            alert("Wrong operator!");
            break;
    }
}