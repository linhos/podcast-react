import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchForm } from "../../SearchForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders learn react link", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <SearchForm />
    </Router>
  );

  const linkElement = getByText(/Buscar/i);
  expect(linkElement).toBeInTheDocument();
});

test("search form could be used", async () => {
  const { container } = render(<SearchForm />);
  const input = await screen.findByRole("textbox");
});
