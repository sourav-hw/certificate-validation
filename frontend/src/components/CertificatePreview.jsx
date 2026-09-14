import { CheckCircle2 } from "lucide-react";

const CertificatePreview = ({ certificateId }) => {
    return (
        <div className="w-full max-w-5xl">
            {/* Verification Status */}
            <div className="mb-5 flex items-center justify-center gap-2 sm:mb-6">
                <CheckCircle2
                    size={19}
                    strokeWidth={2}
                    className="text-[#39FF14] sm:h-5 sm:w-5"
                />

                <span className="text-sm font-medium text-[#39FF14] sm:text-base">
                    Certificate Verified
                </span>
            </div>

            {/* Certificate Information */}
            <div className="mb-5 rounded-xl border border-white/10 bg-zinc-950/70 p-4 sm:mb-6 sm:p-5">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:mb-5 sm:text-sm">
                    Certificate Information
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    {/* Student Name */}
                    <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-zinc-600 sm:text-xs">
                            Student Name
                        </p>

                        <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                            John Doe
                        </p>
                    </div>

                    {/* Email */}
                    <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-zinc-600 sm:text-xs">
                            Email ID
                        </p>

                        <p className="mt-1 break-all text-sm font-medium text-white sm:text-base">
                            john.doe@example.com
                        </p>
                    </div>

                    {/* Certificate ID */}
                    <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-zinc-600 sm:text-xs">
                            Certificate ID
                        </p>

                        <p className="mt-1 break-all text-sm font-medium text-white sm:text-base">
                            {certificateId}
                        </p>
                    </div>

                    {/* Certificate */}
                    <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-zinc-600 sm:text-xs">
                            Certificate
                        </p>

                        <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                            Offenso Certified Security Analyst
                        </p>
                    </div>
                </div>
            </div>

            {/* Certificate Preview */}
            <div className="flex w-full justify-center">
                <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-1 shadow-[0_0_50px_rgba(57,255,20,0.08)] sm:rounded-2xl sm:p-2">
                    <div className="overflow-hidden rounded-lg bg-white sm:rounded-xl">
                        <img
                            src="/OCSA-preview.png"
                            alt="OCSA Certificate"
                            className="block h-auto w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatePreview;