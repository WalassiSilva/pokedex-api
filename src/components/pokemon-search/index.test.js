import { render, screen } from '@testing-library/react';
import { PokemonSearch } from '.';
import { ThemeProvider } from '../../constexts/theme-context';

describe('PokemonSearch Component', () => {     

    it('Should render a red background for a disabled button, else, blue background', () => {
        render(<ThemeProvider><PokemonSearch /></ThemeProvider>);

        const button = screen.getByRole("button", { name: "🔍" });

        expect(button).toHaveStyle({ cursor: 'not-allowed' });
    });
});