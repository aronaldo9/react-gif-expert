/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

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

  test("debe de llamar onNewCategory si el inout tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar al onNewCategory si el input está vacío", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
