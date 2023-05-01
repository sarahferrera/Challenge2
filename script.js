const summitButton = document.querySelector(".summitButton");
const boxThanks = document.querySelector(".boxThanks");
const box = document.querySelector(".box");

const btns = document.querySelectorAll(".btn")

let selection = document.querySelector(".selection")



summitButton.addEventListener("click", () => {
    boxThanks.classList.remove("hidden");
    box.classList.add("hidden")

})

btns.forEach((boton) => {
    boton.addEventListener("click", function () {
        selection.innerHTML = boton.textContent;
        console.log(selection.textContent);
        boton.classList.add("btnSelection");
    })
})
