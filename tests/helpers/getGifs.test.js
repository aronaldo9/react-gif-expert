/* eslint-disable no-undef */
import { getGifs } from "../../src/helpers/getGifs";

// eslint-disable-next-line no-undef
describe("Pruebas en getGifs()", () => {
  // eslint-disable-next-line no-undef
  test("debe de retornar un arreglo de gifs ", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
