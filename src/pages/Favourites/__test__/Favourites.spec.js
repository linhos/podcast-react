import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Favourites from "../index.tsx";

describe("test suite for Favourites page", () => {
  const setupFav = () => render(<Favourites />);

  it("should render", async () => {
    const { findAllByTestId, getByText } = setupFav();

    const titleElement = getByText(/Favoritos/i);
    
    expect(titleElement).toBeInTheDocument();
    expect(await findAllByTestId("FavouriteTile")).toHaveLength(200);
  });
});
