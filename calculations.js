function addCharacter(value){
    document.getElementById("display").value += value;
}

function clearBtn(){
    document.getElementById("display").value = "";
}

function calculate(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}