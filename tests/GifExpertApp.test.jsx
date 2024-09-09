/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

// Mock de componentes dependientes
jest.mock("../src/components/AddCategory", () => () => (
  <div>AddCategory Mock</div>
));
jest.mock("../src/components/GifGrid", () => ({ category }) => (
  <div>GifGrid Mock: {category}</div>
));

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorías", () => {
    const categories = ["One Punch", "Dragon Ball"];
    render(<GifExpertApp defaultCategories={categories} />);

    // Verificar que los elementos están en el documento
    expect(screen.getByText("GifExpertApp")).toBeInTheDocument();
    expect(screen.getByText("AddCategory Mock")).toBeInTheDocument();

    // Verificar que se muestran las categorías
    expect(screen.getByText("GifGrid Mock: One Punch")).toBeInTheDocument();
    expect(screen.getByText("GifGrid Mock: Dragon Ball")).toBeInTheDocument();
  });
});
