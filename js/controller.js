var buttonArray ;
window.addEventListener("load",()=>
{   buttonArray = document.getElementsByTagName("button");  //stores the buttons as an HTML Collection
    /*Bind function to each button using for loop
    for(let i = 0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",isZeroOrX);
    }*/
    Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));
    //Use for Each of array to HTML Collection.Calling function using ABC of function
});
var isXorZeroFlag = false;
function isZeroOrX(){
    var buttonText = this.innerHTML; //stores the innerHTML of button
    if(!buttonText){    //check if the button is empty
    document.querySelector("#gameover").innerHTML =isXorZeroFlag?"0 TURN":"X TURN";
    this.innerHTML = isXorZeroFlag?"X":"0"; //assigns the value to button
    isXorZeroFlag = !isXorZeroFlag; 
    if(isGameOver()){
        document.querySelector("#gameover").innerHTML =isXorZeroFlag?"0 WINS":"X WINS";
        document.querySelector("#gameover").style.color = "red";
        document.getElementsByTagName("button").disabled=true;
    }
    //document.querySelector("#gameover").innerHTML =isGameOver()?"Game Over":"";
    }
}

function isSameRow(one,two,three){
    if(isRowBlank(one,two,three)){
        return false;
    }
    return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
}

function isSameColumn(one,two,three){
    if(isColumnBlank(one,two,three)){
        return false;
    }
    return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
}

function isDiagonal(one,two,three){
    if(isDiagonalBlank(one,two,three)){
        return false;
    }
    return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
}

function isRowBlank(one,two,three){
return isButtonBlank(one) && isButtonBlank(two) && isButtonBlank(three);
}

function isColumnBlank(one,two,three){
    return isButtonBlank(one) && isButtonBlank(two) && isButtonBlank(three);
}

function isDiagonalBlank(one,two,three){
    return isButtonBlank(one) && isButtonBlank(two) && isButtonBlank(three);
}

function isButtonBlank(button){
return button.innerHTML.trim().length==0?true:false;
}

function isGameOver(){
    if(isSameRow(buttonArray[0],buttonArray[1],buttonArray[2])){
        return true;
    }
    if(isSameRow(buttonArray[3],buttonArray[4],buttonArray[5])){
        return true;
    }
    if(isSameRow(buttonArray[6],buttonArray[7],buttonArray[8])){
        return true;
    }
    if(isSameColumn(buttonArray[0],buttonArray[3],buttonArray[6])){
        return true;
    }
    if(isSameColumn(buttonArray[1],buttonArray[4],buttonArray[7])){
        return true;
    }
    if(isSameColumn(buttonArray[2],buttonArray[5],buttonArray[8])){
        return true;
    }
    if(isDiagonal(buttonArray[0],buttonArray[4],buttonArray[8])){
        return true;
    }
    if(isDiagonal(buttonArray[2],buttonArray[4],buttonArray[6])){
        return true;
    }
    return false;
}