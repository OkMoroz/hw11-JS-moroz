const text = document.getElementById("inputText");
const myDiv = document.createElement("div");
myDiv.id = "myDiv";

text.addEventListener("mouseover", function () {
  text.insertAdjacentElement("afterend", myDiv);
  text.placeholder = "забери курсор і зникне червоний блок";
});

text.addEventListener("mouseout", function () {
  text.placeholder = "";
  myDiv.remove();
});
