import { Quantity } from '@medplum/core';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { QuantityInput } from './QuantityInput';

describe('QuantityInput', () => {

  test('Renders', () => {
    render(<QuantityInput name="a" defaultValue={{ value: 123, unit: 'mg' }} />);
    expect(screen.getByDisplayValue('123')).not.toBeUndefined();
    expect(screen.getByDisplayValue('mg')).not.toBeUndefined();
  });

  test('Renders undefined value', () => {
    render(<QuantityInput name="a" />);
    expect(screen.getByPlaceholderText('Value')).not.toBeUndefined();
    expect(screen.getByPlaceholderText('Unit')).not.toBeUndefined();
  });

  test('Set value', async () => {
    let lastValue: Quantity | undefined = undefined;

    render(<QuantityInput name="a" onChange={value => lastValue = value} />);

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Value'), { target: { value: '123' } });
    });

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Unit'), { target: { value: 'mg' } });
    });

    expect(lastValue).not.toBeUndefined();
    expect(lastValue).toMatchObject({ value: 123, unit: 'mg' });
  });

});