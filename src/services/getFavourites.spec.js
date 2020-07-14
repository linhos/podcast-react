import { getFavourites } from "./getFavourites";

describe("test suite get favourites service", () => {
  it("should return data from api", async () => {
    const EXPECTED_RESULT = ["1", "2", "3"];
    const service = {
      getFavourites: jest.fn().mockReturnValue(EXPECTED_RESULT),
    };

    const result = await service.getFavourites();
    expect(result).toBe(EXPECTED_RESULT);
  });

  it("should return a error if fails ", async () => {
    const EXPECTED_ERROR = ["error1"];
    const service = {
      getFavourites: jest.fn().mockReturnValue(EXPECTED_ERROR),
    };
    const result = await service.getFavourites();
    expect(result).toBe(EXPECTED_ERROR);
  });
});
