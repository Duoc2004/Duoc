function tuVan() {
    let hoTen = document.getElementById("hoTen").value;
    let tuoi = document.getElementById("tuoi").value;
    let ngheNghiep = document.getElementById("ngheNghiep").value;
    let soThich = document.getElementById("soThich").value.toLowerCase();
    let giaTien = document.getElementById("giaTien").value;

    let ketQua = document.getElementById("ketQua");

    // Xóa kết quả cũ
    ketQua.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Tên máy</th>
            <th>Giá</th>
        </tr>
    `;

    let danhSachDienThoai = [];

    if (ngheNghiep === "Sinh viên" && soThich.includes("game")) {
        danhSachDienThoai.push(["Xiaomi Black Shark", "8 triệu"]);
        danhSachDienThoai.push(["ASUS ROG Phone", "15 triệu"]);
    } else if (ngheNghiep === "Dân văn phòng" && soThich.includes("gọn nhẹ")) {
        danhSachDienThoai.push(["iPhone SE", "10 triệu"]);
        danhSachDienThoai.push(["Samsung Galaxy S23", "18 triệu"]);
    } else if (soThich.includes("chụp ảnh")) {
        danhSachDienThoai.push(["iPhone 15 Pro", "25 triệu"]);
        danhSachDienThoai.push(["Google Pixel 8", "20 triệu"]);
    } else if (soThich.includes("giá rẻ")) {
        danhSachDienThoai.push(["Samsung A54", "7 triệu"]);
        danhSachDienThoai.push(["Xiaomi Redmi Note 12", "5 triệu"]);
    } else if (soThich.includes("cao cấp")) {
        danhSachDienThoai.push(["iPhone 15 Pro Max", "30 triệu"]);
        danhSachDienThoai.push(["Samsung Galaxy S24 Ultra", "32 triệu"]);
    } else {
        danhSachDienThoai.push(["Không có sản phẩm phù hợp", "N/A"]);
    }

    danhSachDienThoai.forEach((dienThoai, index) => {
        let row = ketQua.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = dienThoai[0];
        row.insertCell(2).innerText = dienThoai[1];
    });
}
