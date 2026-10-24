import { Link } from "react-router";
import Hero from "../Components/Home/Hero";
import Subjects from "../Components/Home/Subjects";
import Features from "../Components/Home/Features";

const Home = () => {




  return (
    <main className="min-h-screen overflow-hidden bg-base-100 text-base-content">

      <Hero />


      {/* Subjects */}

      <Subjects />

      {/* Why TutorHub */}
      <Features />

      {/* How It Works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Start Learning in Three Simple Steps
            </h2>
            <p className="mt-4 text-base-content/70">
              Getting started with TutorHub is easy.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: "🔎",
                title: "Find Your Tutor",
                description:
                  "Explore tutor profiles and discover someone who matches your learning goals.",
              },
              {
                number: "02",
                icon: "📅",
                title: "Book a Session",
                description:
                  "Choose a suitable tutor and arrange a session that works for you.",
              },
              {
                number: "03",
                icon: "🌱",
                title: "Learn and Grow",
                description:
                  "Start your lessons, build confidence, and keep working toward your goals.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">
                <span className="text-sm font-bold tracking-widest text-primary">
                  STEP {step.number}
                </span>
                <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-base-200 text-4xl">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-sm leading-7 text-base-content/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}




      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-content shadow-sm sm:px-10 md:py-20">

          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-primary-content/20 px-4 py-2 text-sm font-medium">
              Your Learning Journey Starts Here
            </span>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Great Things Start with Learning.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 opacity-90 sm:text-lg sm:leading-8">
              Take charge of your education. Find the guidance you need
              or share your knowledge with learners who need it.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/student/find-tutors"
                className="btn btn-lg group border-none bg-base-100 px-8 text-primary shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-base-200 hover:shadow-lg active:scale-95"
              >
                Find a Tutor
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/tutor/register"
                className="btn btn-lg border-2 border-primary-content/70 bg-transparent px-8 text-primary-content transition-all duration-300 ease-out hover:-translate-y-1 hover:border-base-100 hover:bg-base-100 hover:text-primary hover:shadow-lg active:scale-95"
              >
                Become a Tutor
              </Link>
            </div>

            <p className="mt-6 text-sm opacity-75">
              Learn better. Teach smarter. Grow together.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;