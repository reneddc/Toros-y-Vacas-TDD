import TorosyVacas from "./torosVacas"

describe("Toros y Vacas", () => {
  let torosVacas = new TorosyVacas("");

  it("Debería responder <GANASTE> si se adivina el código secreto", () => {
    torosVacas.definirCodigoSecreto("3");
    expect(torosVacas.adivinar("3")).toEqual("GANASTE");
  });

  it("Debería responder <NO> si no se adivina el código secreto", () => {
    torosVacas.definirCodigoSecreto("3");
    expect(torosVacas.adivinar("4")).toEqual("NO");
  });
});




