import Test from "../Test_Pages/Test";
import { render,screen } from "@testing-library/react";

test("Testing Simple Text",()=>{
    render(<Test/>)

    const text=screen.getByText("Hi Suchith");
      expect(text).toBeInTheDocument();
})