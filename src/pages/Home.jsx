
import { Link } from "react-router";

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

const steps = [
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
];

const cardStyle =
  "group border border-base-content/60 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg";

const mutedText = "text-base-content/65";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-base-100 text-base-content transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* HERO LEFT */}
          <div>
            <span className="mb-6 inline-block border border-base-content px-3 py-3 text-sm font-medium">
              Your learning journey starts here
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn Better.
              <br />
              Grow Faster.
              <br />
              <span className="text-primary">Achieve More.</span>
            </h1>

            <p className={`mt-6 max-w-xl text-base leading-7 md:text-lg ${mutedText}`}>
              Discover tutors, explore new subjects, and take the next
              step toward your goals with TutorHub.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/student/find-tutors"
                className="btn btn-primary btn-lg rounded-none"
              >
                Find a Tutor <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/tutor/register"
                className="btn btn-outline btn-lg rounded-none"
              >
                Become a Tutor <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm ${mutedText}`}>
              <span>✓ Personalized learning</span>
              <span>✓ Flexible sessions</span>
              <span>✓ Learning for everyone</span>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="border border-base-content/70 bg-base-100 p-5 shadow-xl shadow-base-content/5 sm:p-8">

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  What will you learn today?
                </h2>
                <span className="text-3xl">🎓</span>
              </div>

              <div className="mt-7 border-b border-base-content/30 bg-base-200 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center bg-base-300 text-2xl">
                    📚
                  </div>

                  <div>
                    <h3 className="font-bold">Keep growing</h3>
                    <p className={`mt-1 text-sm ${mutedText}`}>
                      One lesson at a time.
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden bg-base-300">
                  <div className="h-full w-2/3 bg-primary" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="p-4">
                  <span className="text-2xl">💡</span>
                  <h3 className="mt-2 font-semibold">New Skills</h3>
                  <p className={`mt-1 text-xs ${mutedText}`}>
                    Explore your interests
                  </p>
                </div>

                <div className="p-4">
                  <span className="text-2xl">🚀</span>
                  <h3 className="mt-2 font-semibold">Your Goals</h3>
                  <p className={`mt-1 text-xs ${mutedText}`}>
                    Make real progress
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-base-content/30 p-4">
                <span className="text-2xl">✨</span>
                <p className={`text-sm ${mutedText}`}>
                  <span className="font-semibold text-base-content">
                    Your potential is limitless.
                  </span>
                  <br />
                  Start learning something new today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS SECTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Explore your interests
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Learn What You <span className="text-primary">Love</span>
              </h2>

              <p className={`mt-3 max-w-xl ${mutedText}`}>
                Discover learning opportunities that fit your ambitions.
              </p>
            </div>

            <Link
              to="/student/find-tutors"
              className="font-semibold text-primary hover:underline"
            >
              Explore all tutors →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Link
                key={subject.name}
                to="/student/find-tutors"
                className={cardStyle}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center bg-base-200 text-3xl transition group-hover:bg-primary/10">
                    {subject.icon}
                  </span>

                  <span className="text-xl text-primary transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {subject.name}
                </h3>

                <p className={`mt-2 text-sm ${mutedText}`}>
                  {subject.detail}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Choose Us?
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything You Need to Learn with Confidence
            </h2>

            <p className={`mt-4 text-lg leading-7 ${mutedText}`}>
              A simpler way to connect with tutors and build a
              learning experience around your goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className={cardStyle}>
                <div className="flex h-14 w-14 items-center justify-center bg-base-200 text-3xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className={`mt-3 text-sm leading-6 ${mutedText}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Your Journey
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Start Learning in Three Simple Steps
            </h2>

            <p className={`mt-4 ${mutedText}`}>
              Getting started with TutorHub is easy.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-base-content/60 bg-base-100 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <span className="text-sm font-bold tracking-widest text-primary">
                  STEP {step.number}
                </span>

                <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center bg-base-200 text-4xl">
                  {step.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className={`mx-auto mt-3 max-w-sm leading-7 ${mutedText}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden border border-base-content/70 bg-base-100 px-6 py-14 text-center md:px-12 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Take the Next Step
          </span>

          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
            Great Things Start with{" "}
            <span className="text-primary">Learning.</span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl leading-7 md:text-lg ${mutedText}`}>
            Take charge of your education. Find the guidance you
            need or share your knowledge with learners who need it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/student/find-tutors"
              className="btn btn-primary rounded-none"
            >
              Find a Tutor
            </Link>

            <Link
              to="/tutor/register"
              className="btn btn-outline rounded-none"
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































// import { Link } from "react-router";

// const Home = () => {
//   const subjects = [
//     { icon: "💻", name: "Computer Science", detail: "Programming & technology" },
//     { icon: "📐", name: "Mathematics", detail: "Algebra, calculus & more" },
//     { icon: "🔬", name: "Physics", detail: "Understand the universe" },
//     { icon: "🧪", name: "Chemistry", detail: "Explore chemical science" },
//     { icon: "🌍", name: "English", detail: "Language & communication" },
//     { icon: "📊", name: "Business", detail: "Finance & management" },
//   ];

//   const features = [
//     {
//       icon: "🎯",
//       title: "Personalized Learning",
//       description:
//         "Find tutors who match your subjects, learning style, and academic goals.",
//     },
//     {
//       icon: "👩‍🏫",
//       title: "Expert Tutors",
//       description:
//         "Explore tutor profiles and choose the right learning partner for you.",
//     },
//     {
//       icon: "📅",
//       title: "Flexible Scheduling",
//       description:
//         "Arrange tutoring sessions around your schedule and learning needs.",
//     },
//     {
//       icon: "🤝",
//       title: "Simple Connections",
//       description:
//         "Discover tutors, manage bookings, and keep your learning organized.",
//     },
//   ];

//   return (
//     <main className="min-h-screen overflow-hidden bg-black text-white">
//       {/* Hero */}
//       <section className="relative bg-black px-6 py-20 md:py-28">
//         <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
//           <div>
//             <span className="mb-6 inline-block rounded-none border border-white px-3 py-3 text-white">
//               Your learning journey starts here
//             </span>

//             <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Learn Better.
//               <br />
//               Grow Faster.
//               <br />
//               <span className="text-white">Achieve More.</span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-7 text-white md:text-lg">
//               Discover tutors, explore new subjects, and take the next step
//               toward your goals with TutorHub.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 to="/student/find-tutors"
//                 className="btn btn-lg rounded-none border-none bg-white text-black hover:bg-gray-200"
//               >
//                 Find a Tutor <span aria-hidden="true">→</span>
//               </Link>

//               <Link
//                 to="/tutor/register"
//                 className="btn btn-lg rounded-none border border-white bg-transparent text-white hover:bg-white hover:text-black"
//               >
//                 Become a Tutor <span aria-hidden="true">→</span>
//               </Link>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white">
//               <span>✓ Personalized learning</span>
//               <span>✓ Flexible sessions</span>
//               <span>✓ Learning for everyone</span>
//             </div>
//           </div>

//           {/* Hero Illustration */}
//           <div className="relative mx-auto w-full max-w-lg">
//             <div className="relative rounded-none border border-white bg-black p-5 shadow-xl shadow-white/5 sm:p-8">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="mt-1 text-xl font-bold">
//                     What will you learn today?
//                   </h2>
//                 </div>
//                 <span className="text-3xl">🎓</span>
//               </div>

//               <div className="mt-7 bg-black p-5">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center bg-white text-2xl text-black">
//                     📚
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-white">Keep growing</h3>
//                     <p className="mt-1 text-sm text-white">
//                       One lesson at a time.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-5 h-2 overflow-hidden bg-white">
//                   <div className="h-full w-2/3 bg-white" />
//                 </div>
//               </div>

//               <div className="mt-5 grid grid-cols-2 gap-4">
//                 <div className="border border-none p-4">
//                   <span className="text-2xl">💡</span>
//                   <h3 className="mt-2 font-semibold text-white">New Skills</h3>
//                   <p className="mt-1 text-xs text-white">
//                     Explore your interests
//                   </p>
//                 </div>
//                 <div className="border border-none p-4">
//                   <span className="text-2xl">🚀</span>
//                   <h3 className="mt-2 font-semibold text-white">Your Goals</h3>
//                   <p className="mt-1 text-xs text-white">
//                     Make real progress
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 flex items-center gap-3 border border-none bg-black p-4">
//                 <span className="text-2xl">✨</span>
//                 <p className="text-sm">
//                   <span className="font-semibold text-white">
//                     Your potential is limitless.
//                   </span>
//                   <br />
//                   Start learning something new today.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Subjects */}
//       <section className="bg-black px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <span className="text-sm font-semibold uppercase tracking-widest text-white">
//                 Explore your interests
//               </span>
//               <h2 className="mt-3 text-3xl font-bold md:text-4xl">
//                 Learn What You <span className="text-white">Love</span>
//               </h2>
//               <p className="mt-3 max-w-xl text-white">
//                 Discover learning opportunities that fit your ambitions.
//               </p>
//             </div>

//             <Link
//               to="/student/find-tutors"
//               className="font-semibold text-white no-underline hover:underline"
//             >
//               Explore all tutors →
//             </Link>
//           </div>

//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {subjects.map((subject) => (
//               <Link
//                 key={subject.name}
//                 to="/student/find-tutors"
//                 className="group rounded-none border border-white bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-lg"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="flex h-14 w-14 items-center justify-center rounded-none bg-white/10 text-3xl transition group-hover:bg-white">
//                     {subject.icon}
//                   </span>
//                   <span className="text-xl text-white transition group-hover:translate-x-1">
//                     →
//                   </span>
//                 </div>

//                 <h3 className="mt-5 text-lg font-bold text-white">
//                   {subject.name}
//                 </h3>
//                 <p className="mt-2 text-sm text-white">{subject.detail}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why TutorHub */}
//       <section className="bg-black px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <span className="text-sm font-semibold uppercase tracking-widest text-white">
//               Why Choose Us?
//             </span>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl">
//               Everything You Need to Learn with Confidence
//             </h2>
//             <p className="mt-4 text-xl leading-7 text-white">
//               A simpler way to connect with tutors and build a learning
//               experience around your goals.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature) => (
//               <div
//                 key={feature.title}
//                 className="rounded-none border border-white bg-black p-6 transition hover:-translate-y-1 hover:border-white hover:shadow-lg"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-none bg-white/10 text-3xl">
//                   {feature.icon}
//                 </div>
//                 <h3 className="mt-5 text-lg font-bold text-white">
//                   {feature.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-6 text-white">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="bg-black px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center">
//             <span className="text-sm font-semibold uppercase tracking-widest text-white">
//               Your journey
//             </span>
//             <h2 className="mt-3 text-3xl font-bold md:text-4xl">
//               Start Learning in Three Simple Steps
//             </h2>
//             <p className="mt-4 text-white">
//               Getting started with TutorHub is easy.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 number: "01",
//                 icon: "🔎",
//                 title: "Find Your Tutor",
//                 description:
//                   "Explore tutor profiles and discover someone who matches your learning goals.",
//               },
//               {
//                 number: "02",
//                 icon: "📅",
//                 title: "Book a Session",
//                 description:
//                   "Choose a suitable tutor and arrange a session that works for you.",
//               },
//               {
//                 number: "03",
//                 icon: "🌱",
//                 title: "Learn and Grow",
//                 description:
//                   "Start your lessons, build confidence, and keep working toward your goals.",
//               },
//             ].map((step) => (
//               <div
//                 key={step.number}
//                 className="relative border border-white bg-black p-8 text-center transition hover:border-white"
//               >
//                 <span className="text-sm font-bold tracking-widest text-white">
//                   STEP {step.number}
//                 </span>
//                 <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-none bg-white/10 text-4xl">
//                   {step.icon}
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold text-white">
//                   {step.title}
//                 </h3>
//                 <p className="mx-auto mt-3 max-w-sm leading-7 text-white">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="px-6 pb-20">
//         <div className="mx-auto max-w-7xl overflow-hidden rounded-none border border-white bg-black px-6 py-14 text-center md:px-12 md:py-20">
//           <span className="text-sm font-semibold uppercase tracking-widest text-white">
//             Take the next step
//           </span>
//           <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
//             Great Things Start with{" "}
//             <span className="text-white">Learning.</span>
//           </h2>
//           <p className="mx-auto mt-5 max-w-2xl leading-7 text-white md:text-lg">
//             Take charge of your education. Find the guidance you need or share
//             your knowledge with learners who need it.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <Link
//               to="/student/find-tutors"
//               className="btn rounded-none border-none bg-white text-black hover:bg-gray-200"
//             >
//               Find a Tutor
//             </Link>
//             <Link
//               to="/tutor/register"
//               className="btn rounded-none border border-white bg-transparent text-white hover:bg-white hover:text-black"
//             >
//               Teach with TutorHub
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;