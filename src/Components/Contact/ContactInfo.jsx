import { Link } from "react-router-dom";

import SendMsg from '../Contact/SendMsg'


const ContactInfo = () => {
    return (
        <div>
            <section className="px-6 py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
                    {/* Contact Information */}
                    <div className="space-y-6 lg:col-span-2">
                        <div>
                            <h2 className="text-2xl font-bold">Get in Touch</h2>
                            <p className="mt-3 leading-7 text-base-content/70">
                                We're here to make your TutorHub experience better. Reach out
                                to us with your questions, feedback, or suggestions.
                            </p>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl border border-base-300 p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                                ✉️
                            </div>
                            <div>
                                <h3 className="font-semibold">Email Us</h3>
                                <p className="mt-1 text-sm text-base-content/70">
                                    Have a question? Send us an email.
                                </p>
                                <a
                                    href="mailto:support@tutorhub.com"
                                    className="mt-2 inline-block text-primary hover:underline"
                                >
                                    support@tutorhub.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl border border-base-300 p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-2xl">
                                💬
                            </div>
                            <div>
                                <h3 className="font-semibold">Customer Support</h3>
                                <p className="mt-1 leading-6 text-base-content/70">
                                    Need assistance with bookings, tutor profiles, or your
                                    account? We're happy to help.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl border border-base-300 p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                                🎓
                            </div>
                            <div>
                                <h3 className="font-semibold">Join Our Community</h3>
                                <p className="mt-1 text-sm leading-6 text-base-content/70">
                                    Share your knowledge as a tutor or find the right tutor for
                                    your learning goals.
                                </p>
                                <Link
                                    to="/student/find-tutors"
                                    className="mt-2 inline-block text-primary hover:underline"
                                >
                                    Explore Tutors →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}

                    <SendMsg />

                </div>
            </section>
        </div>
    );
};

export default ContactInfo;