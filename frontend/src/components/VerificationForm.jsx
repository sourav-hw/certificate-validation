import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VerificationForm = () => {
    const [certificateId, setCertificateId] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = certificateId.trim();

        if (!id) {
            setError("Please enter a Certificate ID.");
            return;
        }

        setError("");

        navigate(`/verify/${encodeURIComponent(id)}`);
    };

    const handleChange = (event) => {
        setCertificateId(event.target.value);

        if (error) {
            setError("");
        }
    };

    return (
        <div className="w-full max-w-3xl">
            <form onSubmit={handleSubmit}>
                <div
                    className={`flex w-full overflow-hidden rounded-xl border bg-zinc-950 transition-all duration-300 ${
                        error
                            ? "border-red-500/60"
                            : "border-white/15 focus-within:border-[#39FF14]/60"
                    }`}
                >
                    {/* Input */}
                    <div className="relative flex min-w-0 flex-1 items-center">
                        <Search
                            size={19}
                            strokeWidth={1.8}
                            className={`absolute left-3.5 sm:left-4 ${
                                error
                                    ? "text-red-400"
                                    : "text-zinc-500"
                            }`}
                        />

                        <input
                            type="text"
                            name="certificateId"
                            value={certificateId}
                            onChange={handleChange}
                            placeholder="Enter Certificate ID"
                            className="h-14 w-full min-w-0 bg-transparent pl-11 pr-2 text-xs text-white outline-none placeholder:text-zinc-600 sm:h-16 sm:pl-12 sm:pr-5 sm:text-lg"
                        />
                    </div>

                    {/* Verify Button */}
                    <button
                        type="submit"
                        className="flex h-14 shrink-0 items-center gap-1.5 bg-[#39FF14] px-3.5 text-xs font-semibold text-black transition-all duration-200 hover:bg-[#32e612] sm:h-16 sm:gap-3 sm:px-9 sm:text-base"
                    >
                        <span>Verify</span>

                        <ArrowRight
                            size={17}
                            strokeWidth={2.5}
                            className="sm:h-[19px] sm:w-[19px]"
                        />
                    </button>
                </div>
            </form>

            {/* Message */}
            {error ? (
                <p className="mt-3 px-2 text-center text-xs text-red-400 sm:text-sm">
                    {error}
                </p>
            ) : (
                <p className="mt-4 px-2 text-center text-xs leading-5 text-zinc-500 sm:mt-5 sm:text-sm">
                    Enter the certificate ID exactly as shown on your
                    certificate.
                </p>
            )}
        </div>
    );
};

export default VerificationForm;