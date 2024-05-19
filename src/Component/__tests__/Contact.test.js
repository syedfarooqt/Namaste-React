import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";
test("Should Render Contact Page ", async () => {
  render(<About />);
  const contactText = await screen.getByText("About US");
  expect(contactText).toBeInTheDocument();
});
