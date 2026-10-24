import { Link, NavLink } from "react-router";

export default function PublicNavbar() {
    const navLinkClass = ({ isActive }) =>
        `font-medium transition-colors ${isActive
            ? "text-primary"
            : "text-base-content/70 hover:text-primary"
        }`;

    return (
        <header className="border-b border-base-300 bg-base-100">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="navbar-start">
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight text-primary"
                    >
                        Tutor<span className="text-base-content">Hub</span>
                    </Link>
                </div>

                {/* Desktop navigation */}
                <div className="navbar-center hidden md:flex">
                    <nav className="flex items-center gap-8">
                        <NavLink to="/" end className={navLinkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>

                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </nav>
                </div>

                {/* Actions */}
                <div className="navbar-end gap-2">
                    <Link
                        to="/login"
                        className="btn btn-ghost btn-sm sm:btn-md"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/login"
                        className="btn btn-primary btn-sm sm:btn-md"
                    >
                        Get Started
                    </Link>

                    {/* Mobile menu */}
                    <div className="dropdown dropdown-end md:hidden">
                        <button
                            type="button"
                            tabIndex={0}
                            aria-label="Open navigation menu"
                            className="btn btn-ghost btn-square"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
                        >
                            <li>
                                <NavLink to="/" end>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}