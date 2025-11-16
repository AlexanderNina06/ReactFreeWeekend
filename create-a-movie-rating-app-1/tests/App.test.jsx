import { render, screen } from "../test-utils/custom-render.jsx";
import { expect, describe, it } from "vitest";
import App from "../src/App.jsx";

describe("Movie App", () => {
  it("should render the main app component", async () => {
    render(<App />);
    expect(screen.getByText("The Godfather")).toBeInTheDocument();
  });
});
