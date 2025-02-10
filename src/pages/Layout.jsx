import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";

export default function Layout() {

    return (
        <>
            
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}