import { useState, useEffect } from "react"


export default function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

            setIsVisible(scrolledPercentage > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className={`scroll-up rounded d-flex justify-content-center align-items-center  ${isVisible ? "d-inline" : "d-none" }`} onClick={scrollToTop} >
                <i className="bi bi-arrow-up"></i>
            </div>
        </>
    )
}