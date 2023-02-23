import { fireEvent, render, screen } from '@testing-library/react';
import { assert, describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('should draw a circle', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('canvas'));
    expect(screen.getAllByTestId('circle').length).toBe(1);
  });
});
