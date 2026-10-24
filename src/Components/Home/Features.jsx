

const Features = () => {

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
        <div>
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
        </div>
    );
};

export default Features;