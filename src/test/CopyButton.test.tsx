import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { CopyButton } from '../components/ui/CopyButton';

describe('CopyButton Component', () => {
  it('should render copy button with accessible label', () => {
    render(<CopyButton textToCopy="OAB/SP 489.578" feedbackText="Copiado!" />);
    const button = screen.getByRole('button', { name: /copiar/i });
    expect(button).toBeInTheDocument();
  });

  it('should copy text to clipboard on click and show feedback', async () => {
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(<CopyButton textToCopy="5515996091651" feedbackText="Número Copiado!" />);
    const button = screen.getByRole('button', { name: /copiar/i });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('5515996091651');
    expect(await screen.findByText('Número Copiado!')).toBeInTheDocument();
  });
});
