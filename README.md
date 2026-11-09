# Vietnamese Bible Tooltip 📖✨

Thư viện JavaScript độc lập, nhẹ (< 10KB sau khi nén), không phụ thuộc thư viện ngoài (Zero Dependencies), giúp **tự động quét và nhận diện các trích dẫn Kinh Thánh tiếng Việt** trong văn bản (ví dụ: `Ma-thi-ơ 1:1`, `Giăng 3:16-17`, `1 Cô-rinh-tô 13:4-8`, `Thi Thiên 23`...) và **hiển thị popup đọc câu Kinh Thánh khi rê chuột (hover trên desktop) hoặc chạm (tap trên mobile)**.

Thư viện được đóng gói đa định dạng (Standalone Script thẻ `<script>`, ESM, CJS, TypeScript Types) để có thể tích hợp tức thì vào:
* **Ghost CMS** (qua Code Injection hoặc Theme Handlebars).
* **WordPress** / Blogger / Web HTML tĩnh.
* Các framework hiện đại: **Next.js, React, Vue, Svelte, Astro...**

---

## 🚀 Tính năng nổi bật

- ⚡ **Nhận diện đầy đủ 66 sách Kinh Thánh**:
  - Tên tiếng Việt chuẩn: *Sáng Thế Ký, Ma-thi-ơ, Giăng, Khải Huyền...*
  - Biến thể dấu nối & không dấu: *Sáng-thế Ký, Ma-thi-ơ, Mathiơ...*
  - Viết tắt phổ biến: *Mt 1:1, Stk 1:1, Tv 23, 1Cr 13:4...*
  - Tên gọi Công giáo: *Thánh Vịnh, Gioan, Khởi Nguyên, Ga 3, 16...*
  - Tên tiếng Anh & chuẩn OSIS: *Genesis, Matthew, John, 1Cor...*
- 🎯 **Quét thông minh (Smart DOM Scanner)**:
  - Tự động bỏ qua các thẻ liên kết `<a>`, nút `<button>`, khối mã nguồn `<code>`, `<pre>`, thẻ script, form input... không làm hỏng cấu trúc HTML hay event listener sẵn có.
- 💬 **Giao diện Tooltip hiện đại & Responsive**:
  - Tự động căn chỉnh thông minh (nổi phía trên hoặc lật xuống dưới nếu gần mép màn hình).
  - Hoạt động mượt mà cả trên **Desktop** (rê chuột mở popup, có độ trễ hợp lý) và **Mobile** (chạm vào câu để mở/đóng).
  - Tích hợp sẵn nút **Sao chép câu Kinh Thánh** (Copy to clipboard) và nút **Đọc trọn bộ chương** (liên kết sang YouVersion / Bible.com).
  - Hỗ trợ **Dark Mode** tự động theo hệ điều hành hoặc chỉ định qua cấu hình.
- 🌐 **Nguồn dữ liệu sẵn có & Bộ nhớ đệm (Cache)**:
  - Tích hợp sẵn API Kinh Thánh Tiếng Việt miễn phí (Bản Truyền Thống 1925 / getBible v2).
  - Tự động cache theo từng chương: người đọc hover câu thứ hai trong cùng chương sẽ hiện ra ngay lập tức (0ms độ trễ).
  - Tự động chuẩn hóa các ký tự chữ cổ (ví dụ chữ `Ð` Latin Eth thành `Đ` tiếng Việt chuẩn Unicode).
  - Hỗ trợ cắm API hoặc hàm lấy dữ liệu tùy biến (`customFetcher`).

---

## 📦 Cách cài đặt & Sử dụng

### Cách 1: Nhúng trực tiếp qua thẻ `<script>` (Dễ nhất cho Ghost, WordPress, Web tĩnh)

Chỉ cần sao chép 2 tệp trong thư mục `dist/` vào website của bạn:
1. `vietnamese-bible-tooltip.css`
2. `vietnamese-bible-tooltip.iife.min.js`

```html
<!-- 1. Nhúng file CSS vào thẻ <head> -->
<link rel="stylesheet" href="/path/to/vietnamese-bible-tooltip.css">

<!-- 2. Nhúng file JS trước thẻ đóng </body> -->
<script src="/path/to/vietnamese-bible-tooltip.iife.min.js"></script>

<script>
  // 3. Khởi chạy thư viện (Mặc định tự động dùng bản dịch VI2010)
  VietnameseBibleTooltip.init({
    target: '.post-content', // Vùng chứa văn bản bài viết cần quét (mặc định: 'body')
    showCopyButton: true,
    showChapterLink: true,
  });
</script>
```

---

### Cách 2: Dùng trong các dự án hiện đại (Next.js, React, Vue, Vite, Astro)

Nếu import theo dạng module:

```ts
import { init } from 'vietnamese-bible-tooltip';
import 'vietnamese-bible-tooltip/dist/vietnamese-bible-tooltip.css';

// Trong useEffect (React) hoặc onMounted (Vue)
useEffect(() => {
  const vb = init({
    target: '.article-body',
    observe: true, // Tự động quét các nội dung tải động thêm sau này
  });

  return () => vb.destroy();
}, []);
```

---

## ⚙️ Các tùy chọn cấu hình (`options`)

