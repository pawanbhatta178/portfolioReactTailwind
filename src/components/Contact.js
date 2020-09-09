import React, { useState, useContext } from "react";
import Iframe from "react-iframe";
import { AppContext } from "../AppProvider";

function Contact() {
  const { contactDetails } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameError, setNameError] = useState("");

  const InputStyle =
    " bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-900 text-black text-base px-4 py-2 mb-4 ";
  const messageInputStyle =
    " bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-black text-base px-4 py-2 mb-4 resize-none ";
  const errorStyle = "border-1 border-red-700";

  const hasError = () => {
    let error = false;
    if (email.trim() === "") {
      setEmailError("Email field can't be empty");
      error = true;
    } else {
      setEmailError("");
    }
    if (message.trim() === "") {
      setMessageError("Message field is left empty");
      error = true;
    } else {
      setMessageError("");
    }
    if (name.trim() === "") {
      setNameError("Name field is left empty");
      error = true;
    } else {
      setNameError("");
    }
    return error;
  };

  const submitMessage = () => {
    if (hasError()) return;
    console.log("submitted");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      className="text-gray-700 body-font relative md:px-32 px-4"
      id="Contact"
    >
      <div className="container py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative">
          <Iframe
            width="100%"
            height="100%"
            className="map absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src={contactDetails.mapUrl}
          ></Iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded-lg pr-4">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                ADDRESS
              </h2>
              <p className="leading-relaxed">{contactDetails.address}</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                EMAIL
              </h2>
              <a
                href="mailto:pawanbhatta179@gmail.com"
                className="text-indigo-500 leading-relaxed"
              >
                {contactDetails.email}
              </a>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">{contactDetails.phone}</p>
            </div>
          </div>
        </div>
        <div className="blue-gradient-background lg:w-1/3 md:w-1/2 text-gray-200 flex flex-col md:ml-auto w-full p-8 mt-8 md:mt-0 rounded-lg shadow-2xl">
          <h2 className="text-lg mb-1  font-semibold title-font">Let's talk</h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-sm">
            Use this form to send me a message.
          </p>
          <input
            className={nameError ? InputStyle + errorStyle : InputStyle}
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-red-700 pb-4">{nameError}</span>

          <input
            className={emailError ? InputStyle + errorStyle : InputStyle}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-red-700 pb-4">{emailError}</span>
          <textarea
            className={
              messageError ? messageInputStyle + errorStyle : messageInputStyle
            }
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className="text-red-700 pb-4">{messageError}</span>

          <button
            className="text-white bg-pink-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
            onClick={submitMessage}
          >
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            I will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
