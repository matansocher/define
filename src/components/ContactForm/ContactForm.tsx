import axios from 'axios';
import { FormEvent, useRef, useState } from 'react';
import { CONTACT_ENDPOINT, MMPS_BASE_URL } from '@core/config';
import { getErrorMessage } from '@core/utils';
import './ContactForm.scss';

type Props = {}

type FormValues = {
  email: string;
};

export const ContactForm = ({}: Props) => {
  const [showErrorText, setShowErrorText] = useState<string | null>(null);
  const [showSuccessText, setShowSuccessText] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);

  const getFormValues = (): FormValues => ({
    email: emailRef.current?.value.trim() || '',
  });

  const isFormValid = (): boolean => {
    const formValues = getFormValues();
    return Object.values(formValues).every(value => Boolean(value.trim()));
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setShowSuccessText(false);
    setShowErrorText(null);

    if (!isFormValid()) {
      setShowErrorText('Email is required');
      emailRef.current?.focus();
      return;
    }

    try {
      const body = getFormValues();
      await axios.post(`${MMPS_BASE_URL}/${CONTACT_ENDPOINT}`, body);
      setShowSuccessText(true);
      emailRef.current?.blur();
    } catch (err) {
      console.error(`failed to send form, error: ${getErrorMessage(err)}`);
      setShowErrorText('Oops, something went wrong. Please try again.');
    }

  }

  return (
    <form onSubmit={handleSubmit} id="contact-form" className="contact-form">
      <h3>Ready to Define Your Next Chapter?</h3>
      <div className="form-element">
        <input type="email" ref={emailRef} placeholder="your@email.com" required aria-describedby="error-text success-text" />
      </div>
      <button type="submit" className="main-btn" disabled={showSuccessText}>Let’s Start</button>
      {showErrorText && <p className="error-message">There was an error. Please try again.</p>}
      {showSuccessText && <p className="success-message">Your message has been sent successfully!</p>}
    </form>
  );
}
