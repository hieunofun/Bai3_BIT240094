# Bài 3 – Phan Văn Hiếu – BIT240094

**Sinh viên:** Phan Văn Hiếu

**MSSV:** BIT240094

## Mô tả

Bài thực hành gồm hai màn hình theo ảnh mẫu, nền trắng:

- Màn hình 1: sáu ô màu dựng bằng Flexbox, hàng đầu tỉ lệ 1:1, hàng giữa 1:1:2 và ô cam rộng toàn hàng. Form điền sẵn thông tin sinh viên, cho phép sửa. Nút **Click me** kiểm tra hai trường sau khi `trim()`, báo lỗi nếu thiếu và truyền dữ liệu sang màn hình 2.
- Màn hình 2: hiển thị **Screen 2**, **Name** và **Student ID** từ tham số điều hướng. Nút **Back** quay lại và giữ nội dung đã nhập.
- Có vùng an toàn, cuộn khi màn hình nhỏ hoặc mở bàn phím. Không có backend hay database.

## Công nghệ

Expo SDK 57, React Native 0.86, React 19, TypeScript và Expo Router. Dùng npm với `package-lock.json`.

## Cài đặt và chạy

Cài Node.js **22.13 trở lên** và Expo Go tương thích SDK 57.

```powershell
git clone https://github.com/hieunofun/Bai3_BIT240094.git
cd Bai3_BIT240094
npm ci
npm start
```

Quét QR bằng Expo Go trên điện thoại cùng mạng Wi-Fi. Có thể chạy `npm run android` khi đã mở máy ảo Android, hoặc `npm run web` để xem bằng trình duyệt. Trên macOS có thể dùng `npm run ios` với iOS Simulator.

## Cấu trúc chính

- `src/app/index.tsx`: màn hình ô màu và form.
- `src/app/screen2.tsx`: nhận tham số và hiển thị thông tin.
- `src/app/_layout.tsx`: cấu hình Expo Router.
- `src/components/`: bảng ô màu và nút cam dùng chung.
- `src/constants/colors.ts`: bảng màu bám ảnh mẫu.

## Kiểm tra

```powershell
npm run lint
npm run typecheck
npm run build:web
npx expo-doctor
```

Kiểm tra thao tác: sửa tên/MSSV → **Click me** → đối chiếu dữ liệu → **Back** → nội dung còn giữ nguyên. Thử từng trường trống hoặc chỉ chứa khoảng trắng, màn hình hẹp và nhấn nút khi bàn phím đang mở. Thư mục `dist/` và các file môi trường không được đưa lên Git.

Kết quả đã chạy: lint, typecheck, build web và `expo-doctor` (21/21) đều đạt. Bản build đã được kiểm tra bằng Playwright ở các khổ 287, 320, 375, 390, 414 và 768px: điều hướng, giữ dữ liệu khi Back, tiếng Việt/ký tự đặc biệt, trim, trường rỗng và nội dung dài đều đạt; không có lỗi JavaScript hay tràn ngang. Đã kiểm tra phím Enter/Next/Done trên web. Chưa chạy trên thiết bị Android/iOS hoặc kiểm tra bàn phím ảo thực tế; máy ảo Android chưa khởi động được do giới hạn tài nguyên máy phát triển.

Probe giao diện cũng không phát hiện bố cục vỡ khi quét từ 1440 xuống 375px. Các cảnh báo tương phản P1–P3 ở ô 6, nút Click me và ô 4 được giữ theo yêu cầu màu cam/xanh lá và chữ trắng trong ảnh mẫu.
