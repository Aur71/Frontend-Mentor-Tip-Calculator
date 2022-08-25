const inputs = document.querySelectorAll("input");
const btns = document.querySelectorAll(".grid-btn")
const h2 = document.querySelectorAll("h2");

btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(btn => {
            btn.classList.remove("btn-active");
        })
        btn.classList.add("btn-active")
    }
})

inputs.forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^\d\s/]/g , "");
        if(parseInt(this.value) < 1) {
            this.value = this.value.replace("")
        }
    });
})


function getResult() {
    let bill = getBill();
    let tip = getTip();
    let people = getPeople();
    let total = getTotal();

    if(total.toString().length > 10) {
        total = total.toFixed(2);
    }
    
    h2[0].textContent = tip;
    h2[1].textContent = total;
}

function getBill() {
    return parseInt(inputs[0].value)
}

function getTip() {
    if(inputs[1].value.length >= 1) {
        return parseInt(inputs[1].value);
    } else if(btns[0].classList.contains("btn-active")) {
        return 5/100 * getBill()
    } else if(btns[1].classList.contains("btn-active")) {
        return 10/100 * getBill()
    }  else if(btns[2].classList.contains("btn-active")) {
        return 15/100 * getBill()
    } else if(btns[3].classList.contains("btn-active")) {
        return 25/100 * getBill()
    } else if(btns[4].classList.contains("btn-active")) {
        return 50/100 * getBill()
    } else {
        return 0;
    }
}

function getPeople() {
    if(parseInt(inputs[2].value) > 1) {
        return parseInt(inputs[2].value)
    } else {
        return 1
    }
}

function getTotal() {
    return (getBill() + getTip()) / getPeople();
}

inputs.forEach(input => {
    input.addEventListener("input", getResult);
})

getBill();