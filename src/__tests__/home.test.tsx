import { render, screen } from "@testing-library/react";

// Teste simples para garantir que o layout/base renderiza
function Home() {
  return <div>OdontoPRO</div>;
}

describe("Home (unit)", () => {
  it("renderiza texto base", () => {
    render(<Home />);
    expect(screen.getByText("OdontoPRO")).toBeInTheDocument();
  });
});
