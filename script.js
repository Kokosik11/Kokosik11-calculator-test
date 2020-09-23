// const clickAudio = new Audio("btn.mp3");

class Calculator {
    prmArea = document.querySelector("#numArea");
    secArea = document.querySelector("#simArea");
    prmNum = 0;
    sim;

    printNumber = num => { 
        if(this.prmArea.innerText.length < 21) this.prmArea.innerText += num;
    }

    clear = () => { 
        this.prmArea.innerText = "";
        this.secArea.innerText = "";
        this.prmNum = 0;
        this.sim = "";
    }

    printSim = sim => {
        if(this.secArea.innerText.length == 0) {
            this.prmNum = +this.prmArea.innerText;
            this.secArea.innerText = this.prmArea.innerText + " " + sim;
            this.prmArea.innerText = "";
            this.sim = sim;
            // sims.forEach(sim => {
            //     sim.removeEventListener("onclick");
            // })
        } 
    }

    calculate = () => {
        switch (this.sim) {
            case "+": {
                this.prmArea.innerText = this.prmNum + +this.prmArea.innerText;
                this.secArea.innerText = "";
                break;
            }
            case "-": {
                this.prmArea.innerText = this.prmNum - +this.prmArea.innerText;
                this.secArea.innerText = "";
                break;
            }
            case "x": {
                this.prmArea.innerText = this.prmNum * +this.prmArea.innerText;
                this.secArea.innerText = "";
                break;
            }
            case "/": {
                this.prmArea.innerText = this.prmNum / +this.prmArea.innerText;
                this.secArea.innerText = "";
                break;
            }
            case "%": {
                this.prmArea.innerText = this.prmNum % +this.prmArea.innerText;
                this.secArea.innerText = "";
                break;
            }

        }
    }
}

const calculator = new Calculator();

const numbers = document.querySelectorAll(".num");
const sims = document.querySelectorAll(".sim");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");

numbers.forEach(number => {
    // button.onclick
    number.onclick = () => { 
        // clickAudio.play();
        calculator.printNumber(number.innerText);
    }
})

sims.forEach(sim => {
    sim.onclick = () => { 
        // clickAudio.play();
        calculator.printSim(sim.innerText);
    }
})

equal.onclick = () => { 
    // clickAudio.play();
    calculator.calculate(); 
}
ac.onclick = () => { 
    // clickAudio.play();
    calculator.clear(); 
}