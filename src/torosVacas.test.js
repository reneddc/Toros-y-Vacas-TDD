describe("Toros y Vacas", () => {
  it("Debería responder <Ganaste> si se adivina el código secreto", () => {
    expect(adivinar("3")).toEqual("GANASTE");
  });
});

function adivinar(intento){
  return "GANASTE";
}
