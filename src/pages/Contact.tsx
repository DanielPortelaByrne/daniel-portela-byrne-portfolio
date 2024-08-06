import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
import received from "../assets/received.png";

// Styled components for form and overlay
const Form = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
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
  height: 250px;
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

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;

  div {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  img {
    max-width: 300px;
    width: 100%;
    height: auto;
  }
`;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOverlayVisible(true);
    setTimeout(() => {
      setOverlayVisible(false);
    }, 3000); // Overlay visible for 3 seconds

    if (form.current) {
      emailjs
        .sendForm(
          "service_buir84m",
          "template_ghghqgb",
          form.current,
          "OuvlYNSZ_mH4wIsTJ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
    if (form.current) {
      try {
        // Email sending in the background
        await emailjs.sendForm(
          "service_buir84m",
          "template_ghghqgb",
          form.current,
          "OuvlYNSZ_mH4wIsTJ"
        );
        console.log("Email sent successfully.");
      } catch (error) {
        console.error("Email sending error:", error);
      } finally {
        // Reset form after email sending
        form.current.reset();

        // Hide overlay after 3 seconds
        setTimeout(() => {
          setOverlayVisible(false);
        }, 50);
      }
    }
  };

  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <h1>Contact Me</h1>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
      <Overlay visible={overlayVisible}>
        <div>
          <img src={received} alt="Thank you" style={{ maxWidth: "300px" }} />
          <p>Thank you! I'll get back to you soon.</p>
        </div>
      </Overlay>
    </>
  );
};

export default Contact;
