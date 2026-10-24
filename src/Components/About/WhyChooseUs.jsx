

const WhyChooseUs = () => {
    return (
        <div>
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
        </div>
    );
};

export default WhyChooseUs;