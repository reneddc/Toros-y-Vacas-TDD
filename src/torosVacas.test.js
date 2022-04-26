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
    expect(torosVacas.adivinar("8")).toEqual("NO");
  });

  //HISTORIA DE USUARIO 2
  it("Si el código secreto es <19> y el intento es <9> debería retornar <*>", () => {
    torosVacas.definirCodigoSecreto("19");
    expect(torosVacas.adivinar("9")).toEqual("*");
  });

  it("Si el código secreto es <19> y el intento es <91> debería retornar <**>", () => {
    torosVacas.definirCodigoSecreto("19");
    expect(torosVacas.adivinar("91")).toEqual("**");
  });

  //HISTORIA DE USUARIO 3
  it("Si el código secreto es <12> y el intento es <1> debería retornar <!>", () => {
    torosVacas.definirCodigoSecreto("12");
    expect(torosVacas.adivinar("1")).toEqual("!");
  });

  it("Si el código secreto es <123> y el intento es <143> debería retornar <!!>", () => {
    torosVacas.definirCodigoSecreto("123");
    expect(torosVacas.adivinar("143")).toEqual("!!");
  });

  it("Si el código secreto es <423> y el intento es <143> debería retornar <*!>", () => {
    torosVacas.definirCodigoSecreto("423");
    expect(torosVacas.adivinar("143")).toEqual("*!");
  });

  //HISTORIA DE USUARIO 4
  it("Si el código secreto es <12> y el intento es <3> debería retornar <#>", () => {
    torosVacas.definirCodigoSecreto("12");
    expect(torosVacas.adivinar("0")).toEqual("#");
  });

});




