import Body from "../Body";
import { render, screen, act } from "@testing-library/react";
import resList from "./MockData/restList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

it("Should load search card from restautent", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const search = screen.findByText("search");
  exepect(search).toBeInTheDocument();
});
