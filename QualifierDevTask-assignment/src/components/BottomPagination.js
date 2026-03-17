import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, House } from "lucide-react";

const BottomPagination = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pages = ["/", "/login", "/signup", "/profile"];
    const totalPages = pages.length;
    const currentIndex = pages.indexOf(location.pathname);
    const currentPage = currentIndex + 1;

    const goPrev = () => {
        const prevIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
        navigate(pages[prevIndex]);
    };

    const goNext = () => {
        const nextIndex = (currentIndex + 1) % totalPages;
        navigate(pages[nextIndex]);
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#fafafa] h-[60px] flex items-center justify-center gap-4 text-sm z-50">
            <button onClick={() => navigate("/")}>
                <House className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>

            <ChevronLeft
                onClick={goPrev}
                className="cursor-pointer text-gray-400 hover:text-gray-600" />

            <span className="text-gray-500">
                {currentPage} of {totalPages}
            </span>

            <ChevronRight
                onClick={goNext}
                className="cursor-pointer text-gray-400 hover:text-gray-600" />
        </div>
    );
};

export default BottomPagination;
