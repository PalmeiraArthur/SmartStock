import React from 'react';
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import LoginPage from './login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('<LoginPage />', () => {
  let usuarioInput, senhaInput, botao, mockNavigate, mockAlert;

  beforeEach(() => {
    mockNavigate = jest.fn();
    mockAlert = jest.fn();

    window.alert = mockAlert;

    jest.mock("react-router-dom", () => ({
        ...(jest.requireActual("react-router-dom")),
        useNavigate: () => mockNavigate,
      }));  

       render(<LoginPage/>, {wrapper: BrowserRouter})

    usuarioInput = screen.getByPlaceholderText("Usuario:");
    senhaInput = screen.getByPlaceholderText("Senha:");

    botao = screen.getByText('Entrar');

  });

  afterEach(() => {
    jest.clearAllMocks();
  })

   it("Deve entrar com sucesso no sistema", async () => {

        act(() => {
            userEvent.type(usuarioInput, "usuario123");
            userEvent.type(senhaInput, "senha123");    
    
            fireEvent.click(botao);    
        })

        waitFor(() => {
        expect(mockNavigate).toHaveBeenCalled();
        })
      });

      it("Deve receber o alert ao tentar entrar no sistema com login inválido", () => {
        act(() => {
            userEvent.type(usuarioInput, 'usuario123');
            userEvent.type(senhaInput, 'senha123');
      
            fireEvent.click(botao);
          });

        waitFor(() => {
        expect(mockAlert).toHaveBeenCalled();
        })
      })
});
