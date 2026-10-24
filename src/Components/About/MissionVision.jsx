

const MissionVision = () => {
    return (
        <div>
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
        </div>
    );
};

export default MissionVision;