from openpyxl import load_workbook
from datetime import datetime


# ==============================
# Configuration
# ==============================

EXCEL_FILE = "calicut_certificate.xlsx"

REQUIRED_COLUMNS = [
    "Student Name",
    "Student/Registration ID",
    "Course/Program",
    "Batch",
    "Certificate ID/Certificate Number",
    "Certificate Issued Date",
    "Branch",
]

VALID_CERTIFICATE_TYPES = {
    "ADIS",
    "OCSA",
    "OCSP",
    "CJWH",
}


# ==============================
# Helper functions
# ==============================

def clean_string(value):
    """
    Convert a cell value to a clean string.
    """
    if value is None:
        return ""

    return str(value).strip()


def format_date(value):
    """
    Convert Excel date into YYYY-MM-DD format.
    """

    if isinstance(value, datetime):
        return value.strftime("%Y-%m-%d")

    if value is None:
        return ""

    value = str(value).strip()

    return value


def get_certificate_type(course):
    """
    Determine certificate type from Course/Program.
    """

    course = clean_string(course).upper()

    if course in VALID_CERTIFICATE_TYPES:
        return course

    return ""


# ==============================
# Load Excel
# ==============================

workbook = load_workbook(
    EXCEL_FILE,
    data_only=True
)

sheet = workbook.active

print("\n========================================")
print("CERTIFICATE DATA VALIDATION")
print("========================================")

print(f"\nExcel sheet: {sheet.title}")


# ==============================
# Read headers
# ==============================

headers = [
    sheet.cell(row=1, column=column).value
    for column in range(1, 8)
]

print("\nExcel columns:")

for index, header in enumerate(headers, start=1):
    print(f"{index}. {header}")


# ==============================
# Check headers
# ==============================

if headers != REQUIRED_COLUMNS:
    print("\nERROR: Excel columns do not match expected columns.")

    print("\nExpected:")
    for column in REQUIRED_COLUMNS:
        print(f"- {column}")

    print("\nFound:")
    for column in headers:
        print(f"- {column}")

    raise SystemExit


print("\nColumn structure: OK")


# ==============================
# Process records
# ==============================

valid_records = []
invalid_records = []

student_ids = {}
certificate_ids = {}

total_rows = 0

for row_number in range(2, sheet.max_row + 1):

    # Read the first 7 cells
    row_values = [
        sheet.cell(row=row_number, column=column).value
        for column in range(1, 8)
    ]

    # Skip completely empty rows
    if all(value is None for value in row_values):
        continue

    # Count only rows that actually contain data
    total_rows += 1

    # --------------------------------
    # Read Excel values
    # --------------------------------

    student_name = sheet.cell(row=row_number, column=1).value
    student_id = sheet.cell(row=row_number, column=2).value
    course = sheet.cell(row=row_number, column=3).value
    batch = sheet.cell(row=row_number, column=4).value
    certificate_id = sheet.cell(row=row_number, column=5).value
    issued_date = sheet.cell(row=row_number, column=6).value
    branch = sheet.cell(row=row_number, column=7).value

    # --------------------------------
    # Clean values
    # --------------------------------

    student_name = clean_string(student_name)
    student_id = clean_string(student_id)
    course = clean_string(course)
    batch = clean_string(batch)
    certificate_id = clean_string(certificate_id)
    branch = clean_string(branch)

    issued_date = format_date(issued_date)

    certificate_type = get_certificate_type(course)

    # --------------------------------
    # Validation
    # --------------------------------

    errors = []

    if not student_name:
        errors.append("Student name is missing")

    if not student_id:
        errors.append("Student ID is missing")

    if not course:
        errors.append("Course is missing")

    if not batch:
        errors.append("Batch is missing")

    if not certificate_id:
        errors.append("Certificate ID is missing")

    if not issued_date:
        errors.append("Issued date is missing")

    if not branch:
        errors.append("Branch is missing")

    if not certificate_type:
        errors.append(
            f"Invalid certificate type: {course}"
        )

    # --------------------------------
    # Check duplicate Student ID
    # --------------------------------

    if student_id:

        if student_id in student_ids:
            errors.append(
                f"Duplicate Student ID "
                f"(also found in row {student_ids[student_id]})"
            )
        else:
            student_ids[student_id] = row_number

    # --------------------------------
    # Check duplicate Certificate ID
    # --------------------------------

    if certificate_id:

        if certificate_id in certificate_ids:
            errors.append(
                f"Duplicate Certificate ID "
                f"(also found in row {certificate_ids[certificate_id]})"
            )
        else:
            certificate_ids[certificate_id] = row_number

    # --------------------------------
    # Create mapped record
    # --------------------------------

    record = {
        "studentName": student_name,
        "studentId": student_id,
        "course": course,
        "batch": batch,
        "certificateId": certificate_id,
        "issuedDate": issued_date,
        "branch": branch,
        "certificateType": certificate_type,
    }

    # --------------------------------
    # Store valid / invalid records
    # --------------------------------

    if errors:

        invalid_records.append({
            "row": row_number,
            "errors": errors,
            "data": record,
        })

    else:

        valid_records.append(record)
# ==============================
# Summary
# ==============================

print("\n========================================")
print("VALIDATION SUMMARY")
print("========================================")

print(f"\nTotal records: {total_rows}")
print(f"Valid records: {len(valid_records)}")
print(f"Invalid records: {len(invalid_records)}")

print(
    f"Duplicate Student IDs: "
    f"{total_rows - len(set(student_ids.keys()))}"
)

print(
    f"Duplicate Certificate IDs: "
    f"{total_rows - len(set(certificate_ids.keys()))}"
)


# ==============================
# Show invalid records
# ==============================

if invalid_records:

    print("\n========================================")
    print("INVALID RECORDS")
    print("========================================")

    for item in invalid_records:

        print(f"\nExcel Row: {item['row']}")

        for error in item["errors"]:
            print(f"  - {error}")

        print("  Data:")
        print(f"    {item['data']}")


# ==============================
# Show sample mapped records
# ==============================

print("\n========================================")
print("SAMPLE MAPPED RECORDS")
print("========================================")

for index, record in enumerate(valid_records[:5], start=1):

    print(f"\nRecord {index}:")

    for key, value in record.items():
        print(f"  {key}: {value}")


# ==============================
# Final status
# ==============================

print("\n========================================")

if invalid_records:
    print("STATUS: VALIDATION FAILED")
    print("Please fix the invalid records before migration.")

else:
    print("STATUS: VALIDATION PASSED")
    print("All records are ready for migration.")

print("\nNO DATA WAS SENT TO MONGODB.")
print("NO API REQUESTS WERE MADE.")
print("========================================")