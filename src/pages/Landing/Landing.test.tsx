import "../../constants/matchMedia";
import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Landing page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <Landing />
      </MemoryRouter>
    );
  });

  it("should render normally", () => {
    expect(screen.getByTestId("landing-test-id")).toBeInTheDocument();
  });
});
// general test scenario: check if page with landing test id is rendered
