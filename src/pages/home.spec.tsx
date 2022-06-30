import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './home'

describe('Home - Unit Tests', () => {

    it('Home must render all their components', () => {
        // Given Home is rendered
        render(<Home />);
        
        //Then all their components must be rendered too
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('header')).toBeVisible();
        expect(screen.getByTestId('titulo')).toBeInTheDocument();
        expect(screen.getByTestId('titulo')).toBeVisible();
        expect(screen.getByTestId('pesquisa')).toBeInTheDocument();
        expect(screen.getByTestId('pesquisa')).toBeVisible();
        expect(screen.getByTestId('filme-cards-container')).toBeInTheDocument();
        expect(screen.getByTestId('filme-cards-container')).toBeVisible();
    });
});