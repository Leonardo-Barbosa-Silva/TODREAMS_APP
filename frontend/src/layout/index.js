import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from '../components/Footer'


export default function Layout({ children }) {

    const location = useLocation()
    
    return (
        location.pathname === '/' ? (
            <>
                <Header />
                {children}
                <Footer />
            </>
        ) : (
            <>
                <Header />
                {children}
            </>
        )
    )
}