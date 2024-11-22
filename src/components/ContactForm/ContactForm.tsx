import axios from 'axios';
import { Spin } from 'antd';
import { FormEvent, useRef, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { CONTACT_ENDPOINT, MMPS_BASE_URL } from '@core/config';
import { getErrorMessage } from '@core/utils';
import './ContactForm.scss';

type Props = {}

type FormValues = {
  email: string;
};

export const ContactForm = ({}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [successText, setSuccessText] = useState<string>('');

  const emailRef = useRef<HTMLInputElement | null>(null);

  const getFormValues = (): FormValues => ({
    email: emailRef.current?.value.trim() || '',
  });

  const isEmailValid = (email: string): boolean => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(email).toLowerCase()
    );
  };

  const isFormValid = (): boolean => {
    const formValues = getFormValues();
    return Object.values(formValues).every(value => Boolean(value.trim()));
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setSuccessText('');
    setErrorText('');

    if (!isFormValid() || !isEmailValid(emailRef.current?.value || '')) {
      setErrorText('Valid email address is required');
      emailRef.current?.focus();
      return;
    }

    try {
      setIsLoading(true);
      const body = getFormValues();
      const result = await axios.post(`${MMPS_BASE_URL}/${CONTACT_ENDPOINT}`, body);
      if (!result?.data?.success) {
        throw new Error('Failed to send form');
      }
      setSuccessText('Your message has been sent successfully!');
      emailRef.current?.blur();
      setIsLoading(false);
    } catch (err) {
      console.error(`failed to send form, error: ${getErrorMessage(err)}`);
      setErrorText('Oops, something went wrong. Please try again later.');
      setIsLoading(false);
    }

  }

  return (
    <form onSubmit={handleSubmit} id="contact-form" className="contact-form">
      <h3>Ready to Define Your Next Chapter?</h3>
      <div className="form-element">
        <input type="email" ref={emailRef} placeholder="your@email.com" required
               aria-describedby="error-text success-text"/>
        {errorText && <p className="error-message">{errorText}</p>}
        {successText && <p className="success-message">{successText}</p>}
      </div>
      <button type="submit" className="main-btn" disabled={!!successText}>
        {isLoading ? <Spin indicator={<LoadingOutlined spin/>}/> : 'Let’s Start'}
      </button>
    </form>
  );
}
