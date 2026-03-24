import { render, screen, waitFor } from "@testing-library/react";
import Users from "../Test_Pages/user";
import { Axios } from "axios";

jest.mock("axios");

test("renders users from api", async () => {
  axios.get.mockResolvedValue({
    data: [{ id: 1, name: "Suchith" }]
  });

  render(<Users />);

  await waitFor(() => {
    expect(screen.getByText("Suchith")).toBeInTheDocument();
  });
});
