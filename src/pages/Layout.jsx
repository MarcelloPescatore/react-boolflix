import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import ScrollUp from "../components/ScrollUp";

export default function Layout() {

    return (
        <>
            
            <main className="flex-grow-1">
                <Outlet />
                <ScrollUp/>
            </main>
            <AppFooter />
        </>
    )
}