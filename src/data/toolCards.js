// Portfolio card data — generated from the current QA portfolio structure.
// Copied verbatim from portfolio-input/data/QA_Portfolio_Tool_Cards_V1.js (TASK 2).
// Values, IDs, slugs, EN/VI content, versions, accents, access rules, and routes
// are preserved exactly. Do not edit content here — update the source file and re-copy.
// Do not put secrets, API keys, or rate-limit logic in this file.

export const toolCards = [
  {
    "id": "api-token-checker",
    "slug": "api-token-checker",
    "title": "API Token Checker",
    "version": "v1.4",
    "category": {
      "en": "API Testing",
      "vi": "API Testing"
    },
    "icon": "key",
    "accent": "blue",
    "description": {
      "en": "Check API token validity across multiple files and identify failed authentication cases.",
      "vi": "Kiểm tra token API trên nhiều file và xác định các trường hợp xác thực thất bại."
    },
    "features": {
      "en": [
        "Process multiple accounts",
        "Check token validity",
        "Identify failed cases",
        "Export failure results"
      ],
      "vi": [
        "Xử lý nhiều account",
        "Kiểm tra tính hợp lệ của token",
        "Xác định case thất bại",
        "Export danh sách lỗi"
      ]
    },
    "input": {
      "en": "Files",
      "vi": "Files"
    },
    "output": {
      "en": "Excel",
      "vi": "Excel"
    },
    "status": "available",
    "access": {
      "public": true,
      "downloadEnabled": false,
      "usageLimit": 3,
      "usageUnit": "IP"
    },
    "route": "/tools/api-token-checker"
  },
  {
    "id": "qa-contrast-checker",
    "slug": "qa-contrast-checker",
    "title": "QA Contrast Checker",
    "version": "v1.4",
    "category": {
      "en": "UI/UX Testing",
      "vi": "UI/UX Testing"
    },
    "icon": "contrast",
    "accent": "purple",
    "description": {
      "en": "Check visual contrast and identify potential accessibility issues in UI designs.",
      "vi": "Kiểm tra độ tương phản và phát hiện các vấn đề accessibility tiềm ẩn trong giao diện."
    },
    "features": {
      "en": [
        "Check text/background contrast",
        "Identify contrast issues",
        "Support visual QA validation",
        "Useful for UI/UX review"
      ],
      "vi": [
        "Kiểm tra tương phản text/background",
        "Phát hiện vấn đề contrast",
        "Hỗ trợ kiểm tra UI",
        "Hữu ích cho review UI/UX"
      ]
    },
    "input": {
      "en": "Image / UI",
      "vi": "Ảnh / UI"
    },
    "output": {
      "en": "Report",
      "vi": "Report"
    },
    "status": "available",
    "access": {
      "public": true,
      "downloadEnabled": false,
      "usageLimit": 3,
      "usageUnit": "IP"
    },
    "route": "/tools/qa-contrast-checker"
  },
  {
    "id": "excel-data-cleaner",
    "slug": "excel-data-cleaner",
    "title": "Excel Data Cleaner",
    "version": "v2.1",
    "category": {
      "en": "Data Testing",
      "vi": "Data Testing"
    },
    "icon": "clean",
    "accent": "green",
    "description": {
      "en": "Clean and filter large Excel datasets based on defined QA rules.",
      "vi": "Làm sạch và lọc dữ liệu Excel lớn theo các rule QA được định nghĩa."
    },
    "features": {
      "en": [
        "Process large datasets",
        "Filter unwanted records",
        "Apply keyword-based rules",
        "Export cleaned data"
      ],
      "vi": [
        "Xử lý dataset lớn",
        "Lọc record không mong muốn",
        "Áp dụng rule theo keyword",
        "Export dữ liệu đã làm sạch"
      ]
    },
    "input": {
      "en": "Excel",
      "vi": "Excel"
    },
    "output": {
      "en": "Excel",
      "vi": "Excel"
    },
    "status": "available",
    "access": {
      "public": true,
      "downloadEnabled": false,
      "usageLimit": 3,
      "usageUnit": "IP"
    },
    "route": "/tools/excel-data-cleaner"
  },
  {
    "id": "gom-nhom-testcase",
    "slug": "gom-nhom-testcase",
    "title": "GomNhomTestCase",
    "version": null,
    "category": {
      "en": "Test Case Management",
      "vi": "Quản lý Test Case"
    },
    "icon": "layers",
    "accent": "orange",
    "description": {
      "en": "Group and organize test cases to make large testcase sets easier to manage and review.",
      "vi": "Gom nhóm và tổ chức testcase để dễ quản lý và review các bộ testcase lớn."
    },
    "features": {
      "en": [
        "Group test cases",
        "Organize large testcase sets",
        "Support testcase review",
        "Reduce manual grouping work"
      ],
      "vi": [
        "Gom nhóm testcase",
        "Tổ chức bộ testcase lớn",
        "Hỗ trợ review testcase",
        "Giảm thao tác gom nhóm thủ công"
      ]
    },
    "input": {
      "en": "Excel",
      "vi": "Excel"
    },
    "output": {
      "en": "Excel",
      "vi": "Excel"
    },
    "status": "available",
    "access": {
      "public": true,
      "downloadEnabled": false,
      "usageLimit": 3,
      "usageUnit": "IP"
    },
    "route": "/tools/gom-nhom-testcase"
  },
  {
    "id": "excel-data-comparison",
    "slug": "excel-data-comparison",
    "title": "Excel Data Comparison",
    "version": "v1.0",
    "category": {
      "en": "Data Validation",
      "vi": "Data Validation"
    },
    "icon": "compare",
    "accent": "red",
    "description": {
      "en": "Compare Excel datasets and quickly identify differences between two data sources.",
      "vi": "Đối chiếu hai dataset Excel và nhanh chóng xác định các điểm khác biệt."
    },
    "features": {
      "en": [
        "Compare two datasets",
        "Detect added records",
        "Detect removed records",
        "Identify changed data"
      ],
      "vi": [
        "Đối chiếu hai dataset",
        "Phát hiện record được thêm",
        "Phát hiện record bị xóa",
        "Xác định dữ liệu thay đổi"
      ]
    },
    "input": {
      "en": "Excel",
      "vi": "Excel"
    },
    "output": {
      "en": "Comparison Report",
      "vi": "Comparison Report"
    },
    "status": "available",
    "access": {
      "public": true,
      "downloadEnabled": false,
      "usageLimit": 3,
      "usageUnit": "IP"
    },
    "route": "/tools/excel-data-comparison"
  },
  {
    "id": "srs-to-testcase",
    "slug": "srs-to-testcase",
    "title": "SRS → Testcase",
    "version": "v1.0",
    "category": {
      "en": "AI-assisted QA",
      "vi": "AI-assisted QA"
    },
    "icon": "document-check",
    "accent": "indigo",
    "description": {
      "en": "Generate structured test cases from SRS requirements and refine fields against real UI screenshots.",
      "vi": "Sinh testcase có cấu trúc từ SRS và đối chiếu, hiệu chỉnh field theo ảnh chụp UI thực tế."
    },
    "features": {
      "en": [
        "Upload SRS (.docx)",
        "Select a feature to process",
        "Compare with UI screenshots",
        "Refine testcase fields",
        "Export testcase to Excel"
      ],
      "vi": [
        "Upload SRS (.docx)",
        "Chọn feature cần xử lý",
        "Đối chiếu với ảnh UI",
        "Hiệu chỉnh field theo UI thực tế",
        "Export testcase ra Excel"
      ]
    },
    "input": {
      "en": "SRS + Screenshots",
      "vi": "SRS + Ảnh màn hình"
    },
    "output": {
      "en": "Excel Testcase",
      "vi": "Excel Testcase"
    },
    "workflow": [
      "SRS",
      "Feature",
      "UI Screenshot",
      "Field Refinement",
      "Testcase"
    ],
    "status": "available",
    "access": {
      "public": true,
      "downloadEnabled": false,
      "usageLimit": 3,
      "usageUnit": "IP"
    },
    "route": "/tools/srs-to-testcase"
  }
];
