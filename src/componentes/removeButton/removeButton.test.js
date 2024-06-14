import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RemoveButton from "./removeButton";

describe("<removeButton/>", () => {
    let botao, handleClick;
    
    beforeEach(() => {
        handleClick = jest.fn();
        render(<RemoveButton onRemove={handleClick}/>)
        botao = screen.getByText('Retirar do estoque');
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