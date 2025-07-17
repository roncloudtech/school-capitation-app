import logo from "@/assets/nigeria-army.png";
export default function Header() {
    return (
        <>
            <nav className="bg-[#1A4D2B] px-6 py-4 text-white shadow-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD700]">
                            <img src={logo} alt="Logo" />
                        </div>
                        <h1 className="text-xl font-bold">
                            NAFC School<span className="text-[#FFD700]"> Services</span>
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
