function operate(inputArray) {
  for (let i = 0; i < inputArray.length; i++) { // Combine number elements next to each other in the array
    if (typeof inputArray[i] !== "number") {
      if (inputArray[i] === "*") {
        inputArray[i] = ":*:";

      } else if (inputArray[i] === "/") {
        inputArray[i] = ":/:";

      } else if (inputArray[i] === "+") {
        inputArray[i] = ":+:";

      } else if (inputArray[i] === "-") {
        inputArray[i] = ":-:";

      }

    }
  }
  inputArray = inputArray.join("");
  inputArray = inputArray.split(":");
  console.log(inputArray + " after concat");

  for (let i = 0; i < inputArray.length; i++) {     //multiply
    const a = inputArray[i];
    const b = inputArray[i + 1];
    const c = inputArray[i + 2];
    if (b === "*") {
      inputArray.splice(i, 2);
      inputArray[i] = (parseFloat(a) * parseFloat(c)).toString();
      console.log(inputArray);
      i--;
    }
  }
  console.log(inputArray + " after multiply");

  for (let i = 0; i < inputArray.length; i++) {     //divide
    const a = inputArray[i];
    const b = inputArray[i + 1];
    const c = inputArray[i + 2];
    if (b === "/") {
      inputArray.splice(i, 2);
      inputArray[i] = (parseFloat(a) / parseFloat(c)).toString();
      console.log(inputArray);
      i--;
    }
  }
  console.log(inputArray + " after divide");

  for (let i = 0; i < inputArray.length; i++) {
    const a = inputArray[i];
    const b = inputArray[i + 1];
    const c = inputArray[i + 2];
    if (b === "+") {                                 //add
      inputArray.splice(i, 2);
      inputArray[i] = (parseFloat(a) + parseFloat(c)).toString();
      i--;
    } else if (b === "-") {                           //subtract
      inputArray.splice(i, 2);
      inputArray[i] = (parseFloat(a) - parseFloat(c)).toString();
      i--;
    }
  }
  console.log(inputArray + " after add or subtract");

  textOutput.textContent = inputArray;
  return inputArray;
}

let inputArray = [];

const textOutput = document.getElementById("textOutput");

const buttonArray = [];
for (let i = 0; i <= 9; i++) {
  buttonArray[i] = document.getElementById(i);
}
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");


buttonArray.forEach((numButton) => {
  numButton.addEventListener("click", () => {
    inputArray.push(parseInt(numButton.textContent));
    console.log(inputArray);
    textOutput.textContent += numButton.textContent;
  });
});
clearButton.addEventListener("click", () => {
  inputArray.length = 0;
  textOutput.innerHTML = "";
});
addButton.addEventListener("click", () => {
  if (inputArray[inputArray.length - 1] !== multiplyButton.textContent &&
    inputArray[inputArray.length - 1] !== divideButton.textContent &&
    inputArray[inputArray.length - 1] !== subtractButton.textContent &&
    inputArray[inputArray.length - 1] !== addButton.textContent) {

    inputArray.push(addButton.textContent);
    console.log(inputArray);
    textOutput.textContent += addButton.textContent;
  }
});
subtractButton.addEventListener("click", () => {
  if (inputArray[inputArray.length - 1] !== multiplyButton.textContent &&
    inputArray[inputArray.length - 1] !== divideButton.textContent &&
    inputArray[inputArray.length - 1] !== subtractButton.textContent &&
    inputArray[inputArray.length - 1] !== addButton.textContent) {

    inputArray.push(subtractButton.textContent);
    console.log(inputArray);
    textOutput.textContent += subtractButton.textContent;
  }
});
multiplyButton.addEventListener("click", () => {
  if (inputArray[inputArray.length - 1] !== multiplyButton.textContent &&
    inputArray[inputArray.length - 1] !== divideButton.textContent &&
    inputArray[inputArray.length - 1] !== subtractButton.textContent &&
    inputArray[inputArray.length - 1] !== addButton.textContent) {

    inputArray.push(multiplyButton.textContent);
    console.log(inputArray);
    textOutput.textContent += multiplyButton.textContent;
  }
});
divideButton.addEventListener("click", () => {
  if (inputArray[inputArray.length - 1] !== multiplyButton.textContent &&
    inputArray[inputArray.length - 1] !== divideButton.textContent &&
    inputArray[inputArray.length - 1] !== subtractButton.textContent &&
    inputArray[inputArray.length - 1] !== addButton.textContent) {

    inputArray.push(divideButton.textContent);
    console.log(inputArray);
    textOutput.textContent += divideButton.textContent;
  }
});
equalsButton.addEventListener("click", () => {
  if (inputArray[inputArray.length - 1] !== multiplyButton.textContent &&
    inputArray[inputArray.length - 1] !== divideButton.textContent &&
    inputArray[inputArray.length - 1] !== subtractButton.textContent &&
    inputArray[inputArray.length - 1] !== addButton.textContent) {

    inputArray = operate(inputArray);
  }
});