const text = document.getElementById("inputText");
const secondText = document.getElementById("inputSecondText");
const firstDiv = document.createElement("div");
const secondDiv = document.createElement("div");
firstDiv.id = "firstDiv";
secondDiv.id = "secondDiv";

text.addEventListener("focus", function () {
  text.insertAdjacentElement("afterend", firstDiv);
  text.placeholder = "клікни за межами текстового поля і зникне червоний блок";
});

text.addEventListener("blur", function () {
  text.placeholder = "";
  firstDiv.remove();
});

secondText.addEventListener("mouseover", function () {
  secondText.insertAdjacentElement("afterend", secondDiv);
  secondText.placeholder = "забери курсор і зникне червоний блок";
});

secondText.addEventListener("mouseout", function () {
  secondText.placeholder = "";
  secondDiv.remove();
});
