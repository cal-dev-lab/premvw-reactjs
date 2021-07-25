import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

toast.configure();
function Form() {
  // Toastify Notification
  const notify = () => {
    toast.success("Booking form sent!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  // Send email function
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o6o020o",
        "template_mfk7zkp",
        e.target,
        "user_KjjfI0v4i1et2qcGTflNQ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Heading */}
      <div className=" p-10 rounded  w-full  max-w-lg">
        <h2 className="text-4xl md:text-6xl font-thin mb-4">Interested?</h2>
        <p className="mb-6 text-gray-700 font-bold text-md">
          Book a viewing today and a member of our team will be in touch.
        </p>
        {/* Form */}
        <form className="space-y-4" onSubmit={sendEmail} id="form">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-800">
              Name
            </label>
            <input
              type="text"
              className="border-2 border-gray-200 w-full p-2 rounded outline-none focus:border-blue-700"
              id="user_name"
              name="user_name"
              placeholder="Your name"
            />
          </div>
          {/* Email */}
          <div>
            <label for="name" className="block mb-2 text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="border-2 border-gray-200 w-full p-2 rounded outline-none focus:border-blue-700"
              id="user_email"
              name="user_email"
              placeholder="user@domain.com"
            />
          </div>
          {/* Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="agree" />
            <label for="agree" className="ml-2 text-gray-700 text-sm">
              I agree to the terms and conditions.
            </label>
          </div>
          {/* Button */}
          <button
            onClick={notify}
            className="block bg-green-400 hover:bg-blue-500 transition text-white duration-300 w-full p-2 rounded"
          >
            Book now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
