

// const About = () => {
//     return (
//         <div>
//             this is about page
//         </div>
//     );
// };

// export default About;

import { Link } from "react-router";

const About = () => 
{
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="bg-base-200 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="badge badge-primary badge-outline text-3xl mb-5 px-6 py-6">
            Who Are We?
          </span>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Making Quality Education
            <span className="text-primary"> Accessible to Everyone</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base-content/70 md:text-lg">
            TutorHub connects passionate learners with experienced tutors,
            making personalized education simpler, more accessible, and more
            effective for everyone.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/student/find-tutors" className="btn btn-primary text-xl">
              Find a Tutor
            </Link>
            <Link to="/tutor/register" className="btn btn-outline text-xl">
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>

      {/* Mission,vision part here */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-base-300 p-8 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
              🎯
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-7 text-base-content/70">
              Our mission is to make quality education accessible by bringing
              students and qualified tutors together through a simple,
              reliable, and convenient learning platform.
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 p-8 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-3xl">
              🌟
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 leading-7 text-base-content/70">
              We envision a world where every learner can find the right
              guidance, develop their skills, and reach their full potential
              regardless of their background or location.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-base-200 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Choose TutorHub?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
              Everything you need to make learning a better experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "👩‍🏫",
                title: "Qualified Tutors",
                description:
                  "Discover tutors with relevant knowledge and teaching experience.",
              },
              {
                icon: "📚",
                title: "Personalized Learning",
                description:
                  "Find learning support that matches your goals, subjects, and pace.",
              },
              {
                icon: "🗓️",
                title: "Flexible Scheduling",
                description:
                  "Explore tutoring options and arrange sessions around your schedule.",
              },
              {
                icon: "🤝",
                title: "Easy Connections",
                description:
                  "Connect with tutors and make your learning journey more convenient.",
              },
              {
                icon: "💡",
                title: "Learn and Grow",
                description:
                  "Build confidence, strengthen your knowledge, and develop new skills.",
              },
              {
                icon: "🔒",
                title: "Trust and Transparency",
                description:
                  "Make informed decisions with clear tutor profiles and booking details.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card border border-base-300 bg-base-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="card-body">
                  <span className="text-4xl">{feature.icon}</span>
                  <h3 className="card-title mt-2">{feature.title}</h3>
                  <p className="text-base-content/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-content md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your Learning Journey Starts Here!
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Whether you want to learn something new or share your knowledge,
            TutorHub is here to help you take the next step.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/student/register"
              className="btn border-none bg-white text-primary hover:bg-base-200 text-blue-800 "
            >
              Join as a Student
            </Link>
            <Link
              to="/tutor/register"
              className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            >
              Join as a Tutor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;