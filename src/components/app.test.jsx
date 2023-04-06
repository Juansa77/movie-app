import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it } from 'vitest';

import App from '../App';
import { createTheme } from '../style/createTheme';
import { theme } from '../style/theme';

/**
 * @vitest-environment jsdom
 */

describe('App.jsx', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={createTheme(theme)}>
        <App />
      </ThemeProvider>,
    );
  });

  it('Vamos a ver si App renderiza bien', () => {
    screen.debug();
  });
});
