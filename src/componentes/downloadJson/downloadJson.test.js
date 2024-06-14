import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DownloadJsonButton from './downloadJson';

describe('<DownloadJsonButton />', () => {
  let botao, espiaoDeElemento;

  beforeEach(() => {
    localStorage.setItem('produtos', JSON.stringify([{ id: 1, name: 'Produto 1' }]));
    render(<DownloadJsonButton />);
    botao = screen.getByText("Baixar Dados em JSON");
    espiaoDeElemento = jest.spyOn(document, 'createElement');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("Deve criar a tag 'a' corretamente", () => {

    fireEvent.click(botao);

    expect(espiaoDeElemento).toHaveBeenCalledWith('a');

  });
});
