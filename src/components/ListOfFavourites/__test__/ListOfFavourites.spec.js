import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ListOfFavourites } from "../index";

describe("test suite for ListOfFavourites", () => {
  test("renders learn react link", () => {
    const useFavouritesMock = {
      favourites: [],
      loading: true,
    };

    const { getByText } = render(
      <ListOfFavourites
        loading={useFavouritesMock.loading}
        favourites={useFavouritesMock.favourites}
      />
    );
    const linkElement = getByText(/Favoritos/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('show cargando... when the query is loading', async ()=> {
    const useFavouritesMock = {
      favourites: [],
      loading: true,
    };

    const { queryByText } = render(
      <ListOfFavourites
        loading={useFavouritesMock.loading}
        favourites={useFavouritesMock.favourites}
      />
    );

    await waitFor(() => {
      expect(queryByText('cargando ...')).not.toBeNull();
    });

  });

  test("show cargando... text while waiting for promise to resolve", () => {
    const useFavouritesMock = {
      favourites: [],
      loading: true,
    };

    const { container } = render(
      <ListOfFavourites
        loading={useFavouritesMock.loading}
        favourites={useFavouritesMock.favourites}
      />
    );

    expect(container.innerHTML).toMatch("<h6>cargando ...</h6>");
  });

  test("show list of favourites when loading is false", async () => {
    const useFavouritesMock = {
      favourites: [{ username: "titulo1" }, { username: "titulo2" }],
      loading: false,
    };
    const { queryByText } = render(
      <ListOfFavourites
        loading={useFavouritesMock.loading}
        favourites={useFavouritesMock.favourites}
      />
    );

    await waitFor(() => {
      expect(queryByText('cargando ...')).toBeNull();
    })
  });
});
