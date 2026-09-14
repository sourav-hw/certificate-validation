import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, LoaderCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ADISPreview from "../components/certificates/ADISPreview";
import OCSAPreview from "../components/certificates/OCSAPreview";
import OCSPPreview from "../components/certificates/OCSPPreview";
import CJWHPreview from "../components/certificates/CJWHPreview";

const Certificate = () => {
    const { certificateId } = useParams();

    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `http://localhost:5000/api/certificates/${encodeURIComponent(certificateId)}`
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Certificate not found");
                }

                setCertificate(data.certificate);
            } catch (error) {
                setCertificate(null);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCertificate();
    }, [certificateId]);

    return (
        <main className="min-h-screen bg-black text-white">

            {/* Page Header */}
            <div className="border-b border-white/10 bg-black">
                <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-10">

                    {/* Logo */}
                    <Link to="/" className="shrink-0">
                        <img
                            src="/Offenso-Logo-White.png"
                            alt="Offenso Hackers Academy"
                            className="h-9 w-auto object-contain sm:h-12"
                        />
                    </Link>

                    {/* Title */}
                    <span className="text-sm font-semibold tracking-tight text-white sm:text-lg md:text-xl">
                        Certificate Verification
                    </span>

                </div>
            </div>

            {/* Certificate Content */}
            <section className="relative overflow-hidden px-3 py-10 sm:px-6 sm:py-16 lg:px-10">

                {/* Glow */}
                <div className="absolute left-1/2 top-16 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#39FF14]/[0.04] blur-[100px] sm:top-20 sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

                <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">

                    {/* Loading */}
                    {loading && (
                        <div className="flex min-h-[300px] flex-col items-center justify-center gap-3">
                            <LoaderCircle
                                size={30}
                                className="animate-spin text-[#39FF14]"
                            />

                            <p className="text-sm text-zinc-500">
                                Verifying certificate...
                            </p>
                        </div>
                    )}

                    {/* Invalid Certificate */}
                    {!loading && !certificate && (
                        <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

                            <XCircle
                                size={42}
                                strokeWidth={1.8}
                                className="mb-4 text-red-500"
                            />

                            <h1 className="text-xl font-semibold text-white sm:text-2xl">
                                Certificate Not Found
                            </h1>

                            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
                                We couldn't find a certificate with the ID:
                            </p>

                            <p className="mt-2 break-all text-sm font-medium text-zinc-300">
                                {certificateId}
                            </p>

                            <Link
                                to="/"
                                className="mt-6 rounded-lg bg-[#39FF14] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#32e612]"
                            >
                                Verify Another Certificate
                            </Link>
                        </div>
                    )}

                    {/* Valid Certificate */}
                    {!loading && certificate && (
                        <>
                            {/* Verification Status */}
                            <div className="mb-6 flex w-full items-center justify-center gap-2 sm:mb-8">
                                <CheckCircle2
                                    size={19}
                                    strokeWidth={2}
                                    className="text-[#39FF14] sm:h-[22px] sm:w-[22px]"
                                />

                                <span className="text-sm font-medium text-[#39FF14] sm:text-base">
                                    Certificate Verified
                                </span>
                            </div>

                            {/* Certificate Information */}
                            <div className="mb-5 w-full rounded-xl border border-white/10 bg-zinc-950/70 p-4 sm:mb-6 sm:p-5">

                                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:mb-5 sm:text-sm">
                                    Certificate Information
                                </h2>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                                    {/* Student Name */}
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                                            Student Name
                                        </p>

                                        <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                            {certificate.studentName}
                                        </p>
                                    </div>

                                    {/* Course / Program */}
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                                            Course / Program
                                        </p>

                                        <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                            {certificate.course}
                                        </p>
                                    </div>

                                    {/* Batch */}
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                                            Batch
                                        </p>

                                        <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                            {certificate.batch}
                                        </p>
                                    </div>

                                    {/* Certificate ID */}
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                                            Certificate ID / Certificate Number
                                        </p>

                                        <p className="mt-1 break-all text-sm font-medium text-white sm:text-base">
                                            {certificate.certificateId}
                                        </p>
                                    </div>

                                    {/* Issued Date */}
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                                            Certificate Issued Date
                                        </p>

                                        <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                            {formatDate(certificate.issuedDate)}
                                        </p>
                                    </div>

                                    {/* Branch - Only if available */}
                                    {certificate.branch && (
                                        <div className="min-w-0">
                                            <p className="text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                                                Branch
                                            </p>

                                            <p className="mt-1 break-words text-sm font-medium text-white sm:text-base">
                                                {certificate.branch}
                                            </p>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Certificate Preview */}
                            {/* Certificate Preview */}
                            <div className="flex w-full justify-center">
                                <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-1 shadow-[0_0_50px_rgba(57,255,20,0.08)] sm:rounded-2xl sm:p-2">
                                    <div className="overflow-hidden rounded-lg bg-white sm:rounded-xl">

                                        {certificate.certificateType === "ADIS" && (
                                            <ADISPreview certificate={certificate} />
                                        )}

                                        {certificate.certificateType === "OCSA" && (
                                            <OCSAPreview certificate={certificate} />
                                        )}

                                        {certificate.certificateType === "OCSP" && (
                                            <OCSPPreview certificate={certificate} />
                                        )}

                                        {certificate.certificateType === "CJWH" && (
                                            <CJWHPreview certificate={certificate} />
                                        )}

                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </section>
        </main>
    );
};

export default Certificate;