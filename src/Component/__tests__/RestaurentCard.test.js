import Restaurent, { PromotedRestaurent } from "../Restaurent";
import restaurentMock from "./MockData/restaurentMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should load restaurent card Component with  name of restautent", () => {
  // const vale = render(<Restaurent resData={restaurentMock} />);
  // console.log(vale);
  // const restTitle = screen.findByText("Chinese");
  // expect(restTitle).toBeInTheDocument();
});

// it("Should load online restaurent card Component with  online status of restautent", () => {
//   render(<PromotedRestaurent resData={restaurentMock} />);
//   const restTitle = screen.findByText("Chinese Wok");
//   exepect(restTitle).toBeInTheDocument();
// });
