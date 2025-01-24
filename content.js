// Biến để lưu trữ URL hiện tại
let currentUrl = null;

// Hàm hiển thị popup với URL
function showPopup(url) {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.bottom = "10px";
  popup.style.right = "10px";
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popup.style.color = "#fff";
  popup.style.padding = "10px 20px";
  popup.style.borderRadius = "8px";
  popup.style.zIndex = "9999";
  popup.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
  popup.innerText = `Current URL: ${url}`;

  // Thêm popup vào trang
  document.body.appendChild(popup);

  // Tự động xóa popup sau 5 giây
  setTimeout(() => {
    popup.remove();
  }, 5000);
}

// Hàm kiểm tra URL thay đổi
function checkUrlChange() {
  if (currentUrl !== window.location.href) {
    currentUrl = window.location.href; // Cập nhật URL hiện tại
    showPopup(currentUrl); // Hiển thị popup
  }
}

// Thiết lập interval để kiểm tra URL mỗi 1 giây
setInterval(checkUrlChange, 1000);
