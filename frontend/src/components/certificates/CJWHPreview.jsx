const CJWHPreview = ({ certificate }) => {

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
                src="/CJWH-preview.png"
                alt="CJWH Certificate"
                className="block h-auto w-full"
            />

            {/* Issued Date */}
            <div
                className="absolute font-medium text-black"
                style={{
                    top: "10.8%",
                    left: "75.9%",
                    fontSize: "clamp(10px, 1.1vw, 16px)",
                }}
            >
                {formatDate(certificate.issuedDate)}
            </div>

            {/* Certificate ID */}
            <div
                className="absolute font-medium text-black"
                style={{
                    top: "14.4%",
                    left: "84.1%",
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
                    width: "65%",
                    fontSize: "clamp(18px, 2.2vw, 32px)",
                }}
            >
                {certificate.studentName}
            </div>
        </div>
    );
};

export default CJWHPreview;