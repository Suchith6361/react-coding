import { render, screen, fireEvent } from "@testing-library/react";
import NameInput from "../Test_Pages/nameInput";

test("updates text when user types", () => {
  render(<NameInput />);

  const input = screen.getByPlaceholderText("Enter name");
  fireEvent.change(input, { target: { value: "Suchi Bro" } });

  expect(screen.getByText("Suchi Bro")).toBeInTheDocument();
});
