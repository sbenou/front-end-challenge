import "../../constants/matchMedia";
import { render, screen } from "@testing-library/react";
import RealEstateItem from "./index";
import { MemoryRouter } from "react-router-dom";

const mockItem = {
  id: 7,
  image:
    "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
  numberOfBedroom: 2,
  address: "177A Bleecker Street in Manhattan",
  postCode: "12000",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  askingPrice: "$120,000",
  status: "active",
};

const mockClickExpire = jest.fn();

describe("Real Estate Item", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <RealEstateItem item={mockItem} onClickSetToExpired={mockClickExpire} />
      </MemoryRouter>
    );
  });
});
// tests realestateitem component
