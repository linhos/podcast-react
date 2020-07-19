import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Favourites from "../index.tsx";

describe("test suite for Favourites page", () => {
  const setupFav = () => render(<Favourites />);

  it("should render", async () => {
    const { findAllByTestId } = setupFav();

    expect(await findAllByTestId("FavouriteTile")).toHaveLength(2);
  });
});
