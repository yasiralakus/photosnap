import { Link, NavLink, Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

export default function App() {

    return (
        <div className="container">

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}