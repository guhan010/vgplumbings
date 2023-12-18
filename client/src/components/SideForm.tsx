import React, { useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import "./SideForm.css";

interface ContactProps {}

const SideForm: React.FC<ContactProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_7a3gue5",
          "template_e150sbe",
          form.current,
          "FHnYIzBu1t9a-8kS_"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="side-container">
      <h4 className="s3title">SEND US A MESSAGE</h4>{" "}
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Enter your name"
        />

        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Enter your email"
        />

        <label htmlFor="user_number">Mobile Number</label>
        <input
          type="text"
          name="user_number"
          id="number"
          placeholder="Enter your Mobile Number"
        />

        <label htmlFor="user_address">Address</label>
        <input
          type="text"
          name="user_address"
          id="address"
          placeholder="Enter your Address"
        />

        <label htmlFor="message">
          Share any details about your plumbing or electrical issue
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
        ></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default SideForm;
