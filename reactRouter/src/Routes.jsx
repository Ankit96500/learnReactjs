
import { Home,Footer,Header } from "./components";
import { Outlet } from "react-router";

export default function AppRoutes(){
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    );
};