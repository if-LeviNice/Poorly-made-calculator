//Levi Sales
let display = {
    expression: document.getElementById('exp_display'),
    display: document.getElementById('single_display')
}

class Operation {
    constructor(numA) {
        this.numA = numA
        this.numB = ''

        this.insert = ''

        this.operator = '+'
        this.isNumA = true
    }
    numInput(num) {
        if((num == '.' && !this.insert.includes('.')) | !isNaN(num))
        {
            this.insert += num
            showOnDisplay(this.insert)
        }
    }
    numDefine(num) {
        if (!this.isOperating && !isNaN(parseFloat(num)))
        {
            this.numA = num
            this.numA.charAt(0) == '.' ? this.numA = '0' + this.numA : false
            this.numA[this.numA.length - 1] == '.' ? this.numA += '0' : false
        }
        else if (!isNaN(parseFloat(num))) {
            this.numB = num
            this.numB.charAt(0) == '.' ? this.numB = '0' + this.numB : false
            this.numB[this.numB.length - 1] == '.' ? this.numB += '0' : false
        }
        this.isOperating = false
    }
    opInput(op) {
        this.numB = ''
        this.numDefine(this.insert)
        this.isOperating = true
        this.insert = ''
        this.operator = op
        showOnDisplay(this.operator)
    }
    calc() {
        this.numDefine(this.insert)
        this.isOperating = false
        this.insert = ''
        if (isNaN(this.numA) | this.numA == '') this.numA = '0'
        if (isNaN(this.numB) | this.numB == '') this.numB = '0'
        showOnExpression(this.numA + ' ' + this.operator + ' ' + this.numB + '=')
        switch (this.operator) {
            case '+':
                this.numA = parseFloat(this.numA) + parseFloat(this.numB)
                break
            case '-':
                this.numA = parseFloat(this.numA) - parseFloat(this.numB)
                break
            case '*':
                this.numA = parseFloat(this.numA) * parseFloat(this.numB)
                break
            case '/':
                this.numA = parseFloat(this.numA) / parseFloat(this.numB)
                break
            case '^':
                this.numA = Math.pow(parseFloat(this.numA), parseFloat(this.numB))
                break
            case '√':
                showOnExpression(this.numB + ' ' + this.operator + ' ' + this.numA + '=')
                this.numA = Math.pow(parseFloat(this.numA), 1 / parseFloat(this.numB))
                break
        }
        showOnDisplay(this.numA)
    }
    reset()
    {
        clearAllDisplay()
        if(!isNaN(this.numA)&&this.numA.toString().length>-1)
        {
            calc_history.push(new Operation(this.numA))
            console.log('Result \"'+this.numA+'\" was saved sucessfully!')
        }
        main_ops = new Operation('')
        console.log('A brand new Operation() class has been loaded.')
    }
    backspace()
    {
        let x = ''
        for(let i = 0; i < this.insert.length-1; i++)
        {
            x += this.insert[i]
        }
        this.insert = x
        showOnDisplay(x)
    }
}

function clearAllDisplay() {
    display.expression.innerText = ''
    display.display.innerText = ''
}
function showOnDisplay(x) {
    display.display.innerText = x
}
function showOnExpression(x) {
    display.expression.innerText = x
}

var calc_history = []
var main_ops = new Operation('')