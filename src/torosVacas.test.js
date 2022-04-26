import TorosyVacas from "./torosVacas"

describe("Toros y Vacas", () => {
  let torosVacas = new TorosyVacas();

  it("Debería responder <Ganaste> si se adivina el código secreto", () => {
    expect(torosVacas.adivinar("3")).toEqual("GANASTE");
  });
});




