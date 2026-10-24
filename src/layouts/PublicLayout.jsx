import { Outlet } from "react-router";
import PublicNavbar from "../Components/Navber/PublicNavbar";


export default function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <PublicNavbar />

            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer will go here */}
        </div>
    );
}