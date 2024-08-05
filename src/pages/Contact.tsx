import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: #fee192;
  color: #131312;
  cursor: pointer;

  &:hover {
    background: #9a8858;
  }
`;

const Contact: React.FC = () => {
  return (
    <Form>
      <h1>Contact Me</h1>
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <Textarea placeholder="Your Message" rows={5} required />
      <Button type="submit">Send Message</Button>
    </Form>
  );
};

export default Contact;
