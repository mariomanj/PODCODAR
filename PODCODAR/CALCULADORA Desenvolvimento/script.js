const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor (currentOperationText){
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    addDigit(digit){
        this.currentOperation = digit
        this.updateScreen()
    }

    updateScreen(){
        
    }
}

const calc = new Calculator(currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value === '.'){
            calc.addDigit(value)
        } else {

        }
    })

})

