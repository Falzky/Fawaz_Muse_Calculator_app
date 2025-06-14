// Grab all the calculator button inputs
let buttons = document.querySelectorAll(".buttons > input");

// Select the display area (textarea)
let textarea = document.querySelector("textarea");

// This will hold whatever the user types/clicks
let str = "";

// Loop through each button and add a click event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let val = button.value; // Get the value of the clicked button

    if (val === "=") {
      try {
        let fixedStr = str
          .replace(/×/g, "*") // Replace × with *
          .replace(/÷/g, "/"); // If using divide symbol

        // Evaluate the expression using eval
        str = eval(fixedStr);
      } catch {
        str = "Error";
      }
    } else if (val === "⌫") {   // If backspace (⌫) is clicked, remove the last character
      str = str.slice(0, -1);
    } else if (val === "C") { // If clear (C) is clicked, wipe everything
      str = "";
    } else if (val === "%") // If percent is clicked, convert the last number to a percentage
      let match = str.match(/(\d+\.?\d*)$/);
      if (match) {
        let number = match[0];
        let percent = parseFloat(number) / 100;
        // Replace just the matched number with its percentage value
        str = str.replace(/(\d+\.?\d*)$/, percent.toString());
      }
    } else {
      str += val;
    }

    textarea.value = str;
  });
});
