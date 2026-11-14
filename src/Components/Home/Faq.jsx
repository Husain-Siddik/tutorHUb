
import { useState } from "react";

const faqs = [
  {
    question: "What is TutorHub?",
    answer:
      "TutorHub is an online tutoring platform that connects students with tutors. You can explore subjects, find suitable tutors, and arrange learning sessions.",
  },
  {
    question: "How can I find a tutor?",
    answer:
      "Browse available tutors, explore their profiles, check their subjects and experience, and choose someone who matches your learning goals.",
  },
  {
    question: "Can I become a tutor on TutorHub?",
    answer:
      "Yes! You can join as a tutor, create your profile, share your expertise, and connect with students looking for guidance.",
  },
  {
    question: "Which subjects are available?",
    answer:
      "TutorHub is designed for a variety of subjects, including Mathematics, Physics, Chemistry, English, Computer Science, and Business.",
  },
  {
    question: "Can I choose my own learning schedule?",
    answer:
      "Yes. You can coordinate with your tutor to arrange sessions that fit your availability and learning preferences.",
  },
  {
    question: "Is TutorHub free to use?",
    answer:
      "You can explore the platform and browse its features. Any tutoring fees or platform charges will depend on the services offered.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can visit our Contact page and send us a message. Our team will be happy to help with your questions.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-base-100 px-6 py-20 text-base-content">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Got Questions?
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base-content/60">
            Everything you need to know about TutorHub and how to get started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/50 bg-base-200"
                    : "border-base-content/10 bg-base-100 hover:border-primary/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                >
                  <span className="text-base font-semibold sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border text-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-primary bg-primary text-primary-content"
                        : "border-base-content/20 text-base-content"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-7 text-base-content/65 sm:px-7 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div className="mt-12 text-center">
          <p className="text-base-content/60">
            Still have questions?
          </p>

          <a
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
          >
            Contact our team <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
