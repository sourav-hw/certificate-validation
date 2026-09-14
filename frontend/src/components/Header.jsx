const Header = () => {
    return (
        <header className="relative z-20 w-full border-b border-white/10 bg-black">
            <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-10">

                {/* Logo + Title */}
                <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                    <a
                        href="https://offensoacademy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0"
                    >
                        <img
                            src="/Offenso-Logo-White.png"
                            alt="Offenso Hackers Academy"
                            className="h-9 w-auto object-contain sm:h-12"
                        />
                    </a>

                    <div className="hidden h-8 w-px bg-white/20 sm:block" />

                    {/* <span className="text-xs font-semibold tracking-tight text-white sm:text-base md:text-lg lg:text-xl">
                        Certificate Validation
                    </span> */}
                </div>

                {/* Our Website */}
                <a
                    href="https://offensoacademy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 shrink-0 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-[#39FF14]/40 hover:text-[#39FF14] sm:px-4 sm:text-sm"
                >
                    Our Website
                </a>

            </div>
        </header>
    );
};

export default Header;