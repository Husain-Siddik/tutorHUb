import { Link } from "react-router";

const Home = () => {
  const subjects = [
    { icon: "💻", name: "Computer Science", detail: "Programming & technology" },
    { icon: "📐", name: "Mathematics", detail: "Algebra, calculus & more" },
    { icon: "🔬", name: "Physics", detail: "Understand the universe" },
    { icon: "🧪", name: "Chemistry", detail: "Explore chemical science" },
    { icon: "🌍", name: "English", detail: "Language & communication" },
    { icon: "📊", name: "Business", detail: "Finance & management" },
  ];

  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description:
        "Find tutors who match your subjects, learning style, and academic goals.",
    },
    {
      icon: "👩‍🏫",
      title: "Expert Tutors",
      description:
        "Explore tutor profiles and choose the right learning partner for you.",
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      description:
        "Arrange tutoring sessions around your schedule and learning needs.",
    },
    {
      icon: "🤝",
      title: "Simple Connections",
      description:
        "Discover tutors, manage bookings, and keep your learning organized.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-base-100 text-base-content">
      {/* Hero */}
      <section className="relative bg-base-200 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="badge badge-primary badge-outline mb-6 px-3 py-3">
              Your learning journey starts here
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn Better.
              <br />
              Grow Faster.
              <br />
              <span className=" text-primary ">Achieve More.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-base-content/70 md:text-lg">
              Great learning starts with the right guidance. Discover tutors,
              explore new subjects, and take the next step toward your goals
              with TutorHub.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/student/find-tutors"
                className="btn btn-primary btn-lg"
              >
                Find a Tutor <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/tutor/register"
                className="btn btn-outline btn-lg"
              >
                Become a Tutor
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-base-content/70">
              <span>✓ Personalized learning</span>
              <span>✓ Flexible sessions</span>
              <span>✓ Learning for everyone</span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-secondary/10 blur-2xl" />

            <div className="relative rounded-3xl border border-base-300 bg-base-100 p-5 shadow-xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/60">
                    Your learning space
                  </p>
                  <h2 className="mt-1 text-xl font-bold">
                    What will you learn today?
                  </h2>
                </div>
                <span className="text-3xl">🎓</span>
              </div>

              <div className="mt-7 rounded-2xl bg-primary/10 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-2xl text-primary-content">
                    📚
                  </div>
                  <div>
                    <h3 className="font-bold">Keep growing</h3>
                    <p className="mt-1 text-sm text-base-content/70">
                      One lesson at a time.
                    </p>
                  </div>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-base-300">
                  <div className="h-full w-2/3 rounded-full bg-primary" />
                </div>
                <p className="mt-2 text-xs text-base-content/60">
                  Every step forward matters.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-base-300 p-4">
                  <span className="text-2xl">💡</span>
                  <h3 className="mt-2 font-semibold">New Skills</h3>
                  <p className="mt-1 text-xs text-base-content/60">
                    Explore your interests
                  </p>
                </div>
                <div className="rounded-xl border border-base-300 p-4">
                  <span className="text-2xl">🚀</span>
                  <h3 className="mt-2 font-semibold">Your Goals</h3>
                  <p className="mt-1 text-xs text-base-content/60">
                    Make real progress
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-base-200 p-4">
                <span className="text-2xl">✨</span>
                <p className="text-sm">
                  <span className="font-semibold">Your potential is limitless.</span>
                  <br />
                  Start learning something new today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Explore your interests
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Learn What You Love
              </h2>
              <p className="mt-3 max-w-xl text-base-content/70">
                From school subjects to professional skills, discover learning
                opportunities that fit your ambitions.
              </p>
            </div>

            <Link
              to="/student/find-tutors"
              className="link link-primary font-semibold no-underline hover:underline"
            >
              Explore all tutors →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Link
                key={subject.name}
                to="/student/find-tutors"
                className="group rounded-2xl border border-base-300 bg-base-100 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-base-200 text-3xl transition group-hover:bg-primary/10">
                    {subject.icon}
                  </span>
                  <span className="text-xl text-base-content/40 transition group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold">{subject.name}</h3>
                <p className="mt-2 text-sm text-base-content/60">
                  {subject.detail}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TutorHub */}
      <section className="bg-base-200 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              The TutorHub difference
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything You Need to Learn with Confidence
            </h2>
            <p className="mt-4 leading-7 text-base-content/70">
              A simpler way to connect with tutors and build a learning
              experience around your goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-base-300 bg-base-100 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-base-content/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-content md:px-12 md:py-20">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Great Things Start with Learning.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 opacity-90 md:text-lg">
            Take charge of your education. Find the guidance you need or share
            your knowledge with learners who need it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/student/find-tutors"
              className="btn border-none bg-base-100 text-primary hover:bg-base-200"
            >
              Find a Tutor
            </Link>
            <Link
              to="/tutor/register"
              className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            >
              Teach with TutorHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;