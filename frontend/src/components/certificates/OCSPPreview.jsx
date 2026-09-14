const OCSPPreview = ({ certificate }) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="relative w-full">
            {/* Certificate Background */}
            <img
                src="/OCSP-preview.png"
                alt="OCSP Certificate"
                className="block h-auto w-full"
            />

            {/* Issued Date */}
            <div
                className="absolute font-medium text-black"
                style={{
                    top: "7.6%",
                    left: "75%",
                    fontSize: "clamp(10px, 1.1vw, 16px)",
                }}
            >
                {formatDate(certificate.issuedDate)}
            </div>

            {/* Certificate ID */}
            <div
                className="absolute font-medium text-black"
                style={{
                    top: "11.4%",
                    left: "83.3%",
                    fontSize: "clamp(10px, 1.1vw, 16px)",
                }}
            >
                {certificate.certificateId}
            </div>

            {/* Student Name */}
            <div
                className="absolute left-1/2 -translate-x-1/2 text-center font-semibold text-black"
                style={{
                    top: "52.5%",
                    width: "70%",
                    fontSize: "clamp(18px, 2.2vw, 32px)",
                }}
            >
                {certificate.studentName}
            </div>
        </div>
    );
};

export default OCSPPreview;