import { render, screen } from "@testing-library/react";
import FetchProducts from "./components/FetchProducts";

test("renders Supplier Name", () => {
  render(<FetchProducts />);
  const linkElement = screen.getByText("FREENOW", { exact: false });
  expect(linkElement).toBeInTheDocument();
});
