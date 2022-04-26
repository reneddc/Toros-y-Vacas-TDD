import TorosyVacas from "./torosVacas"

//Forms
const codigoForm = document.querySelector("#codigo-form");
const intentoForm = document.querySelector("#intento-form");

//Inputs
const codigoInput = document.querySelector("#codigo");
const intentoInput = document.querySelector("#intento");

//Resultados
const respuestaDiv = document.querySelector("#respuesta-div");

let torosVacas = "";

codigoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const codigoSecreto = codigoInput.value;
  torosVacas = new TorosyVacas();

});

intentoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const intento = intentoInput.value;
  const respuesta = torosVacas.adivinar(intento);

  let respuestaHTML = `<p> ${respuesta} </p>`;
  respuestaDiv.innerHTML = respuestaHTML;
});
