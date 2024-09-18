import { render, screen } from '@testing-library/react';
import { App } from './App';

const sum = (n1: number, n2: number) => {
    return n1 + n2;
}

const media = (n1: number, n2: number) => {
    const result = (n1 + n2) / 2;

    return result >= 7 ? "Aprovado" : "Reprovado";
}

describe("Frist test app component", () => {
    it("should adds 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7);
    })

    it("should calculate the avarage and return the result", () => {
        expect(media(5, 7)).toBe("Reprovado");
        expect(media(7, 8)).toBe("Aprovado");
    })
});

describe("App component", () => {
    it("should render app component", () => {
        render(<App/>);
        screen.getByText("tests works!");
    });
});