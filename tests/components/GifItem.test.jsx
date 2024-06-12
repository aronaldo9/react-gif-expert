/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

// eslint-disable-next-line no-undef
describe("Pruebas en <GifItem.jsx />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con la url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
