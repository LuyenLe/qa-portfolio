// Portfolio card data — generated from the current QA portfolio structure.
// Copied verbatim from portfolio-input/data/QA_Portfolio_Checklist_Cards_V1.js (TASK 2).
// IDs, slugs, EN/VI content, item counts, status fields, tags, coverage, and the
// (currently empty) `links` objects are preserved exactly.
//
// NOTE: the actual EN/VI artifact URLs are NOT stored on these objects. They are
// centralized in ./checklistUrls.js and selected by checklist id + language.
// Do not edit content here — update the source file and re-copy.

export const checklistCards = [
  {
    "id": "crud",
    "slug": "crud",
    "title": {
      "en": "CRUD Checklist",
      "vi": "CRUD Checklist"
    },
    "description": {
      "en": "Validate create, read, update, and delete behavior across record-oriented workflows.",
      "vi": "Kiểm tra hành vi tạo, đọc, cập nhật và xóa trong các workflow quản lý dữ liệu."
    },
    "itemCount": 92,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · Functional Validation",
      "vi": "Manual QA · Kiểm thử chức năng"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "CRUD",
      "Functional",
      "Data Integrity"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "import-excel",
    "slug": "import-excel",
    "title": {
      "en": "Import Excel Checklist",
      "vi": "Import Excel Checklist"
    },
    "description": {
      "en": "Validate Excel import processing, data quality, integrity, and error handling.",
      "vi": "Kiểm tra xử lý import Excel, chất lượng dữ liệu, tính toàn vẹn và xử lý lỗi."
    },
    "itemCount": 57,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · Data Validation",
      "vi": "Manual QA · Data Validation"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "Import",
      "Excel",
      "Data Quality"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "export-excel",
    "slug": "export-excel",
    "title": {
      "en": "Export Excel Checklist",
      "vi": "Export Excel Checklist"
    },
    "description": {
      "en": "Validate exported data, structure, consistency, and functional correctness.",
      "vi": "Kiểm tra dữ liệu export, cấu trúc, tính nhất quán và tính đúng đắn của chức năng."
    },
    "itemCount": 36,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · Functional Validation",
      "vi": "Manual QA · Kiểm thử chức năng"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "Export",
      "Excel",
      "Data Integrity"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "search-filter-sort",
    "slug": "search-filter-sort",
    "title": {
      "en": "Search / Filter / Sort Checklist",
      "vi": "Search / Filter / Sort Checklist"
    },
    "description": {
      "en": "Validate search, filtering, sorting, combined interactions, and result behavior.",
      "vi": "Kiểm tra tìm kiếm, lọc, sắp xếp, kết hợp các điều kiện và hành vi kết quả."
    },
    "itemCount": 35,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · Functional Validation",
      "vi": "Manual QA · Kiểm thử chức năng"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "Search",
      "Filter",
      "Sort",
      "Pagination"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "ui-ux",
    "slug": "ui-ux",
    "title": {
      "en": "UI/UX Checklist",
      "vi": "UI/UX Checklist"
    },
    "description": {
      "en": "Validate interface consistency, layout, typography, states, and visual behavior.",
      "vi": "Kiểm tra tính nhất quán giao diện, layout, typography, các trạng thái và hành vi hiển thị."
    },
    "itemCount": 73,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · UI/UX Validation",
      "vi": "Manual QA · Kiểm thử UI/UX"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "UI",
      "UX",
      "Accessibility",
      "Visual"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "security",
    "slug": "security",
    "title": {
      "en": "Security Checklist",
      "vi": "Security Checklist"
    },
    "description": {
      "en": "Basic manual security validation covering authentication, input handling, access control, and security-related behavior.",
      "vi": "Kiểm tra bảo mật cơ bản bằng Manual QA, bao gồm xác thực, input, quyền truy cập và các hành vi liên quan đến bảo mật."
    },
    "itemCount": null,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · Basic Security Validation",
      "vi": "Manual QA · Basic Security Validation"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "Security",
      "Authentication",
      "Authorization",
      "Input Validation"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "sql-data-validation",
    "slug": "sql-data-validation",
    "title": {
      "en": "SQL / Data Validation Checklist",
      "vi": "SQL / Data Validation Checklist"
    },
    "description": {
      "en": "Validate database records, CRUD effects, data consistency, and cross-layer reconciliation.",
      "vi": "Kiểm tra dữ liệu database, tác động CRUD, tính nhất quán và đối chiếu dữ liệu giữa các layer."
    },
    "itemCount": 50,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · Data Validation",
      "vi": "Manual QA · Data Validation"
    },
    "coverage": {
      "en": "31 Core + 19 Conditional",
      "vi": "31 Core + 19 Conditional"
    },
    "tags": [
      "SQL",
      "Database",
      "Data Validation",
      "Reconciliation"
    ],
    "status": "ready",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  },
  {
    "id": "api-testing",
    "slug": "api-testing",
    "title": {
      "en": "API Testing Checklist",
      "vi": "API Testing Checklist"
    },
    "description": {
      "en": "Validate API authentication, headers, parameters, responses, status behavior, schema, and errors.",
      "vi": "Kiểm tra authentication, header, parameter, response, status, schema và error của API."
    },
    "itemCount": 78,
    "artifactType": "Excel",
    "scope": {
      "en": "Manual QA · API Validation",
      "vi": "Manual QA · Kiểm thử API"
    },
    "coverage": {
      "en": "Core + Conditional Extensions",
      "vi": "Core + Conditional Extensions"
    },
    "tags": [
      "API",
      "REST",
      "Postman",
      "HTTP"
    ],
    "status": "review",
    "links": {
      "en": "",
      "vi": ""
    },
    "linkLabel": {
      "en": "Open Checklist",
      "vi": "Mở Checklist"
    }
  }
];
