import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import emojiList from "../emojiList.json";
describe("emoji-list-render", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Emoji list  rendering", () => {
    const emojilist = emojiList.slice(0, 19); 
    emojilist.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
// emojiList.json dosyasının render edilip ekranda gözüküp gözükmediğini kontrol eden test
