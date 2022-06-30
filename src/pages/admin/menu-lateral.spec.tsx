import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MenuLateral from './menu-lateral'

describe('MenuLateral - Unit Tests', () => {

    it('MenuLateral must render all their components', () => {
        // Given Home is rendered
        render(<MenuLateral />);
        
        //Then all their components must be rendered too
        expect(screen.getByTestId('titulo')).toBeInTheDocument();
        expect(screen.getByTestId('titulo')).toBeVisible();
        expect(screen.getByTestId('listaContainer')).toBeInTheDocument();
        expect(screen.getByTestId('listaContainer')).toBeVisible();
        expect(screen.getByText('Filme')).toBeInTheDocument();
        expect(screen.getByText('Filme')).toBeVisible();
        expect(screen.getByText('Diretor')).toBeInTheDocument();
        expect(screen.getByText('Diretor')).toBeVisible();
        expect(screen.getByText('Roteirista')).toBeInTheDocument();
        expect(screen.getByText('Roteirista')).toBeVisible();
        expect(screen.getByText('Pôster')).toBeInTheDocument();
        expect(screen.getByText('Pôster')).toBeVisible();
        expect(screen.getByText('Arquivo')).toBeInTheDocument();
        expect(screen.getByText('Arquivo')).toBeVisible();
        expect(screen.getByText('País')).toBeInTheDocument();
        expect(screen.getByText('Gênero')).toBeInTheDocument();
    });
});