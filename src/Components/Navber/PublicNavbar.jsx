// import { Link, NavLink } from "react-router";

// export default function PublicNavbar() {
//     const navLinkClass = ({ isActive }) =>
//         `font-medium transition-colors ${
//             isActive
//                 ? "text-white"
//                 : "text-base-content/70 hover:text-white"
//         }`;

//     return (
//         <header className="border-b border-base-300 bg-black">
//             <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 {/* Logo */}
//                 <div className="navbar-start">
//                     <Link
//                         to="/"
//                         className="text-2xl font-bold tracking-tight text-white"
//                     >
//                         Tutor<span className="text-base-content">Hub</span>
//                     </Link>
//                 </div>

//                 {/* Desktop navigation */}
//                 <div className="navbar-center hidden md:flex">
//                     <nav className="flex items-center gap-8">
//                         <NavLink to="/" end className={navLinkClass}>
//                             <span className="text-white">Home</span>
//                         </NavLink>

//                         <NavLink to="/about" className={navLinkClass}>
//                             <span className="text-white">About</span>
//                         </NavLink>

//                         <NavLink to="/contact" className={navLinkClass}>
//                             <span className="text-white">Contact</span>
//                         </NavLink>
//                     </nav>
//                 </div>

//                 {/* Actions */}
//                 <div className="navbar-end gap-2">
//                     <Link
//                         to="/login"
//                         className="btn btn-ghost btn-sm sm:btn-md text-white"
//                     >
//                         Log in
//                     </Link>

//                     <Link
//                         to="/login"
//                         className="btn btn-primary rounded-none bg-white text-black btn-sm sm:btn-md hover:bg-gray-200"
//                     >
//                         Get Started
//                     </Link>

//                     {/* Mobile menu */}
//                     <div className="dropdown dropdown-end md:hidden">
//                         <button
//                             type="button"
//                             tabIndex={0}
//                             aria-label="Open navigation menu"
//                             className="btn btn-ghost btn-square"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 />
//                             </svg>
//                         </button>

//                         <ul
//                             tabIndex={0}
//                             className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
//                         >
//                             <li className="hover:shadow-amber-50">
//                                 <NavLink to="/" end>
//                                     <span >Home</span>
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/about">
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/contact">
//                                     Contact
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export default function PublicNavbar() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("tutorhub-theme") || "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("tutorhub-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => current === "dark" ? "light" : "dark");
    };

    const navLinkClass = ({ isActive }) =>
        `font-medium transition-colors ${
            isActive
                ? "text-primary"
                : "text-base-content/70 hover:text-primary"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* LOGO */}
                <div className="navbar-start">
                    <Link to="/" className="text-2xl font-black tracking-tight text-base-content">
                        Tutor<span className="text-primary">Hub.</span>
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION */}
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

                {/* ACTIONS */}
                <div className="navbar-end gap-2">

                    {/* DARK / LIGHT MODE */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-square"
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="4" />
                                <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397Z" />
                            </svg>
                        )}
                    </button>

                    <Link to="/login" className="btn btn-ghost btn-sm sm:btn-md">
                        Log in
                    </Link>

                    <Link to="/login" className="btn btn-primary btn-sm sm:btn-md rounded-none">
                        Get Started
                    </Link>

                    {/* MOBILE MENU */}
                    <div className="dropdown dropdown-end md:hidden">
                        <button
                            type="button"
                            tabIndex={0}
                            aria-label="Open navigation menu"
                            className="btn btn-ghost btn-square"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
                        >
                            <li><NavLink to="/" end>Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/login">Log in</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
