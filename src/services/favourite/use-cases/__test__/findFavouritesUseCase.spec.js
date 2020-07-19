import findFavouritesUseCase from "../findFavouritesUseCase";

describe("test suite for find favourites use case", () => {
  test("`return favourites successfully", async () => {
    const expectedResult = ["fav1", "fav2"];

    const mockRepository = {
      find: jest.fn().mockResolvedValue(expectedResult),
    };

    const findUseCase = findFavouritesUseCase(mockRepository);
    const result = await findUseCase();

    expect(result.favourites).toEqual(expectedResult);
  });
});
