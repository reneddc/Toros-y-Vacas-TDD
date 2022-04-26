import TorosyVacas from "./torosVacas"

describe("Toros y Vacas", () => {
  let torosVacas = new TorosyVacas("");

  //HISTORIA DE USUARIO 1
  it("Debería responder <GANASTE> si se adivina el código secreto", () => {
    torosVacas.definirCodigoSecreto("3");
    expect(torosVacas.adivinar("3")).toEqual("GANASTE");
  });

  it("Debería responder <NO> si no se adivina el código secreto", () => {
    torosVacas.definirCodigoSecreto("3");
    expect(torosVacas.adivinar("4")).toEqual("NO");
  });

  //HISTORIA DE USUARIO 2
  it("Si el código secreto es <12> y el intento es <2> debería retornar <*>", () => {
    torosVacas.definirCodigoSecreto("12");
    expect(torosVacas.adivinar("2")).toEqual("*");
  });

  it("Si el código secreto es <12> y el intento es <21> debería retornar <**>", () => {
    torosVacas.definirCodigoSecreto("12");
    expect(torosVacas.adivinar("21")).toEqual("**");
  });

  //HISTORIA DE USUARIO 3
  it("Si el código secreto es <12> y el intento es <1> debería retornar <!>", () => {
    torosVacas.definirCodigoSecreto("12");
    expect(torosVacas.adivinar("1")).toEqual("!");
  });

});




