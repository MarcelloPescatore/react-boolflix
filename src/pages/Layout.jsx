import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";


export default function Layout() {

    return (
        <>
            
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <AppFooter />
        </>
    )
}