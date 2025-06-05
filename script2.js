function add(x, y) {
	return x+y
};

function subtract(x, y) {
	return x-y;
};

function mult(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(a, op, b) {
    switch(op) {
        case "+" :
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return mult(a,b);
        case "/":
            return divide(a,b);
        default:
            alert("Wrong operator!");
            break;
    }
}

const screen = document.querySelector(".screen");
const regularBtns = document.querySelectorAll(".regular-btn");
const operationBtns = document.querySelectorAll(".operation-btn");
const dotBtn = document.querySelector(".dot-btn");
const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");
const backBtn = document.querySelector(".back-btn");
let a="", b="", op="", res = 0;

function populateDisplay(value) {
    screen.textContent = value;
}

function clearDisplay() {
    screen.textContent = "";
}

function partialReset() {
    op = "";
    b = "";
    res = 0;
}

function evaluate() {
    res = operate(
        parseFloat(a), 
        op, 
        parseFloat(b)
    );
    a = (Math.round((res + Number.EPSILON)*1000)/1000).toString();
    clearDisplay();
    partialReset();
    populateDisplay(a);
}

regularBtns.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if(op == "") {
            a += value;
            populateDisplay(a);
        }
        else {
            b += value;
            populateDisplay(b);
        }
            
    })
});

operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if(b != "") {
            evaluate();
            op = button.textContent;
        }
        else {
            op = button.textContent;
            clearDisplay();
        }
    })
});

dotBtn.addEventListener("click", () => {
        let value = dotBtn.textContent;
        if(op == "") {
            if(!(a.includes("."))){
                a += value;
                populateDisplay(a);
            }
        }
        else {
            if(!(b.includes("."))) {
                b += value;
                populateDisplay(b);
            }
        }
    });


equalsBtn.addEventListener("click", () => {
    if(op === "/" && b == 0) {
        alert("Cannot divide by 0!");
        a = "";
        partialReset();
    }
    else {
        evaluate();
    }
});

clearBtn.addEventListener("click", () => {
    clearDisplay();
    a = "";
    partialReset();
})

backBtn.addEventListener("click", () => {
    if (op == "") {
        a = a.slice(0, -1);
        populateDisplay(a);
    }   
    else {
        if(b != "") {
            b = b.slice(0, -1);
            populateDisplay(b);
        }
    }
});