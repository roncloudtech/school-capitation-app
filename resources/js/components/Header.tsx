export default function Header() {
    return (
        <>
            <nav className="bg-[#1A4D2B] px-6 py-4 text-white shadow-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD700]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#1A4D2B]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold">
                            Nigerian Army School<span className="text-[#FFD700]">Services</span>
                        </h1>
                    </div>
                    <div className="hidden space-x-8 md:flex">
                        <a href="#features" className="transition hover:text-[#FFD700]">
                            NA Schools
                        </a>
                        <a href="#how-it-works" className="transition hover:text-[#FFD700]">
                            Services
                        </a>
                        <a href="#security" className="transition hover:text-[#FFD700]">
                            Resources
                        </a>
                        {/* <a href="#testimonials" className="transition hover:text-[#FFD700]">
                            Testimonials
                        </a> */}
                    </div>
                    <div>
                        <button className="transform rounded-md bg-[#FFD700] px-6 py-2 font-medium text-[#1A4D2B] transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
                            Officer Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
