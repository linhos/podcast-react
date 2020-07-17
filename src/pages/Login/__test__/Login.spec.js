import React from "react";
import { Router } from "react-router-dom";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";

import Login from "../index";
import * as loginUser from "../../../services/loginUser";

describe("test suite for Login Component", () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockFunctions = {
    handleLoginSubmit: jest.fn(),
  };

  it("render the form correctly", () => {
    const { getByLabelText, getByText } = render(<Login />);

    const usernameInput = getByLabelText("Usuario");
    expect(usernameInput).toHaveAttribute("type", "text");
    expect(usernameInput).not.toHaveValue();

    const passwordInput = getByLabelText("Contraseña");
    expect(passwordInput).toHaveAttribute("type", "password");

    const buttonSubmit = getByText("Inicia sesión");
    expect(buttonSubmit).toHaveValue("Inicia sesión");
  });

  it("submit form when fields are empty", async () => {
    const { getByLabelText, container, findByTestId } = render(<Login />);

    const form = container.querySelector("form");
    const usernameInput = getByLabelText("Usuario");
    const passwordInput = getByLabelText("Contraseña");

    expect(mockFunctions.handleLoginSubmit).toHaveBeenCalledTimes(0);

    fireEvent.blur(usernameInput);
    fireEvent.blur(passwordInput);

    fireEvent.submit(form);

    expect((await findByTestId("email-errors")).innerHTML).toBe(
      "El usuario es obligatorio."
    );
    expect((await findByTestId("password-errors")).innerHTML).toBe(
      "La contraseña es obligatoria."
    );
  });

  it("renders", () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("redirect user when logged in is correct", async () => {
    const mockUserData = {
      username: "user@fake.com",
      password: "123456",
    };

    const loginUserActionMock = jest.spyOn(loginUser, "default");

    const history = createMemoryHistory();
    const { container, getByLabelText, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );
    const form = container.querySelector("form");
    const emailInput = getByLabelText("Usuario");
    const passwordInput = getByLabelText("Contraseña");
    const submitButton = getByText("Inicia sesión");

    expect(submitButton).toHaveValue("Inicia sesión");

    await waitFor(() => {
      fireEvent.change(emailInput, {
        target: { value: mockUserData.username },
      });
      fireEvent.change(passwordInput, {
        target: { value: mockUserData.password },
      });
      fireEvent.submit(form);

      expect(loginUserActionMock).toHaveBeenCalledWith(
        "user@fake.com",
        "123456"
      );

      expect(loginUserActionMock).toHaveBeenCalledTimes(1);

      expect(history.location.pathname).toBe("/dashboard");
    });
  });
});
