import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdicionarBotao from "./addButton";

describe("<AdicionarBotao/>", () => {
    let botao, handleClick;
    
    beforeEach(() => {
        handleClick = jest.fn();
        render(<AdicionarBotao onClick={handleClick}/>)
        botao = screen.getByText('Cadastrar novo produto');
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    
    it("Deve renderizar o componente com sucesso", () => {
        expect(botao).toBeTruthy();
    })
    
    it("Deve chamar a função com sucesso", async () => {
        await userEvent.click(botao);
        expect(handleClick).toHaveBeenCalled();
    })

})