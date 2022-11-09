import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Wiadomość wysłana");
  };
  return (
    <div className="contact-wrapper">
      <h1>Napisz do nas!</h1>
      <form onSubmit={sendMessage}>
        <textarea rows="15" cols="50" placeholder="Napisz do nas :)"></textarea>
        <input type="submit" value="Wyślij" />
      </form>
    </div>
  );
};

export default Contact;
