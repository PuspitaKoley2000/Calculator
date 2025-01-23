let curDisplay = document.querySelector("#display");
let operators = ["+", "-", "*", "/"];
isDotClicked = false;
isResult = false;

numClick = (num) => {
  if(isResult){
    clearClick();
  }
  document.querySelector("#equal").disabled = false;
  curDisplay.value += num;
};

signClick = (sign) => {
  isResult = false;
  if (curDisplay.value === "") {
    return;
  }
  if (operators.includes(curDisplay.value.slice(-1))) {
    curDisplay.value = curDisplay.value.slice(0, -1);
  }
  isDotClicked = false;
  curDisplay.value += sign;
};

dotClick = () => {
  if(isResult){
    clearClick();
  }
  if (isDotClicked) {
    return;
  }
  if (curDisplay.value === "" || operators.includes(curDisplay.value.slice(-1))) {
    curDisplay.value += "0";
  } 
  isDotClicked = true;
  curDisplay.value += ".";
};

equalClick = () => {
  if (operators.includes(curDisplay.value.slice(-1)) || curDisplay.value === "" || curDisplay.value.slice(-1) === '.') {
    document.querySelector("#equal").disabled = true;
  }else{
    curDisplay.value = eval(curDisplay.value);
    if(eval(curDisplay.value % 1) !== 0){
      curDisplay.value = (parseFloat(curDisplay.value)).toFixed(8);
    }
    isResult = true;
  }
};

clearClick = () => {
  isResult = false;
  isDotClicked = false;
  document.querySelector("#equal").disabled = false;
  curDisplay.value = "";
};

delClick = () => {
  if(curDisplay.value.slice(-1) === '.'){
    isDotClicked = false;
  }
  curDisplay.value = curDisplay.value.slice(0, -1);
};
