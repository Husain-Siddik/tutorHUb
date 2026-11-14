
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
                <div className="navbar-end flex-nowrap gap-1 sm:gap-2">

                    {/* Theme Toggle */}
                    {/* Theme Toggle */}
                    <label className="swap swap-rotate btn btn-ghost btn-square btn-sm shrink-0">

                        <input
                            type="checkbox"
                            className="theme-controller"
                            value="dark"
                            aria-label="Toggle dark mode"
                        />

                        {/* Sun icon */}
                        <svg
                            className="swap-off h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm9 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2ZM4 11H3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm12.95-5.36-.7.7a1 1 0 0 0 1.41 1.42l.71-.71a1 1 0 0 0-1.42-1.41ZM6.34 16.24l-.71.71a1 1 0 0 0 1.41 1.41l.71-.7a1 1 0 0 0-1.41-1.42Zm11.32 0a1 1 0 0 0-1.41 1.42l.7.7a1 1 0 0 0 1.42-1.41ZM6.34 5.64a1 1 0 0 0-1.41 1.41l.7.71a1 1 0 0 0 1.42-1.41ZM12 19a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1Z" />
                        </svg>

                        {/* Moon icon */}
                        <svg
                            className="swap-on h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
                        </svg>

                    </label>

                    <Link
                        to="/login"
                        className="btn btn-ghost btn-sm sm:btn-md"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/signup"
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
                            <li><NavLink to="/" end>Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
}
