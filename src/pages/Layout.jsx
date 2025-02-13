import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import ScrollUp from "../components/ScrollUp";

export default function Layout() {

    return (
        <>
            
            <div className="flex-grow-1">
                <Outlet />
                <ScrollUp/>
            </div>
            <AppFooter />
        </>
    )
}