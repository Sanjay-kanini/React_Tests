import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Employee_post from './Employee_post';
describe('Employee_post Component', () => {
  it('updates state on input change', () => {
    const { getByLabelText } = render(<Employee_post />);
    const nameInput = getByLabelText('Employee Dep');
    fireEvent.change(nameInput, { target: { value: 'Developer' } });
    expect(nameInput.value).toBe('Developer');
  });
  it('submits form data', () => {
    const { getByLabelText, getByText } = render(<Employee_post />);
    const nameInput = getByLabelText('Employee Name');
    const locationInput = getByLabelText('Employee Dep');
   
    const submitButton = getByText('Create');
    fireEvent.change(nameInput, { target: { value: 'SanjayGuru' } });
    fireEvent.change(locationInput, { target: { value: 'HR' } });
   
    fireEvent.click(submitButton);
});
});