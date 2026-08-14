import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const FaultyComponent: React.FC = () => {
  throw new Error('Crash for test');
};

describe('ErrorBoundary Component', () => {
  it('should render children normally when there is no error', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child-content">Conteúdo Seguro</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child-content')).toHaveTextContent('Conteúdo Seguro');
  });

  it('should catch error and display fallback UI with support contacts', () => {
    // Silence error output during test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <FaultyComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Ocorreu uma instabilidade pontual/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /recarregar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
