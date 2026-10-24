


// import { useState } from "react";
import { Link } from "react-router";
import SendMsg from "../Components/Contact/SendMsg";

const Contact = () => {
  
    

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* hero part */}
      <section className="bg-base-200 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* <span className="badge badge-primary badge-outline mb-5 px-4 py-3">
            Contact Us
          </span> */}
          <h1 className="text-4xl font-bold md:text-5xl">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base-content/70 text-2xl md:text-xl ">
            Have a question, need help finding a tutor or want to join our
            platform? Send us a message and let us know how we can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-3 leading-7 text-base-content/70">
                We're here to make your TutorHub experience better. Reach out
                to us with your questions, feedback, or suggestions.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-base-300 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="mt-1 text-sm text-base-content/70">
                  Have a question? Send us an email.
                </p>
                <a
                  href="mailto:support@tutorhub.com"
                  className="mt-2 inline-block text-primary hover:underline"
                >
                  support@tutorhub.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-base-300 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-2xl">
                💬
              </div>
              <div>
                <h3 className="font-semibold">Customer Support</h3>
                <p className="mt-1 leading-6 text-base-content/70">
                  Need assistance with bookings, tutor profiles, or your
                  account? We're happy to help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-base-300 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                🎓
              </div>
              <div>
                <h3 className="font-semibold">Join Our Community</h3>
                <p className="mt-1 text-sm leading-6 text-base-content/70">
                  Share your knowledge as a tutor or find the right tutor for
                  your learning goals.
                </p>
                <Link
                  to="/student/find-tutors"
                  className="mt-2 inline-block text-primary hover:underline"
                >
                  Explore Tutors →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8 lg:col-span-3">
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
          </div> */}
          <SendMsg/>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-base-200 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold">Ready to Start Learning?</h2>
          <p className="mt-3 text-base-content/70">
            Find a tutor who understands your goals and helps you succeed.
          </p>
          <Link
            to="/student/find-tutors"
            className="btn btn-primary mt-6"
          >
            Find Your Tutor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;