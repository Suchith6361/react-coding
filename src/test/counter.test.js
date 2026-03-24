import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Test_Pages/counter";

test("increments count on button click", () => {
  render(<Counter />);

  const button = screen.getByText("Increment");
  fireEvent.click(button);

expect(screen.getByText("Count:1")).toBeInTheDocument();
});
