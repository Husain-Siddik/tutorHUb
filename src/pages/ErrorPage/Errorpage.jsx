import { Link } from "react-router";

const Errorpage = () => {
    return (
        <section className="flex min-h-[80vh] items-center justify-center bg-base-100 px-4 py-12">
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">

                <img
                    src="/walking-investigator-animation-in-404-error-page.gif"
                    alt="404 - Page Not Found"
                    className="mb-6 w-full max-w-md object-contain"
                />

                <h1 className="text-3xl font-extrabold text-base-content sm:text-4xl">
                    Oops! Page Not Found
                </h1>

                <p className="mt-4 max-w-md text-base leading-7 text-base-content/70">
                    The page you're looking for doesn't exist or may have been moved.
                    Let's get you back on track!
                </p>

                <Link
                    to="/"
                    className="btn btn-primary group mt-7 gap-2 px-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95"
                >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to Home
                </Link>

            </div>
        </section>
    );
};

export default Errorpage;