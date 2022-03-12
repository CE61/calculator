const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numArray) {
  var sum = 0;
	numArray.forEach(function(num){
    sum = sum + num;
  });
  return sum;
};

const multiply = function(numArray) {
  var product = 1;
  numArray.forEach(function(num){
    product = product * num;
  });
  return product;
};

const divide = function(numArray) {
    var quotient = 1;
    numArray.forEach(function(num){
      quotient = quotient * num;
    });
    return product;
  };

function operate(inputArray){ // Combine number elements next to each other in the array
    for(let i =0; i < inputArray.length; i++){
      if(typeof inputArray[i] !== "number"){
        if(inputArray[i] === "*"){
          inputArray[i] = ":*:";

        }else if(inputArray[i] === "/"){
          inputArray[i] = ":/:";

        }else if(inputArray[i] === "+"){
          inputArray[i] = ":+:";

        }else if(inputArray[i] === "-"){
          inputArray[i] = ":-:";

        }
         
      }
    }
    inputArray = inputArray.join("");
    inputArray = inputArray.split(":");

    console.log(inputArray + " after concat");

    for(let i = 0; i < inputArray.length; i++){     //multiply
       const a = inputArray[i];
       const b = inputArray[i+1];
       const c = inputArray[i+2];
       if(b==="*"){
            inputArray.splice(i,i+2);
            inputArray[i] = (parseFloat(a)*parseFloat(c)).toString();
            i--;
        }
    }
    console.log(inputArray + " after multiply");

    for(let i = 0; i < inputArray.length; i++){     //divide
        const a = inputArray[i];
        const b = inputArray[i+1];
        const c = inputArray[i+2];
        if(b==="/"){
            inputArray.splice(i,i+2);
            inputArray[i] = (parseFloat(a)/parseFloat(c)).toString();
            i--;
        }
     }
     console.log(inputArray + " after divide");

     for(let i = 0; i < inputArray.length; i++){
        const a = inputArray[i];
        const b = inputArray[i+1];
        const c = inputArray[i+2];
        console.log(a + " :a \n " + b + " :b \n" + c + " :c before if statement");
        console.log(inputArray + " before splice add");
        if(b==="+"){                                 //add
            console.log(a + " :a \n " + b + " :b \n" + c + " :c after if statement");
            inputArray.splice(i,i+2);
            console.log(inputArray + " after splice");
            inputArray[i] = (parseFloat(a)+parseFloat(c)).toString();
            console.log(inputArray + " after i equals");
            i--;
        }else if(b==="-"){                            //subtract
          inputArray.splice(i,i+2);
            inputArray[i] = (parseFloat(a)-parseFloat(c)).toString();
            i--;
        }
     }
     console.log(inputArray + " after add or subtract");

     textOutput.textContent = inputArray;
}

  const inputArray=[];

  const textOutput = document.getElementById("textOutput");

  const buttonArray =[];
  for(let i = 0; i <= 9; i++){
      buttonArray[i] = document.getElementById(i);
  }
  const clearButton = document.getElementById("clear");
  const equalsButton = document.getElementById("equals");
  const addButton = document.getElementById("add");
  const subtractButton = document.getElementById("subtract");
  const multiplyButton = document.getElementById("multiply");
  const divideButton = document.getElementById("divide");


  buttonArray.forEach((numButton)=>{
      numButton.addEventListener("click",()=>{
          inputArray.push(parseInt(numButton.textContent));
          console.log(inputArray);
          textOutput.textContent += numButton.textContent;
      });
  });
  clearButton.addEventListener("click",()=>{
      inputArray.length = 0;
      textOutput.innerHTML = "";
  });
  addButton.addEventListener("click",()=>{
    if(inputArray[inputArray.length-1]!==multiplyButton.textContent&&
        inputArray[inputArray.length-1]!==divideButton.textContent&&
        inputArray[inputArray.length-1]!==subtractButton.textContent&&
        inputArray[inputArray.length-1]!==addButton.textContent){
          
      inputArray.push(addButton.textContent);
      console.log(inputArray);
      textOutput.textContent += addButton.textContent;
    }
  });
  subtractButton.addEventListener("click",()=>{
    if(inputArray[inputArray.length-1]!==multiplyButton.textContent&&
        inputArray[inputArray.length-1]!==divideButton.textContent&&
        inputArray[inputArray.length-1]!==subtractButton.textContent&&
        inputArray[inputArray.length-1]!==addButton.textContent){

        inputArray.push(subtractButton.textContent);
        console.log(inputArray);
        textOutput.textContent += subtractButton.textContent;
    }
  });
  multiplyButton.addEventListener("click",()=>{
    if(inputArray[inputArray.length-1]!==multiplyButton.textContent&&
        inputArray[inputArray.length-1]!==divideButton.textContent&&
        inputArray[inputArray.length-1]!==subtractButton.textContent&&
        inputArray[inputArray.length-1]!==addButton.textContent){

        inputArray.push(multiplyButton.textContent);
        console.log(inputArray);
        textOutput.textContent += multiplyButton.textContent;
    }
  });
  divideButton.addEventListener("click",()=>{
    if(inputArray[inputArray.length-1]!==multiplyButton.textContent&&
        inputArray[inputArray.length-1]!==divideButton.textContent&&
        inputArray[inputArray.length-1]!==subtractButton.textContent&&
        inputArray[inputArray.length-1]!==addButton.textContent){

        inputArray.push(divideButton.textContent);
        console.log(inputArray);
        textOutput.textContent += divideButton.textContent;
    }
  });
  equalsButton.addEventListener("click",()=>{
    if(inputArray[inputArray.length-1]!==multiplyButton.textContent&&
        inputArray[inputArray.length-1]!==divideButton.textContent&&
        inputArray[inputArray.length-1]!==subtractButton.textContent&&
        inputArray[inputArray.length-1]!==addButton.textContent){

        operate(inputArray);
    }
  });