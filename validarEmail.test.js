const validarEmail = require("./validarEmail");

test("Validar un email válido", () => {
  const email = "usuario@example.com";
  expect(validarEmail(email)).toBe(true);
});

test("Validar un email inválido", () => {
  const email = "correo-invalido";
  expect(validarEmail(email)).toBe(false);
});
