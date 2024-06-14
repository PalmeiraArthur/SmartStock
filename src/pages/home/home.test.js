import { render, screen } from "@testing-library/react";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";
import { CategoriaProvider } from "../../componentes/categoriaContext/categoriaContext";


describe("<Home/>", () => {
    let produtosFixture
    
    beforeEach(() => {
        produtosFixture = [
            {
                nomeProduto: "Leite Itambé", 
                dataEntrada: new Date().toISOString().slice(0, 10),
                validade: "2024-06-13",
                categoria: "Leite"
            },
            {
                nomeProduto: "Ovo 12u", 
                dataEntrada: new Date().toISOString().slice(0, 10),
                validade: "2024-06-13",
                categoria: "Ovo"
            }
        ]
        
        localStorage.setItem("produtos", JSON.stringify(produtosFixture));

        render(
            <CategoriaProvider>
                <Home/>
            </CategoriaProvider>,
            {wrapper: BrowserRouter}
        );
    })

    afterEach(() => {
        localStorage.clear();
    })
    
    it("Deve renderizar o componente de botão de cadastro", () => {
        const botaoCadastro = screen.getByText('Cadastrar novo produto');
        expect(botaoCadastro).toBeTruthy();
    })
    
    it("Deve renderizar lista de produtos com nome", async () => {
        for(const produtosFixtureItem of produtosFixture) {
            const [produtoComNome] = screen.getAllByText(produtosFixtureItem.nomeProduto);
            expect(produtoComNome).toBeTruthy();
        }
    })
    it("Deve renderizar lista de produtos com categoria", async () => {
        for(const produtosFixtureItem of produtosFixture) {
            const [produtoComCategoria] = screen.getAllByText(produtosFixtureItem.categoria);
            expect(produtoComCategoria).toBeTruthy();
        }
    })

})