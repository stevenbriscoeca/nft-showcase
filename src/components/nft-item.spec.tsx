import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NftItem from "./ntf-item";

describe("nft-item", () => {
  it(" should have correct name when setting the name prop", async () => {
    // ARRANGE
    render(<NftItem name="lol"></NftItem>);

    // ACT
    const element = screen.getByTestId("name");

    // ASSERT
    expect(element).toHaveTextContent("lol");
  });

  it("should have correct image when setting the image prop", async () => {
    // ARRANGE
    render(<NftItem image="lmao.gif"></NftItem>);

    // ACT
    const imageSrc = screen.getByTestId("image").getAttribute("src");

    // ASSERT
    expect(imageSrc).toEqual("lmao.gif");
  });

  it("should have correct url when setting the url prop", async () => {
    // ARRANGE
    render(<NftItem url="https://opensea.io/"></NftItem>);

    // ACT
    const imageSrc = screen.getByTestId("url").getAttribute("href");

    // ASSERT
    expect(imageSrc).toEqual("https://opensea.io/");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <NftItem name="lol" url="https://opensea.io/" image="lmao.gif"></NftItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
