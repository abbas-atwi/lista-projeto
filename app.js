const txtInput = document.querySelector("input");
const btn = document.querySelector(".section-texto a");
const sectionBody = document.querySelector(".section-lista-produto");
const sectionlista = document.querySelectorAll(".section-box");
function addCardCreate(classe, txt) {
  const card = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = txt;
  card.append(h1);
  card.classList.add(classe);

  sectionBody.appendChild(card);
}
function valueInput() {
  if (txtInput.value && txtInput.value !== " ") {
    addCardCreate("section-box", txtInput.value);
    txtInput.value = "";
  } else {
    txtInput.value = "";
  }
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  valueInput();
});
