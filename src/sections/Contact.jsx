import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  function validateForm() {
    const errors = {};
    const formData = new FormData(form.current);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || name.trim() === "") {
      errors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!message || message.trim() === "") {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(serviceID, templateID, form.current, key)
        .then(
          () => {
            console.log("Success!");
            setFormStatus("success");
            form.current.reset();
          },
          (error) => {
            console.error("Failed...", error.text);
            setFormStatus("error");
          }
        );
    } else {
      console.log("Validation failed.");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col max-w-6xl mb-10 h-min-screen w-full"
    >
      <h1
        className="text-4xl text-blue-500 py-6 underline 
      decoration-green-500 font-bold"
      >
        Contact Me
      </h1>
      <div className="">
        <div className="flex flex-col">
          <p className="text-2xl"><span className="font-semibold">Email:</span> ryanwcchan@gmail.com</p>
        </div>
        <div className="my-4">
          <p className="text-lg">
            If you have any questions or would like to collaborate, feel free to
            reach out to me.
          </p>
          <p className="text-lg">Send a message below or send me an email directly!</p>
        </div>
        {formStatus === "success" && (
          <p className="text-green-500 font-semibold text-lg">
            Thank you! Your message has been sent.
          </p>
        )}
        {formStatus === "error" && (
          <p className="text-red-500 font-semibold text-lg">
            Oops! Something went wrong. Please try again.
          </p>
        )}
        <form
          className="flex flex-col gap-4 mt-4 dark:text-black"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-black dark:text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-black dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-black dark:text-white mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
              required
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
            py-2 px-4 rounded w-64 mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
