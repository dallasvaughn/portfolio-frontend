import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';
import userEvent from '@testing-library/user-event';

describe('ContactForm', () => {
  it('renders the contact form', () => {
    render(<ContactForm />);

    const text = screen.getByText(
      'If you have any questions for me, want to discuss any work opportunities, or simply want to chat about something, feel free to use this form to get in touch with me!'
    );

    expect(text).toBeInTheDocument();
  });

  it('displays the values the user enters into the form fields', async () => {
    render(<ContactForm />);

    const name = screen.getByPlaceholderText('Name');
    const email = screen.getByPlaceholderText('Email');
    const message = screen.getByPlaceholderText('Message');

    await userEvent.type(name, 'Jane Doe');
    await userEvent.type(email, 'test@test.com');
    await userEvent.type(message, 'Testing input');

    expect(name).toHaveValue('Jane Doe');
    expect(email).toHaveValue('test@test.com');
    expect(message).toHaveValue('Testing input');
  });
});
