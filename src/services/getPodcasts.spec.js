import { getPodcasts } from "./getPodcasts";

describe("test suite getPodcasts service", () => {
  test("should resolve the promise", async () => {
    const data = await getPodcasts();
    expect(data[0].id).toBe(1);
  });
});
