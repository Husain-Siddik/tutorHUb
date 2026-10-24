import { Link } from "react-router-dom";


const AboutCTA = () => {
    return (
        <div>


            <section className="px-4 py-16 sm:px-6 md:py-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-content shadow-sm sm:px-10 md:py-16">

                    <span className="mb-5 inline-block rounded-full border border-primary-content/25 px-4 py-2 text-sm font-medium">
                        Join the TutorHub Community
                    </span>

                    <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                        Ready to Take the Next Step?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 opacity-90 md:text-lg md:leading-8">
                        Whether you want to learn something new or share your
                        knowledge, TutorHub helps you move closer to your goals.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/student/register"
                            className="btn group border-none bg-base-100 px-7 text-primary transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-base-200 hover:shadow-lg active:scale-95"
                        >
                            Join as a Student
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                        <Link
                            to="/tutor/register"
                            className="btn border-2 border-primary-content/70 bg-transparent px-7 text-primary-content transition-all duration-300 ease-out hover:-translate-y-1 hover:border-base-100 hover:bg-base-100 hover:text-primary hover:shadow-lg active:scale-95"
                        >
                            Join as a Tutor
                        </Link>
                    </div>

                    <p className="mt-6 text-sm opacity-75">
                        Learn better. Teach smarter. Grow together.
                    </p>
                </div>
            </section>
        </div>



    );
};

export default AboutCTA;