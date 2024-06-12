/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    // Obtener el input por su rol
    const input = screen.getByRole("textbox");

    // Simular el cambio de valor
    fireEvent.input(input, { target: { value: "Saitama" } });

    // Asegurarse de que el valor del input haya cambiado
    expect(input.value).toBe("Saitama");
  });
});
