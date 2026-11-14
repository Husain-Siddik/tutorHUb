import { useState } from "react";
import { Link } from "react-router";

export default function Register() {
    const [role, setRole] = useState("STUDENT");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const formData = new FormData(e.target);

        const password = formData.get("password");
        // const confirmPassword = formData.get("confirmPassword");

        // if (password !== confirmPassword) {
        //     setError("Passwords do not match.");
        //     return;
        // }

        setLoading(true);

        const registerData = {
            name: formData.get("name").trim(),
            email: formData.get("email").trim(),
            password,
            role,
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(registerData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed.");
            }

            alert(data.message || "Registration successful!");

            e.target.reset();
            setRole("STUDENT");

            console.log("Registration response:", data);

        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-base-100 text-base-content">
            <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl lg:grid-cols-2">

                {/* LEFT SECTION */}
                <section className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16">

                    <span className="mb-8 w-fit rounded-md border border-base-content px-3 py-2 text-xs font-semibold tracking-widest uppercase">
                        Join TutorHub
                    </span>

                    <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                        Start Learning.
                        <br />
                        Start Teaching.
                        <br />
                        <span className="text-primary">Grow Together.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-sm leading-7 text-base-content/65 sm:text-base">
                        Join TutorHub and become part of a learning
                        community. Find expert tutors or share your
                        knowledge with students.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md">

                        <div className="rounded-md border border-base-content/30 p-4">
                            <span className="text-2xl">🎓</span>
                            <h3 className="mt-3 text-sm font-bold">
                                For Students
                            </h3>
                            <p className="mt-1 text-xs text-base-content/60">
                                Learn from expert tutors.
                            </p>
                        </div>

                        <div className="rounded-md border border-base-content/30 p-4">
                            <span className="text-2xl">👨‍🏫</span>
                            <h3 className="mt-3 text-sm font-bold">
                                For Tutors
                            </h3>
                            <p className="mt-1 text-xs text-base-content/60">
                                Share knowledge and teach.
                            </p>
                        </div>

                    </div>

                    <p className="mt-10 text-xs text-base-content/40">
                        YOUR JOURNEY. YOUR GOALS. YOUR FUTURE.
                    </p>
                </section>

                {/* RIGHT SECTION - REGISTER FORM */}
                <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">

                    <div className="w-full max-w-md rounded-md border border-base-content/30 p-6 sm:p-10">

                        <div className="mb-7">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Create Account
                            </span>

                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                                Sign Up.
                            </h2>

                            <p className="mt-2 text-sm text-base-content/60">
                                Create your account to get started.
                            </p>
                        </div>

                        {/* ROLE SELECTION */}
                        <div className="mb-7">

                            <label className="mb-3 block text-sm font-semibold">
                                Register as
                            </label>

                            <div className="grid grid-cols-2 gap-3">

                                <button
                                    type="button"
                                    onClick={() => setRole("STUDENT")}
                                    className={`rounded-md border p-3 text-sm font-semibold transition ${role === "STUDENT"
                                        ? "border-primary bg-primary text-primary-content"
                                        : "border-base-content/30 hover:border-primary"
                                        }`}
                                >
                                    🎓 Student
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setRole("TUTOR")}
                                    className={`rounded-md border p-3 text-sm font-semibold transition ${role === "TUTOR"
                                        ? "border-primary bg-primary text-primary-content"
                                        : "border-base-content/30 hover:border-primary"
                                        }`}
                                >
                                    👨‍🏫 Tutor
                                </button>

                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* NAME */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    minLength={2}
                                    maxLength={100}
                                    required
                                    className="input h-12 w-full rounded-md border-base-content/30 bg-transparent focus:border-primary focus:outline-none"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    maxLength={150}
                                    required
                                    className="input h-12 w-full rounded-md border-base-content/30 bg-transparent focus:border-primary focus:outline-none"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-semibold">
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        maxLength={72}
                                        required
                                        className="input h-12 w-full rounded-md border-base-content/30 bg-transparent pr-16 focus:border-primary focus:outline-none"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-primary"
                                    >
                                        {showPassword ? "HIDE" : "SHOW"}
                                    </button>
                                </div>
                            </div>

                            {/* CONFIRM PASSWORD */}


                            {/* ERROR MESSAGE */}
                            {error && (
                                <p className="rounded-md bg-error/10 p-3 text-sm text-error">
                                    {error}
                                </p>
                            )}

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary h-12 w-full rounded-md text-sm font-bold"
                            >
                                {loading ? "Creating Account..." : "Create Account →"}
                            </button>

                        </form>

                        <div className="my-7 border-t border-base-content/20" />

                        <p className="text-center text-sm text-base-content/70">
                            Already have an account?{" "}
                            <Link to="/login" className="font-bold text-primary hover:underline">
                                Sign In
                            </Link>
                        </p>

                        <Link
                            to="/"
                            className="mt-8 block text-center text-xs text-base-content/50 hover:text-primary"
                        >
                            ← Back to homepage
                        </Link>

                    </div>
                </section>
            </div>
        </div>
    );
}