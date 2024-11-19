function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function backspace() {
  const display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText.replace("%", "/100"));
  } catch {
    display.innerText = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    (key >= 0 && key <= 9) ||
    key === "." ||
    key === "/" ||
    key === "*" ||
    key === "-" ||
    key === "+"
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculateResult();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "%") {
    appendToDisplay("%");
  }
});
