import { Link } from "react-router-dom";


const AboutHero = () => {
    return (
        <div>
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
        </div>
    );
};

export default AboutHero;