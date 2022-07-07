import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [val, setVal] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uipcjbp",
        "template_zqjjzuh",
        form.current,
        "Y1NEuFvX_BUuYp66r"
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
  };

  const handleSent = (e) => {
    e.preventDefault();
    setVal("Sent ✔️");
    alert("Mail sent successfully!");
  };

  return (
    <div className="contactComp">
      <form ref={form} onSubmit={sendEmail} className="formContact">
        <label
          className="labelContact"
          style={{ color: "#fff", marginTop: "1rem" }}
        >
          Name
        </label>
        <input type="text" name="user_name" className="inputContact" />
        <label
          className="labelContact"
          style={{ color: "#fff", marginTop: "1rem" }}
        >
          Email
        </label>
        <input type="email" name="user_email" className="inputContact" />
        <label
          className="labelContact"
          style={{ color: "#fff", marginTop: "1rem" }}
        >
          Message
        </label>
        <textarea name="message" className="textAreaContact" />
        <input
          type="submit"
          value={val}
          className="sendInput"
          onClick={handleSent}
        />
      </form>
    </div>
  );
};

export default Contact;
