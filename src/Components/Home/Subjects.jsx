import { Link } from "react-router-dom";


const Subjects = () => {

    // dammy data here ....
    const subjects = [
        { icon: "💻", name: "Computer Science", detail: "Programming & technology" },
        { icon: "📐", name: "Mathematics", detail: "Algebra, calculus & more" },
        { icon: "🔬", name: "Physics", detail: "Understand the universe" },
        { icon: "🧪", name: "Chemistry", detail: "Explore chemical science" },
        { icon: "🌍", name: "English", detail: "Language & communication" },
        { icon: "📊", name: "Business", detail: "Finance & management" },
    ];



    return (
        <div>
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
        </div>
    );
};

export default Subjects;