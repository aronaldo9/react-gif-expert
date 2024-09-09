/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("getGifs debe devolver un array de imágenes", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
  });

  test("debe de retornar un arreglo de imágenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 3000 }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