| Tùy chọn | Kiểu dữ liệu | Mặc định | Ý nghĩa |
| :--- | :--- | :--- | :--- |
| `target` | `string \| HTMLElement` | `'body'` | Selector CSS hoặc phần tử chứa bài viết cần quét câu Kinh Thánh. |
| `translation` | `string` | `'VI2010'` | Mã bản dịch mặc định (`VI2010` / `RVV11`, `VI1925`, `BD2011`, `NVB`). |
| `translationLabel` | `string` | `'Bản Hiệu Đính 2010'` | Tên bản dịch hiển thị trên huy hiệu tiêu đề của popup. |
| `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Chế độ sáng/tối. `'auto'` sẽ tự đi theo cấu hình thiết bị của người đọc. |
| `showCopyButton` | `boolean` | `true` | Bật/tắt nút "Sao chép" câu Kinh Thánh vào bộ nhớ tạm. |
| `showChapterLink` | `boolean` | `true` | Bật/tắt nút mở link đọc trọn vẹn cả chương trên YouVersion (tự động trỏ sang VIE2010). |
| `observe` | `boolean` | `false` | Bật `MutationObserver` để tự động nhận diện câu Kinh Thánh khi trang web tải thêm nội dung (infinite scroll / AJAX). |
| `hoverDelay` | `number` (ms) | `120` | Thời gian rê chuột trước khi popup hiển thị (tránh hiện ngoài ý muốn khi cuộn nhanh). |
| `hideDelay` | `number` (ms) | `200` | Thời gian ân hạn khi di chuột ra ngoài trước khi đóng popup. |
| `excludeSelectors` | `string[]` | *Mặc định bỏ qua `a, button, code, pre...`* | Danh sách các selector thẻ HTML không bao giờ quét. |
| `customFetcher` | `Function` | `undefined` | Hàm async tùy biến để lấy dữ liệu câu Kinh Thánh từ server / cơ sở dữ liệu nội bộ riêng của bạn. |

### Các bản dịch được hỗ trợ sẵn định tuyến YouVersion

| Mã bản dịch | Tên hiển thị | YouVersion Code |
| :--- | :--- | :--- |
| **`VI2010` / `RVV11`** *(Mặc định)* | **Bản Hiệu Đính 2010** | `VIE2010` (ID: 151) |
| **`VI1925`** | Bản Truyền Thống 1925 | `VIE1925` (ID: 193) |
| **`BD2011`** | Bản Dịch 2011 | `BD2011` (ID: 19) |
| **`NVB`** | Bản Dịch Mới | `NVB` (ID: 449) |
| **`KTHD`** | Kinh Thánh Hiện Đại | `KTHD` (ID: 1638) |
| **`BPT`** | Bản Phổ Thông | `BPT` (ID: 205) |

---

## 🛠️ Tùy biến API nguồn câu Kinh Thánh riêng (`customFetcher`)

Nếu dự án của bạn có sẵn Database hoặc API riêng cho các bản dịch khác (như Bản Dịch Mới 2002, RVV11, BD2011), bạn có thể truyền hàm `customFetcher`:

```js
VietnameseBibleTooltip.init({
  target: '.article',
  customFetcher: async ({ bookName, chapter, verseStart, verseEnd }) => {
    // Gọi API riêng của bạn
    const res = await fetch(`/api/bible?book=${bookName}&chapter=${chapter}&from=${verseStart}&to=${verseEnd || verseStart}`);
    const data = await res.json();

    return {
      title: `${bookName} ${chapter}:${verseStart}${verseEnd ? `-${verseEnd}` : ''}`,
      verses: data.verses, // Mảng [{ verse: 1, text: "Nội dung câu..." }]
      translation: 'Bản Dịch Mới',
      chapterUrl: `https://my-bible-site.com/read/${bookName}/${chapter}`,
    };
  }
});
```

---

## 🎨 Tùy biến giao diện (CSS Variables)

Bạn có thể đổi màu sắc hoặc kích thước popup dễ dàng bằng cách ghi đè biến CSS trong stylesheet của website bạn:

```css
:root {
  --vb-accent: #059669;        /* Màu chủ đạo (link và tiêu đề) */
  --vb-accent-hover: #047857;  /* Màu khi hover */
  --vb-accent-light: #ecfdf5;  /* Màu nền huy hiệu / highlight */
  --vb-radius: 14px;           /* Độ bo tròn góc */
  --vb-max-width: 400px;       /* Chiều rộng tối đa của popup */
}
```

---

## 🧪 Thử nghiệm (Demo) & Kiểm thử (Tests)

Trong thư mục package:

1. **Chạy thử Demo trực quan**:
   Mở trực tiếp tệp `demo/index.html` trong trình duyệt web của bạn để xem và trải nghiệm thử nghiệm tương tác thực tế.

2. **Chạy bài kiểm tra tự động (Unit Tests)**:
   ```bash
   npm test
   ```
   Kiểm tra khả năng phân tích cú pháp của 66 sách, các dạng viết tắt, dấu ngăn cách, bảo vệ giới hạn chương, và bộ nhớ đệm.

3. **Biên dịch mã nguồn**:
   ```bash
   npm run build
   ```
   Tự động xuất bản các định dạng ESM, CJS, IIFE minified và tệp stylesheet vào thư mục `dist/`.
