const summitButton = document.querySelector(".summitButton");
const boxThanks = document.querySelector(".boxThanks");
const box = document.querySelector(".box");

const btns = document.querySelectorAll(".btn")

let selection = document.querySelector (".selection")

console.log(btns);
console.log(selection)




summitButton.addEventListener ("click", () =>{
    boxThanks.classList.remove ("hidden");
    box.classList.add ("hidden")

})

btns.forEach((boton) => {
    boton.addEventListener("click", function() {
      console.log(`Haz hecho clic en el botón ${boton.textContent}`);
      console.log(selection.textContent);
      selection.innerHTML = boton.textContent
      console.log(selection.textContent);
      })
    
  });

