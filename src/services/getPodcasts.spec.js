import { getPodcasts } from "./getPodcasts";


jest.mock('./getPodcasts');

describe("test suite getPodcasts service", () => {
  
  test("should resolve the promise", async () => {

    const EXPECTED_RESULT = [{id: 1, name: 'name'}, {id:2, name: 'name2'}];

    const mockFetch = {
      getPodcasts : getPodcasts.mockResolvedValue(EXPECTED_RESULT)
    }
    const result = await mockFetch.getPodcasts();

    expect(result).toBe(EXPECTED_RESULT);

  });
});
