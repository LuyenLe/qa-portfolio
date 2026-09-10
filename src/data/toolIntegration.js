/*
 * Tool integration state — where each tool's runnable artifact lives and how the
 * React portfolio surfaces it. This is presentation/navigation metadata only;
 * the tools themselves are the untouched standalone files under `tools/`, copied
 * verbatim to `public/tools/<slug>/index.html` at TASK 5 (no logic rewritten).
 *
 * From the TASK 1 inspection:
 *  - Tools 01–05 are single-file client-side HTML → embedded in an <iframe> from
 *    public/tools/<slug>/index.html.
 *  - Tools 01 & 02 have advanced features that need a local Python helper the
 *    visitor will not have → the hosted version is a partial demo; the core
 *    client-side feature still works and both degrade gracefully.
 *  - Tool 06 (SRS → Testcase) requires a Flask backend (webapp.py :5055) and
 *    CANNOT run on GitHub Pages. It renders an explicit "Backend required" state,
 *    never a fake/broken UI.
 *
 * `hosting` values:
 *   "static-html"    → fully client-side, embedded as-is
 *   "static-partial" → client-side HTML, some features need a local helper
 *   "backend"        → requires a running server; not hostable on GitHub Pages
 *
 * `embedPath` is relative (no leading slash). Resolve it against the Vite base
 * with `getToolEmbedUrl(id)` so it keeps working when the deploy task sets
 * `base` to '/<repo>/'.
 */
export const toolIntegration = {
  "api-token-checker": {
    hosting: "static-partial",
    sourcePath: "tools/01_API_Token_Checker/API_Token_Checker_v1.4.html",
    embedPath: "tools/api-token-checker/index.html",
    integrated: true,
    helperNote: {
      en: "Portfolio/demo build. The browser calls the token API directly, so live checks only pass where CORS allows it; the full workflow uses a local Python proxy (P011_token_proxy.py) that this hosted demo does not include. Failures are reported clearly rather than hidden.",
      vi: "Bản demo cho portfolio. Trình duyệt gọi trực tiếp API token nên việc kiểm tra trực tiếp chỉ chạy khi CORS cho phép; quy trình đầy đủ cần một Python proxy cục bộ (P011_token_proxy.py) không kèm theo trong bản demo này. Lỗi được báo rõ ràng thay vì bị ẩn đi.",
    },
  },
  "qa-contrast-checker": {
    hosting: "static-partial",
    sourcePath: "tools/02_QA_Contrast_Checker/QA_Contrast_Checker_v1.4.html",
    embedPath: "tools/qa-contrast-checker/index.html",
    integrated: true,
    helperNote: {
      en: "Portfolio/demo build. Contrast scanning of pasted / rendered markup runs fully in the browser. Scanning authenticated pages needs a local Python + Playwright helper (qa_contrast_helper.py) that this hosted demo does not include; that part degrades gracefully.",
      vi: "Bản demo cho portfolio. Việc quét tương phản trên markup dán vào / đã render chạy hoàn toàn trong trình duyệt. Quét các trang đã đăng nhập cần helper Python + Playwright cục bộ (qa_contrast_helper.py) không kèm theo trong bản demo này; phần đó sẽ giảm cấp một cách nhẹ nhàng.",
    },
  },
  "excel-data-cleaner": {
    hosting: "static-html",
    sourcePath: "tools/03_Excel_Data_Cleaner/Excel_Data_Cleaner_v2.1.html",
    embedPath: "tools/excel-data-cleaner/index.html",
    integrated: true,
    helperNote: null,
  },
  "gom-nhom-testcase": {
    hosting: "static-html",
    sourcePath: "tools/04_GomNhomTestCase/GomNhomTestCase.html",
    embedPath: "tools/gom-nhom-testcase/index.html",
    integrated: true,
    helperNote: null,
  },
  "excel-data-comparison": {
    hosting: "static-html",
    sourcePath: "tools/05_Excel_Data_Comparison/Excel_Data_Comparison_v1.0.html",
    embedPath: "tools/excel-data-comparison/index.html",
    integrated: true,
    helperNote: null,
  },
  "srs-to-testcase": {
    hosting: "backend",
    sourcePath: "tools/06_Srs_To_Testcase/webapp.py",
    embedPath: null,
    integrated: false,
    backendContract: {
      framework: "Flask",
      defaultPort: 5055,
      entry: "webapp.py",
      endpoints: [
        "POST /api/srs/upload",
        "GET  /api/srs/:id/fields",
        "GET  /api/srs/:id/images",
        "POST /api/srs/:id/images/upload",
        "POST /api/srs/:id/generate",
      ],
      note: {
        en: "This tool needs its Flask backend running (webapp.py on port 5055). It cannot run on GitHub Pages, which is static. Document parsing and Excel generation are deterministic Python — no LLM API call — and the \"AI-assisted\" step is a human reviewing UI screenshots against the generated fields.",
        vi: "Công cụ này cần backend Flask đang chạy (webapp.py ở cổng 5055). Nó không chạy được trên GitHub Pages vì đó là trang tĩnh. Việc đọc tài liệu và sinh Excel là Python xác định — không gọi API LLM — và bước \"AI hỗ trợ\" là con người đối chiếu ảnh chụp UI với các field đã sinh.",
      },
    },
  },
};

export function getToolIntegration(id) {
  return toolIntegration[id] ?? null;
}

/**
 * Absolute URL for a tool's embedded artifact, resolved against the Vite base
 * URL (import.meta.env.BASE_URL). Returns null for tools with no embeddable
 * artifact (e.g. the backend-only SRS → Testcase tool).
 */
export function getToolEmbedUrl(id) {
  const record = toolIntegration[id];
  if (!record || !record.embedPath) return null;
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/?$/, "/") + record.embedPath;
}
