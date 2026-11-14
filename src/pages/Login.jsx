
import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // /api/auth/login



        const formData = new FormData(e.target);



        const loginData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed. Please try again.");
            }

            console.log("Login successful:", data);

            alert(data.message || "Login successful!");

            // Token handling and navigation will be added next.

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
                        Welcome back to TutorHub
                    </span>

                    <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                        Learn Better.
                        <br />
                        Grow Faster.
                        <br />
                        <span className="text-primary">Achieve More.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-sm leading-7 text-base-content/65 sm:text-base">
                        Your learning journey doesn't stop here.
                        Sign in to connect with tutors, manage your
                        sessions, and continue achieving your goals.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md">

                        <div className="rounded-md border border-base-content/30 p-4">
                            <span className="text-2xl">🎓</span>
                            <h3 className="mt-3 text-sm font-bold">
                                Personalized Learning
                            </h3>
                            <p className="mt-1 text-xs text-base-content/60">
                                Learn at your own pace.
                            </p>
                        </div>

                        <div className="rounded-md border border-base-content/30 p-4">
                            <span className="text-2xl">👨‍🏫</span>
                            <h3 className="mt-3 text-sm font-bold">
                                Expert Tutors
                            </h3>
                            <p className="mt-1 text-xs text-base-content/60">
                                Find the right guidance.
                            </p>
                        </div>

                    </div>

                    <p className="mt-10 text-xs text-base-content/40">
                        YOUR JOURNEY. YOUR GOALS. YOUR FUTURE.
                    </p>
                </section>

                {/* RIGHT SECTION - LOGIN FORM */}
                <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">

                    <div className="w-full max-w-md rounded-md border border-base-content/30 p-6 sm:p-10">

                        <div className="mb-9">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Account access
                            </span>

                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                                Sign In.
                            </h2>

                            <p className="mt-2 text-sm text-base-content/60">
                                Welcome back! Enter your details below.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

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
                                    required
                                    className="input h-12 w-full rounded-md border-base-content/30 bg-transparent focus:border-primary focus:outline-none"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <div className="mb-2 flex justify-between">
                                    <label htmlFor="password" className="text-sm font-semibold">
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        onClick={() => alert("Password reset functionality is not connected yet.")}
                                        className="text-xs font-semibold text-primary hover:underline"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
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

                            {/* REMEMBER ME */}
                            <label className="flex cursor-pointer items-center gap-3 text-sm text-base-content/70">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    className="checkbox checkbox-primary checkbox-sm rounded-sm"
                                />
                                Remember me
                            </label>

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
                                {loading ? "Signing In..." : "Sign In →"}
                            </button>

                        </form>

                        <div className="my-7 border-t border-base-content/20" />

                        <p className="text-center text-sm text-base-content/70">
                            New to TutorHub?{" "}
                            <Link to="/signup" className="font-bold text-primary hover:underline">
                                Create an account
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
