
import { useState } from "react";


const SendMsg = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form submission:", formData);
    alert("Thank you for contacting TutorHub!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8 lg:col-span-3">
      <h2 className="text-2xl font-bold">Send Us a Message</h2>
      <p className="mt-2 text-sm text-base-content/70">
        Fill out the form below and tell us how we can help.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text font-medium">
                Email Address
              </span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="subject">
            <span className="label-text font-medium">Subject</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="What is your message about?"
            className="input input-bordered w-full"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="message">
            <span className="label-text font-medium">Your Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="textarea textarea-bordered min-h-36 w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Send Message <span aria-hidden="true">→</span>
        </button>

        <p className="text-center text-xs text-base-content/50">
          Thank you for reaching out to the TutorHub team.
        </p>
      </form>
    </div>

  );
};

export default SendMsg;