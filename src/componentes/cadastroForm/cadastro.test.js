import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CadastroForm from "./cadastroForm";
import { CategoriaProvider } from "../categoriaContext/categoriaContext";


describe("<cadastroForm/>", () => {
    let mockOnSubmit, botao;
    
    beforeEach(() => {
        mockOnSubmit = jest.fn();
        render(
            <CategoriaProvider>
            <CadastroForm onSubmit={mockOnSubmit}/>,
            </CategoriaProvider>,
            {wrapper: BrowserRouter}
        );
       
        botao = screen.getByText("Cadastrar Produto");
       
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
    
    it("Deve chamar a função 'OnSubmit' com sucesso", () => {
        fireEvent.click(botao);

        expect(mockOnSubmit).toHaveBeenCalled();
    })

})