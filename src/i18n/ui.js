/*
 * UI chrome strings ONLY — navigation, buttons, badges, and state labels that the
 * React components render themselves.
 *
 * Do NOT put homepage / tool / checklist CONTENT here. That content lives in the
 * data files (src/data/*) and already carries its own { en, vi } values.
 *
 * Shape: { key: { en, vi } }. Read with `ui.key[lang]` or `t(ui.key, lang)`.
 */
export const ui = {
  // Navigation
  nav_home: { en: 'Home', vi: 'Home' },
  nav_tools: { en: 'QA Tools', vi: 'QA Tools' },
  nav_checklists: { en: 'QA Checklists', vi: 'QA Checklists' },

  // Header / navigation chrome
  brand_role: {
    en: 'Manual QA Tester · Frontend Background',
    vi: 'Manual QA Tester · Nền tảng Frontend',
  },
  primary_nav_label: { en: 'Primary', vi: 'Chính' },
  skip_to_content: { en: 'Skip to content', vi: 'Bỏ qua đến nội dung' },
  menu_open: { en: 'Open menu', vi: 'Mở menu' },
  menu_close: { en: 'Close menu', vi: 'Đóng menu' },

  // Language switcher
  language_label: { en: 'Language', vi: 'Ngôn ngữ' },
  lang_en: { en: 'Switch to English', vi: 'Chuyển sang tiếng Anh' },
  lang_vi: { en: 'Switch to Vietnamese', vi: 'Chuyển sang tiếng Việt' },
  lang_short_en: { en: 'EN', vi: 'EN' },
  lang_short_vi: { en: 'VI', vi: 'VI' },

  // Tool card / tool detail actions
  open_tool: { en: 'Open Tool', vi: 'Mở công cụ' },
  try_tool: { en: 'Try Tool', vi: 'Dùng thử' },
  backend_required: { en: 'Backend Required', vi: 'Cần backend' },
  tool_unavailable: { en: 'Unavailable', vi: 'Chưa khả dụng' },

  // QA Tools index page
  tools_eyebrow: { en: 'QA Tools', vi: 'QA Tools' },
  tools_title: { en: 'QA productivity tools', vi: 'Công cụ tăng năng suất QA' },
  tools_intro: {
    en: 'A small set of tools built to speed up repetitive manual-QA work — token checks, data cleaning, test-case grouping, dataset comparison and SRS-driven test-case drafting. Each runs in the browser unless a backend is noted.',
    vi: 'Một nhóm nhỏ công cụ được xây để tăng tốc các việc QA thủ công lặp đi lặp lại — kiểm tra token, làm sạch dữ liệu, gom nhóm test case, đối chiếu dataset và soạn test case từ SRS. Mỗi công cụ chạy trong trình duyệt trừ khi có ghi chú cần backend.',
  },
  tool_category_label: { en: 'Category', vi: 'Nhóm' },
  tool_capabilities_label: { en: 'What it does', vi: 'Chức năng chính' },
  tool_io_label: { en: 'Input / Output', vi: 'Đầu vào / Đầu ra' },
  tool_access_label: { en: 'Access', vi: 'Truy cập' },
  tool_access_value: {
    en: 'Free · runs in your browser · no download',
    vi: 'Miễn phí · chạy trong trình duyệt · không tải xuống',
  },
  tool_access_value_backend: {
    en: 'Free · local backend required · no download',
    vi: 'Miễn phí · cần backend cục bộ · không tải xuống',
  },
  tool_demo_flag: { en: 'Demo build', vi: 'Bản demo' },

  // Tool detail page
  tool_detail_eyebrow: { en: 'QA Tool', vi: 'Công cụ QA' },
  tool_overview: { en: 'Overview', vi: 'Tổng quan' },
  tool_workflow_label: { en: 'Workflow', vi: 'Quy trình' },
  tool_interface: { en: 'Tool interface', vi: 'Giao diện công cụ' },
  tool_interface_preview: { en: 'Interface preview', vi: 'Xem trước giao diện' },
  tool_interface_preview_note: {
    en: 'This is the actual tool interface running against a bundled sample SRS. Real .docx parsing and Excel generation run on the Flask backend below — this preview makes no backend calls and generates no files.',
    vi: 'Đây là giao diện thật của công cụ, chạy trên một SRS mẫu đi kèm. Việc đọc file .docx thật và sinh Excel chạy trên backend Flask bên dưới — bản xem trước này không gọi backend và không tạo file.',
  },
  tool_iframe_title: { en: 'Embedded tool interface', vi: 'Giao diện công cụ được nhúng' },
  tool_open_new_tab: { en: 'Open in a new tab', vi: 'Mở trong tab mới' },
  tool_demo_note_title: { en: 'About this demo build', vi: 'Về bản demo này' },
  tool_backend_title: { en: 'Backend required', vi: 'Cần backend' },
  tool_backend_howto: { en: 'Run it locally', vi: 'Chạy cục bộ' },
  tool_backend_step_entry: { en: 'Start the Flask app', vi: 'Khởi động ứng dụng Flask' },
  tool_backend_step_port: { en: 'Default port', vi: 'Cổng mặc định' },
  tool_backend_endpoints: { en: 'API endpoints', vi: 'API endpoints' },
  tool_not_embeddable: {
    en: 'This tool has no in-browser interface to embed here.',
    vi: 'Công cụ này không có giao diện chạy trong trình duyệt để nhúng ở đây.',
  },

  // Checklist card actions
  open_checklist: { en: 'Open Checklist', vi: 'Mở Checklist' },
  open_checklist_en: { en: 'EN', vi: 'EN' },
  open_checklist_vi: { en: 'VI', vi: 'VI' },
  coming_soon: { en: 'Coming Soon', vi: 'Sắp có' },
  link_not_available: { en: 'Link not available yet', vi: 'Chưa có liên kết' },

  // QA Checklists index page
  checklists_eyebrow: { en: 'QA Checklists', vi: 'QA Checklists' },
  checklists_title: {
    en: 'Reusable QA checklists',
    vi: 'Bộ QA checklist tái sử dụng',
  },
  checklists_intro: {
    en: 'A set of reusable manual-QA checklist artifacts built from real project work — one per test area, maintained as living Google Sheets in English and Vietnamese. Each card opens the master artifact; the sheets are the source of truth, not this page.',
    vi: 'Một bộ QA checklist thủ công tái sử dụng, đúc kết từ công việc dự án thực tế — mỗi checklist cho một mảng kiểm thử, được duy trì dưới dạng Google Sheets song ngữ Anh/Việt. Mỗi thẻ mở tài liệu gốc; bảng tính mới là nguồn chuẩn, không phải trang này.',
  },
  checklist_open_en: { en: 'Open EN', vi: 'Mở bản EN' },
  checklist_open_vi: { en: 'Open VI', vi: 'Mở bản VI' },
  checklist_artifact_note: {
    en: 'Opens the master Google Sheet in a new tab',
    vi: 'Mở Google Sheet gốc trong tab mới',
  },
  checklist_tags_label: { en: 'Focus areas', vi: 'Nội dung trọng tâm' },
  status_ready: { en: 'Ready', vi: 'Sẵn sàng' },

  // Usage / fair-use limit (advisory only — NOT security enforcement)
  free_uses: { en: 'Free Uses', vi: 'Lượt dùng miễn phí' },
  usage_limit: { en: 'Usage Limit', vi: 'Giới hạn sử dụng' },
  uses_left: { en: 'uses left', vi: 'lượt còn lại' },
  usage_limit_reached: { en: 'Usage limit reached', vi: 'Đã đạt giới hạn sử dụng' },
  fair_use_note: {
    en: 'Fair-use limit — 3 runs per visitor',
    vi: 'Giới hạn sử dụng hợp lý — 3 lượt cho mỗi người dùng',
  },

  // Checklist card meta labels
  items: { en: 'Items', vi: 'Mục' },
  item_count_unknown: { en: 'Item count pending', vi: 'Chưa có số lượng mục' },
  coverage: { en: 'Coverage', vi: 'Phạm vi' },
  scope: { en: 'Scope', vi: 'Phạm vi áp dụng' },
  status_review: { en: 'In review', vi: 'Đang review' },

  // Home section headings (structural labels for sections the source data does
  // not carry its own heading for — content itself is never defined here).
  section_timeline: { en: 'Career Timeline', vi: 'Lộ trình sự nghiệp' },
  section_what_i_bring: { en: 'What I Bring to QA', vi: 'Tôi mang gì đến QA' },
  section_skills: { en: 'Skills', vi: 'Kỹ năng' },
  section_education: { en: 'Education', vi: 'Học vấn' },
  section_current_role: { en: 'Current', vi: 'Hiện tại' },

  // Home hero highlights — restate figures already stated in hero.summary /
  // hero.summary (VI). Not new data.
  hero_hl_qa_value: { en: '2+ years', vi: 'hơn 2 năm' },
  hero_hl_qa_label: { en: 'QA experience', vi: 'kinh nghiệm QA' },
  hero_hl_fe_value: { en: '8+ years', vi: 'hơn 8 năm' },
  hero_hl_fe_label: { en: 'frontend engineering', vi: 'kinh nghiệm Frontend' },
  hero_hl_ai_value: { en: 'AI-assisted', vi: 'AI hỗ trợ' },
  hero_hl_ai_label: { en: 'QA workflows', vi: 'workflow QA' },

  // Home hero — alt text for the supplied portrait of Lê Thị Luyến.
  hero_portrait_alt: {
    en: 'Portrait of Lê Thị Luyến, Manual QA Tester',
    vi: 'Chân dung Lê Thị Luyến, Manual QA Tester',
  },

  // Home hero — closing mantra shown at the foot of the hero. A fixed brand
  // tagline, identical in both languages (per the approved hero design).
  hero_tagline: {
    en: 'TEST · LEARN · IMPROVE · TOGETHER',
    vi: 'TEST · LEARN · IMPROVE · TOGETHER',
  },

  // Home — Contact section labels and CTAs. Email and phone come from the
  // approved CV; the Download CV CTA links to the real PDF in public/.
  contact_email_label: { en: 'Email', vi: 'Email' },
  contact_phone_label: { en: 'Phone', vi: 'Điện thoại' },
  contact_email_cta: { en: 'Email me', vi: 'Liên hệ qua Email' },
  contact_cv_cta: { en: 'Download CV', vi: 'Tải CV' },
  graduated: { en: 'Graduated', vi: 'Tốt nghiệp' },

  // Generic states
  loading: { en: 'Loading…', vi: 'Đang tải…' },
  error_generic: { en: 'Something went wrong.', vi: 'Đã có lỗi xảy ra.' },
  not_found: { en: 'Page not found', vi: 'Không tìm thấy trang' },
  back_to_home: { en: 'Back to Home', vi: 'Về trang chủ' },
  back_to_tools: { en: 'Back to QA Tools', vi: 'Về QA Tools' },
};
