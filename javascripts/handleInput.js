const outputDiv = document.getElementById("outputDiv");
let textInput = document.getElementById("textInput");
const splitBtn = document.getElementById("splitBtn");
let inputStr;

splitBtn.addEventListener("click", async () => {
  outputDiv.innerHTML = ""; // Clear previous output

  inputStr = textInput.value;
  let splittedString = await splitString(inputStr);

  // Check which case options are selected
  const camelCaseSelected = document.getElementById("camel").checked;
  const pascalCaseSelected = document.getElementById("pascal").checked;
  const snakeCaseSelected = document.getElementById("snake").checked;
  const kebabCaseSelected = document.getElementById("kebab").checked;

  // No conversion
  const splitWordsTextArea = document.createElement("textarea");
  splitWordsTextArea.value = splittedString.join(" ");
  splitWordsTextArea.className =
    "border rounded p-2 mb-2 w-full min-h-10 font-medium";
  outputDiv.appendChild(document.createTextNode("Split Words:"));
  outputDiv.appendChild(splitWordsTextArea);
  outputDiv.appendChild(document.createElement("br"));

  if (camelCaseSelected) {
    // Convert to camelCase
    let camelCasedString = splittedString
      .map((word, index) => {
        return index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");

    // Create a text area for camelCase output
    const camelCaseTextArea = document.createElement("textarea");
    camelCaseTextArea.value = camelCasedString;
    camelCaseTextArea.className =
      "border rounded p-2 mb-2 w-full min-h-10 font-medium";
    outputDiv.appendChild(document.createTextNode("camelCase:"));
    outputDiv.appendChild(camelCaseTextArea);
    outputDiv.appendChild(document.createElement("br"));
  }

  if (pascalCaseSelected) {
    // Convert to PascalCase
    let pascalCasedString = splittedString
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");

    // Create a text area for PascalCase output
    const pascalCaseTextArea = document.createElement("textarea");
    pascalCaseTextArea.value = pascalCasedString;
    pascalCaseTextArea.className =
      "border rounded p-2 mb-2 w-full min-h-10 font-medium";
    outputDiv.appendChild(document.createTextNode("PascalCase:"));
    outputDiv.appendChild(pascalCaseTextArea);
    outputDiv.appendChild(document.createElement("br"));
  }

  if (snakeCaseSelected) {
    // Convert to snake_case
    let snakeCasedString = splittedString
      .map((word) => word.toLowerCase())
      .join("_");

    // Create a text area for snake_case output
    const snakeCaseTextArea = document.createElement("textarea");
    snakeCaseTextArea.value = snakeCasedString;
    snakeCaseTextArea.className =
      "border rounded p-2 mb-2 w-full min-h-10 font-medium";
    outputDiv.appendChild(document.createTextNode("snake_case:"));
    outputDiv.appendChild(snakeCaseTextArea);
    outputDiv.appendChild(document.createElement("br"));
  }

  if (kebabCaseSelected) {
    // Convert to kebab-case
    let kebabCasedString = splittedString
      .map((word) => word.toLowerCase())
      .join("-");

    // Create a text area for kebab-case output
    const kebabCaseTextArea = document.createElement("textarea");
    kebabCaseTextArea.value = kebabCasedString;
    kebabCaseTextArea.className =
      "border rounded p-2 mb-2 w-full min-h-10 font-medium";
    outputDiv.appendChild(document.createTextNode("kebab-case:"));
    outputDiv.appendChild(kebabCaseTextArea);
    outputDiv.appendChild(document.createElement("br"));
  }
});
