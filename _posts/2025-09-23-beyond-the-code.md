---
layout: post
title: "Tham gia sự kiện Beyond The Code và quá trình hoàn thiện web cá nhân đầu tiên bằng Jekyll"
date: 2025-09-23
tags: [jekyll, event, BeyondTheCode]
color: rgb(154,133,255)
cover: '/assets/BTC20251.jpg'
---
## Tham gia sự kiện ***Beyond The Code*** và quá trình hoàn thiện web cá nhân đầu tiên bằng Jekyll

Chào mọi người, mình là Safi hay Nguyễn Hoàng Long. Đây là bài đăng đầu tiên trên trang web này – một cột mốc nhỏ nhưng đầy ý nghĩa! Nội dung bài viết xoay quanh hành trình mình cài đặt và hoàn thiện website cá nhân đầu tiên, vừa là sản phẩm vòng 1 cho sự kiện Beyond The Code, vừa là nơi mình sẽ lưu lại hành trình 4 năm sắp tới tại [hcmus](https://hcmus.edu.vn/).

Bài viết được chia theo từng ngày, từ 20/9/2025 đến 23/9/2025.

### 20/9/2025: Vạn sự khởi đầu nan – nhưng đầy hứng khởi!

Tuy đã từng học qua HTML, CSS ở cấp 3, nhưng đây là lần đầu tiên mình thật sự "dấn thân" vào thế giới web – từ thiết kế, cấu hình đến deploy một website hoàn chỉnh bằng GitHub và Jekyll. Sau khi cân nhắc giữa nhiều công cụ và framework, mình chọn Jekyll vì sự tiện dụng, dễ tiếp cận và kho theme phong phú.

Mình quyết định sử dụng theme **[HardCandy-Jekyll](https://github.com/xseven77/HardCandy-Jekyll)** của tác giả [xseven77](https://github.com/xseven77) làm nền tảng để xây dựng website.

Khởi đầu không hề dễ dàng – mình gặp hàng loạt lỗi như lỗi hiển thị, lỗi Jekyll và bundle khi cài đặt trên Fedora. Nhưng sau khi kiên trì xử lý từng lỗi, cuối cùng mình đã chạy được website ở localhost:4000. Cảm giác lúc đó thật sự "wow", như vừa mở ra một cánh cửa mới!

```
bundle exec jekyll serve
```

![1](https://github.com/xseven77/HardCandy-Jekyll/raw/master/screenshot/1.png)

### 21/9/2025: Điều chỉnh thông tin và nội dung website.

Ngày thứ hai, mình bắt đầu tham khảo các blog và portfolio của một số anh chị đi trước, đặc biệt là [Dustin Nguyen](https://ducto489.github.io/) – sinh viên năm 2 cùng trường.

Từ đó, mình chỉnh sửa CSS, thêm thông tin cá nhân, và tích hợp tính năng bật/tắt giao diện sáng tối ở góc phải phía trên. Mình cũng tạo các phụ trang theo sở thích và gắn liên kết đến các nền tảng như Facebook, GitHub,...

Sau khi hoàn tất các chỉnh sửa, mình tạo repository mới trên GitHub và thực hiện các lệnh: 

```
git add .
git commit -m "Update _config.yml"
git push origin main
```

Website giờ đã có đầy đủ thông tin như bio, tên, trường và ngành học tại HCMUS. Và đặc biệt, mọi người có thể truy cập tại: https://safinguyen.github.io/ .

![2](/assets/picture/2bytc20251.png)

### 22/9/2025 - 23/9/2025: Viết blog đầu tiên – khởi đầu hành trình chia sẻ

Hai ngày cuối, mình tập trung vào việc chỉnh sửa nhỏ cho giao diện và bắt đầu viết bài blog đầu tiên này bằng [Typora](https://typora.io/) – một công cụ markdown cực kỳ trực quan và dễ dùng.

Việc viết blog giúp mình hệ thống lại quá trình học hỏi, đồng thời tạo động lực để tiếp tục khám phá và chia sẻ nhiều hơn trong tương lai. Mình tin rằng việc ghi lại từng bước tiến sẽ giúp bản thân trưởng thành hơn, và biết đâu, cũng truyền cảm hứng cho ai đó đang bắt đầu giống mình.

💡 Đây mới chỉ là điểm khởi đầu. Mình rất hào hứng với những gì sắp tới – từ việc phát triển thêm tính năng cho website, đến việc viết blog chia sẻ về học tập, dự án, và cuộc sống sinh viên. Nếu bạn đang đọc bài viết này, cảm ơn vì đã đồng hành cùng mình. Hẹn gặp lại ở những bài viết tiếp theo nhé!

##### 🔥 Let's go Beyond The Code – không chỉ viết code, mà còn viết nên hành trình của chính mình!
