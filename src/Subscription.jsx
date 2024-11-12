import React, { useState } from 'react';
import { Form, Input, Button, Container, Message } from 'semantic-ui-react';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Subscription successful!');
        setErrorMessage('');
      } else {
        setErrorMessage('Subscription failed. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Subscription failed. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <Container textAlign="center" style={{ marginTop: '50px' }}>
      <h3>SIGN UP TO KNOW MORE</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field inline>
          <Input 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Button primary type="submit">Subscribe</Button>
        </Form.Field>
      </Form>
      {successMessage && <Message positive>{successMessage}</Message>}
      {errorMessage && <Message negative>{errorMessage}</Message>}
    </Container>
  );
};

export default Subscription;
