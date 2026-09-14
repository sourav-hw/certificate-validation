import { MapPin, GraduationCap, ShieldCheck, } from "lucide-react";
import VerificationForm from "./VerificationForm";

const Hero = () => {

    return (
        <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-black">

            {/* ================================================= */}
            {/* Background */}
            {/* ================================================= */}

            {/* Green glow - top left */}
            <div className="absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#39FF14]/[0.07] blur-[120px]" />

            {/* Green glow - bottom right */}
            <div className="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-[#39FF14]/[0.05] blur-[120px]" />

            {/* Blue/Cyan glow */}
            <div className="absolute right-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.035] blur-[120px]" />

            {/* ================================================= */}
            {/* Grid */}
            {/* ================================================= */}

            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            {/* ================================================= */}
            {/* Dot Pattern - Top Left */}
            {/* ================================================= */}

            <div className="absolute left-8 top-20 hidden opacity-40 lg:block">
                <div className="grid grid-cols-5 gap-4">
                    {Array.from({ length: 25 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-[#39FF14]"
                        />
                    ))}
                </div>
            </div>

            {/* ================================================= */}
            {/* Dot Pattern - Bottom Right */}
            {/* ================================================= */}

            <div className="absolute bottom-16 right-10 hidden opacity-25 lg:block">
                <div className="grid grid-cols-5 gap-4">
                    {Array.from({ length: 25 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-[#39FF14]"
                        />
                    ))}
                </div>
            </div>

            {/* ================================================= */}
            {/* Shield */}
            {/* ================================================= */}

            <div className="absolute -right-16 top-20 hidden opacity-[0.045] lg:block">
                <ShieldCheck
                    size={420}
                    strokeWidth={1}
                    className="text-[#39FF14]"
                />
            </div>

            {/* ================================================= */}
            {/* Graduation Cap */}
            {/* ================================================= */}

            <div className="absolute -bottom-5 -left-8 hidden rotate-[-8deg] opacity-[0.045] lg:block">
                <GraduationCap
                    size={270}
                    strokeWidth={1}
                    className="text-[#39FF14]"
                />
            </div>

            {/* ================================================= */}
            {/* Hero Content */}
            {/* ================================================= */}

            <div className="relative z-10 flex min-h-[calc(100vh-76px)] items-center justify-center px-6 py-20">

                <div className="flex w-full max-w-5xl flex-col items-center text-center">

                    {/* Small Label */}
                    <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-[#39FF14] sm:text-sm">

                        <span className="h-px w-8 bg-[#39FF14]/50" />

                        Trust · Verify · Achieve

                        <span className="h-px w-8 bg-[#39FF14]/50" />

                    </div>

                    {/* Heading */}
                    <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

                        Certificate{" "}

                        <span className="text-[#39FF14]">
                            Verification
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                        Verify the authenticity of a certificate using its unique
                        certificate ID.
                    </p>

                    {/* Search */}
                    <div className="mt-11 flex w-full justify-center">
                        <VerificationForm />
                    </div>


                    {/* Locations */}
                    <div className="mt-10 flex flex-col items-center gap-3 text-sm">
                        <span className="text-zinc-500">
                            Offenso Hackers Academy — Kerala Locations
                        </span>

                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-zinc-400">

                            {/* Kochi */}
                            <a
                                href="https://offensoacademy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#39FF14]"
                            >
                                <MapPin
                                    size={16}
                                    strokeWidth={1.8}
                                    className="text-[#39FF14]"
                                />
                                <span>Kochi</span>
                            </a>

                            <span className="text-zinc-700">·</span>

                            {/* Trivandrum */}
                            <a
                                href="https://tvm.offensoacademy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#39FF14]"
                            >
                                <MapPin
                                    size={16}
                                    strokeWidth={1.8}
                                    className="text-[#39FF14]"
                                />
                                <span>Trivandrum</span>
                            </a>

                            <span className="text-zinc-700">·</span>

                            {/* Calicut */}
                            <a
                                href="https://calicut.offensoacademy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#39FF14]"
                            >
                                <MapPin
                                    size={16}
                                    strokeWidth={1.8}
                                    className="text-[#39FF14]"
                                />
                                <span>Calicut</span>
                            </a>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;