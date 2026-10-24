import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div>
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

                        <div className="mt-8 flex flex-col  md:flex-row  gap-4 ">
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

        </div>
    );
};

export default Hero;