const display = document.querySelector(".calculator-display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculateExpression = () => {
  try {
    output = eval(output.replace("%", "/100"));
  } catch (error) {
    output = "Error";
    display.textContent = output;
    setTimeout(() => {
      output = "";
      display.textContent = output;
    }, 1500);
  }
};

const handleInput = (btnValue) => {
  if (output === "Error") {
    output = "";
    display.textContent = output;
  }

  switch (btnValue) {
    case "=":
      if (output !== "") calculateExpression();
      break;
    case "AC":
      output = "";
      break;
    case "DEL":
      output = output.slice(0, -1);
      break;
    default:
      if (output === "" && specialChars.includes(btnValue)) return;
      if (specialChars.includes(output.slice(-1)) && specialChars.includes(btnValue)) return;
      if (btnValue === "0" && output === "") return;

      output += btnValue;
      break;
  }

  display.textContent = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => handleInput(e.target.dataset.value));
});
