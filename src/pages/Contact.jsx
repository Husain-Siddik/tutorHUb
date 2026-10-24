
import ContactCTA from "../Components/Contact/ContactCTA";
import ContactHero from "../Components/Contact/ContactHero";
import ContactInfo from "../Components/Contact/ContactInfo";

const Contact = () => {



  return (
    <div className="min-h-screen bg-base-100 text-base-content">

      {/* hero part */}
      <ContactHero />

      {/* Contact Section */}

      <ContactInfo />
      {/* Bottom CTA */}

      {/* <section className="bg-base-200 px-6 py-12">
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
      </section> */}

      <ContactCTA />

    </div>
  );
};

export default Contact;