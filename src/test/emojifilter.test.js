import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Searching Emoji", () => {
  let inputemoji;
  beforeEach(() => {
    render(<App />);
    inputemoji = screen.getByLabelText("inputTest");
  });
  test("emoji filter", () => {
    const value = "Grinning";
    userEvent.type(inputemoji, value);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
// input alanında aranan isimle ilgili eşleşen emojiyi test eden kod
