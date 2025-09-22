---
layout: post
title: "Tham gia sự kiện Beyond The Code và quá trình hoàn thiện web cá nhân đầu tiên bằng Jekyll"
date: 2025-09-22
tags: [jekyll, event]
color: rgb(154,133,255)
cover: '/assets/your-cover.png'
---

## Tham gia sự kiên ***Beyond The Code*** và quá trình hoàn thiện web cá nhân đầu tiên bằng Jekyll

Chào mọi người mình là Safi hay Nguyễn Hoàng Long. Đây là bài đăng đầu tiên ở trang web này, với nội dung về quá trình mình cài đặt và hoàn thiện website này để làm sản phẩm vòng 1 cho Beyond The Code và cũng là blog cá nhân để mình lưu lại hành trình 4 năm sắp tới ở [hcmus](https://hcmus.edu.vn/).

 Bài viết sẽ được chia theo ngày từ ngày 20/9/2025 tới 23/9/2025.

### 20/9/2025: Vạn sự khởi đầu nan.

Tuy đã từng học code html,css ở cấp 3 nhưng đây là lần đầu mình thật sự tìm hiểu sâu về code web và cách thiết kế và deploy 1 websit thông qua github và jekyll. Lý do mình chọn jekyll khi so sánh với các cách thức và thư viện khác đó là vì độ tiện dụng dễ sử dụng và 1 thư viện theme đa dạng phong phú. Sau đó mình đã chọn theme  **[HardCandy-Jekyll](https://github.com/xseven77/HardCandy-Jekyll)** của tác giả  [xseven77](https://github.com/xseven77) và lấy theme này làm nền tảng xây dựng website. 

Bước đầu mình gặp nhiều lỗi như lỗi hiển thị, lỗi Jekyll và bundle khi bước đầu cài đặt trên hệ điều hành Fedora. Sau khi đã có thể chạy được web ở localhost:4000. Thông qua lệnh :

```bash
bundle exec jekyll serve
```

Thì trang web hiển thị như hình bên dưới.![1](https://github.com/xseven77/HardCandy-Jekyll/raw/master/screenshot/1.png)

###   21/9/2025: Điều chỉnh thông tin và nội dung website:

![image-20250922122802169](/home/long/.var/app/io.typora.Typora/config/Typora/typora-user-images/image-20250922122802169.png)

Ngày thứ 2 mình bắt đầu tham khảo các website blog và profilo của 1 số người khác như của [Dustin Nguyen](https://ducto489.github.io/) (sinh viên năm 2 cùng trường).

Và bắt đầu, điểu chỉnh css và bổ sung thông tin bản thân , thêm tính năng bật tắt giao diện sáng tối ở góc phải phía trên của web.

điều chỉnh các phụ trang theo ý thích và gắn liên kết tới các trang như facebook,github,.. của bản thân.

Sau đó tạo 1 repository mới trên Github và thực hiện chuỗi lệnh: 

```bash
git add .
git commit -m "Update _config.yml"
git push origin main
```

Qua nhiều lần điều chỉnh thì website đã có các thông tin như bio, tên, trường và ngành mình theo học ở Hcmus. Đồng thời có thể truy cập thông qua đường link https://safinguyen.github.io/ .

