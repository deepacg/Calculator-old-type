var isOperatorClicked=0
var result=0, new_value=0, old_value=0
var operator;
var isPointClicked=0

function buttonClick(val) {
    
    if(isOperatorClicked==1 || document.getElementById("text1").value=='0') {
        document.getElementById("text1").value=val
        isOperatorClicked=0
    }
        
    else
        document.getElementById("text1").value+=val
}

function pointClick() {

    if(isPointClicked==0){
        if (isOperatorClicked==1) {
            document.getElementById("text1").value='0.'
            isOperatorClicked=0
        }
        else 
            document.getElementById("text1").value+='.'
        isPointClicked=1
    }
}

function clearScr() {
    isPointClicked=0
    document.getElementById("text1").value=0
}

function equalsClick() {
    isPointClicked=0
    isOperatorClicked=1;
    new_value=document.getElementById("text1").value

    if(operator=='+') 
        result=parseFloat(old_value)+parseFloat(new_value)

    else if(operator=='-') 
        result=old_value-new_value

    else if(operator=='x') 
        result=old_value*new_value

    else if(operator=='/') 
        result=old_value/new_value

    document.getElementById("text1").value=result
}

function operatorClick(val) {
    isPointClicked=0
    operator=val
    isOperatorClicked=1
    old_value=document.getElementById("text1").value
}